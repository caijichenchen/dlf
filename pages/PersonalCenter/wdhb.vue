<template>
	<view class="font-md">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的红包</block>
		</cu-custom>
		<view class="px-4 py-2 border-bottom ">
			<view class="py-1">红包账户金额: <text class="text-danger">{{hbdata.balance}}</text>元</view>
			<view >
				<text @tap="mynavigate('aqmmsz')" v-if="hbdata.withdraw == 0" class="hb-btn">设置安全密码</text>
				<text @tap="mynavigate('aqmmsz')" v-if="hbdata.withdraw == 1" class="hb-btn">修改安全密码</text>
				<text @tap="mynavigate('hbtx')" v-if="hbdata.withdraw == 1" class="hb-btn">提现</text>
				<text @tap="mynavigate('bdzfb')" v-if="hbdata.status == 0"  class="hb-btn">绑定支付宝</text>
				<text @tap="mynavigate('bdzfb')" v-if="hbdata.status == 1"  class="hb-btn">解绑支付宝</text>
			</view>
			<view class="my-2">
				<text class="text-danger">提现须知:</text>
				<view>1.体现流程:您需要设置安全密码,同时绑定支付宝,然后您的红包金额大于等于50元,满足以上所有条件方可体现。</view>
				<view>2.红包一旦提现（提现过程中无法取消）提现到账会在三个工作日到达您指定的账户中</view>
				<view>3.目前阶段只支持支付宝提现（提供姓名必须与支付宝认证姓名一致）、其他提现目前暂不支持深感抱歉！</view>
			</view>
		</view>
		<view class="px-4 nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="sjf_content">
				<view v-show="TabCur==0" class="content_jsq">
					<view v-if="!txdata" class="text-center">暂无申请记录</view>
					<view v-else>
						<view v-for="(item,index) in txdata" class="hb-item" :key="index">
							<view class="hb-wrap">
								<view class="hb-title">提现时间</view>
								<view class="hb-val">{{item.created_at}}</view>
							</view>
							<view class="hb-wrap">
								<view class="hb-title">提现金额</view>
								<view class="hb-val"><text style="color: red;">{{item.cash}}</text><text>元</text></view>
							</view>
							<view class="hb-wrap">
								<view class="hb-title">提现账户</view>
								<view class="hb-val">{{item.ali_message}}</view>
							</view>
							<view class="hb-wrap">
								<view class="hb-title">提现状态</view>
								<view class="hb-val" style="color: red;">{{item.state}}</view>
							</view>
						</view>
					</view>
				</view>
				<view v-show="TabCur==1">
					<view v-if="!dhdata" class="text-center">暂无兑换记录</view>
					<view v-else>
						<view v-for="(item,index) in dhdata" class="hb-item" :key="index">
							<view class="hb-wrap">
								<view class="hb-title">兑换信息</view>
								<view class="hb-val">{{JSON.parse(item.message).message}}</view>
							</view>
							<view class="hb-wrap">
								<view class="hb-title">商品价格</view>
								<view class="hb-val"><text style="color: red;">{{JSON.parse(item.message).price}}</text><text>元</text></view>
							</view>
							<view class="hb-wrap">
								<view class="hb-title">兑换时间</view>
								<view class="hb-val">{{item.created_at}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				TabCur: 0,
				scrollLeft: 0,
				sjf:['最近提现记录','最近兑换记录'],
				hbdata:{},
				txdata:[],
				dhdata: [],
			}
		},
		onLoad(){
			$req.request({
				url:'/api/xcx/account/commission',//红包记录
			}).then(res=>{
				this.hbdata = res.data.data
			}).catch(err=>{
				console.log(err)
			})
			$req.request({
				url:'/api/xcx/withdrawal',//提现记录
			}).then(res=>{
				this.txdata = res.data.data
			}).catch(err=>{
				console.log(err)
			})
			$req.request({
				url:'/api/xcx/exchange',//兑换记录
			}).then(res=>{
				this.dhdata = res.data.data
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			mynavigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pages/PersonalCenter/${path}`
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
	.sjf_content{
		width: 100%;
		height: auto;
		background-color: #fff;
	}
	.content_jsq{
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}
	.text-orange , .line-orange, .lines-orange{
		color: #00a0ea;
	}
	.hb-item {
		width: 100%;
		border-bottom: 2upx solid #ccc;
		color: #656565;
	}
	.hb-wrap {
		width: 100%;
		display: flex;
		margin-bottom: 16upx;
	}
	.hb-title {
		width: 20%;
		text-align: left;
	}
	.hb-val {
		width: 80%;
		text-align: right;
	}
	.hb-btn {
		display: inline-block;
		background: #00A0E0;
		color: #fff;
		padding: 10upx 16upx;
		margin-right: 16upx;
		border-radius: 6rpx;
	}
</style>
