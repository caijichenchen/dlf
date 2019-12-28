<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">红包提现</block>
		</cu-custom>
		<view class="hb-ct font-md">
			<view>可提现金额:<text style="color:red">{{hbdata.balance}}</text>元<text style="color:red">(只能提现50元的整倍数)</text></view>
			<view>支付宝姓名:{{hbdata.ali_name}}</view>
			<view>支付宝账号:{{hbdata.ali_account}}</view>
			<view>
				<view>
					<input type="text" placeholder="请输入提现金额" placeholder-style="font-size:0.77rem;" v-model="cash" @change="checkCash">
				</view>
				<view>
					<input type="text" placeholder="请输入安全密码" placeholder-style="font-size:0.77rem;" v-model="pwd">
				</view>
			</view>
			<view class="zf-btn" @tap="alitx">确认提现</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return{
				hbdata:{},
				cash:'',
				pwd: ''
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/account/commission',//红包记录
			}).then(res=>{
				this.hbdata = res.data.data
			}).catch(err=>{
				console.log(err)
			})
		},
		methods:{
			checkCash() {
				if(this.cash%50 != 0){
					uni.showToast({
						icon:'none',
						title:'请输入正确的提现金额'
					})
				}
			},
			alitx(){
				$req.request({
					url:'/api/xcx/withdrawCash',
					method:'POST',
					data:{
						ali_name:this.hbdata.ali_name,
						ali_account:this.hbdata.ali_account,
						cash:this.cash,
						password:this.pwd
					}
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	page {
		background: #fff;
	}
	.hb-ct {
		padding-left: 26upx;
		padding-right: 26upx;
		box-sizing: border-box;
	}
	.hb-ct view {
		line-height: 1.9rem;
	}
	.zf-btn {
		width: 100%;
		color: #fff;
		background-color: #00a0ea;
	}
</style>
