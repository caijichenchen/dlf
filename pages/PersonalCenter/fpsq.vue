<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">申请发票</block>
		</cu-custom>
		<view v-if="fpval == 0">
			<view class="noval">您暂时没有可开发票的订单哦</view>
		</view>
		<view v-else>
			<view class="fp-item" v-for="(item, index) in fplist" :key="index">
				<view>
					<checkbox-group @click="selectItem(index)">
						<label><checkbox :checked="item.checked" style="transform:scale(0.6)" /></label>
					</checkbox-group>
				</view>
				<view style="width: 100%;">
					<view style="display: flex;width: 100%;">
						<view>商品名称:{{ item.message }}</view>
						<view style="color: #FF8009;margin-left: auto;">￥{{ item.money }}</view>
					</view>
					<view>购买时间:{{ item.time }}</view>
				</view>
			</view>
		</view>
		<view class="choice-box" v-if="fpval != 0">
			<view class="cb-t">
				<checkbox-group @click="selectAll">
					<label>
						<checkbox :checked="selected" style="transform:scale(0.6)" />
						全选
					</label>
				</checkbox-group>
				<view class="cb-t-r">已选择{{ selectNum }}笔账单</view>
			</view>
			<view class="cb-c">可申请金额: {{ fpval }}</view>
			<view class="cb-b">
				<view>已选: {{ selectVal }}</view>
				<button class="cb-btn" v-if="selectList == []" style="color:#ccc;background: #fff;">立即开票</button>
				<button class="cb-btn" v-else @tap="getInvoice">立即开票</button>
			</view>
		</view>
	</view>
</template>

<script>
import $req from '@/common/req/request.js';
export default {
	data() {
		return {
			fplist: [],
			fpval: '',
			selectList: [],
			selectNameList: []
		};
	},
	onShow() {
		this.loadInvoice()
	},
	computed: {
		selected: function() {
			return this.selectList.length == this.fplist.length ? true : false;
		},
		selectNum: function() {
			return this.selectList.length;
		},
		selectVal: function() {
			var selectVal = 0;
			this.fplist.forEach(item => {
				if (this.selectList.indexOf(item.order_id) > -1) {
					selectVal += item.money - 0;
				}
			});
			return selectVal;
		}
	},
	methods: {
		selectAll(e) {
			if (!this.selected) {
				//全选
				this.selectList = this.fplist.map(item => {
					item.checked = true;
					return item.order_id;
				});
				this.selectNameList = this.fplist.map(item => {
					return item.message;
				});
			} else {
				//全不选
				this.fplist.forEach(item => {
					item.checked = false;
				});
				this.selectList = [];
				this.selectNameList = [];
			}
		},
		selectItem(index) {
			var itemId = this.fplist[index].order_id;
			var itemName = this.fplist[index].message;
			var resultId = this.selectList.indexOf(itemId);
			var resultName = this.selectNameList.indexOf(itemName);
			if (resultId > -1) {
				//之前选中取消选中
				this.fplist[index].checked = false;
				this.selectList.splice(resultId, 1);
				this.selectNameList.splice(resultName, 1);
				return 
			}
			//选中
			this.fplist[index].checked = true;
			this.selectList.push(itemId);
			this.selectNameList.push(resultName);
		},
		getInvoice() {
			var orderId = ''
			var orderName = ''
			for(var i =0;i<this.selectList.length;i++){
				orderId += this.selectList[i]+'|'
			}
			for(var i =0;i<this.selectNameList.length;i++){
				orderName += this.selectNameList[i]+','
			}
			orderId = orderId.substr(0,orderId.length-1)
			orderName = orderName.substr(0,orderName.length-1)
			$req.request({
				url:'/api/xcx/saveUserInvoiceMessage',
				method:'POST',
				data:{
					order_id:orderId,
					inv_demand:orderName
				}
			}).then(res=>{
				uni.showToast({
					icon:'none',
					title:res.data.data.msg
				})
				this.loadInvoice()
				console.log("申请发票",res)
			}).catch(err=>{
				console.log(err)
			})
		},
		loadInvoice(){
			$req.request({
				url: '/api/xcx/myorders/invoice'
			}).then(res => {
				this.fplist = res.data[0].orders;
				this.fpval = res.data[0].sum;
				console.log('获取用户发票成功', res.data);
			}).catch(err => {
				console.log('获取用户发票失败', err);
			});
		}
	}
};
</script>

<style scoped>
	page {
		background: #fff;
	}
	.noval{
		text-align: center;
		vertical-align: middle;
		height: 6rem;
		background: #fff;
		padding-top: 2.7rem;
	}
	.fp-item {
		background: #fff;
		width: 100%;
		border-bottom: 2upx solid #ccc;
		display: flex;
		padding-left: 26upx;
		padding-right: 26upx;
		box-sizing: border-box;
		font-size: 0.75rem;
		line-height: 1.5rem;
		color: #656565;
	}
	.choice-box {
		position: fixed;
		bottom: 0;
		font-size: 0.75rem;
		color: #656565;
		background: #fff;
		width: 100%;
		padding-left: 26upx;
		padding-right: 26upx;
		box-sizing: border-box;
		padding-top: 10upx;
	}
	.choice-box .cb-t {
		display: flex;
		height: 40upx;
		line-height: 40upx;
	}
	.choice-box .cb-t .cb-t-r {
		margin-left: auto;
	}
	.choice-box .cb-c {
		color: #ff8009;
		line-height: 40upx;
	}
	.choice-box .cb-b {
		display: flex;
		line-height: 40upx;
	}
	.cb-btn {
		font-size: 0.75rem;
		color: #fff;
		text-align: center;
		background: #00a0e0;
		margin-right: 0;
	}
	.uni-list-cell {
		justify-content: flex-start;
		width: 100%;
		display: flex;
	}
</style>
