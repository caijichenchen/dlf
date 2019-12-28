<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">安全密钥</block>
		</cu-custom>
		<view class="py-2 text-center iconGray" v-if="aqmm">安全密码 : ****** </view>
		<view class="py-2 text-center iconGray" v-else>安全密码 : <text style="color: #00A0E0;">请设置安全密码</text> </view>
		<navigator class="textBuuton" v-if="aqmm" url="./aqmmsz">修改安全密码</navigator>
		<navigator class="textBuuton" v-else url="./aqmmsz">设置安全密码</navigator>
		<view class="tip">
			<view>安全密码用途</view>
			<view>1、安全密码设置用于红包提现和红包购买会员</view>
			<view>2、设置安全密码尽量不要与登录密码一致</view>
			<view>3、一个账号一天最多发送3条短信</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				aqmm:true
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/spread/getSecurePassword',
			}).then((res)=>{
				if(res.data.data.password){
					this.aqmm=true
				}else if(!res.data.data.password){
					this.aqmm=false
				}
				console.log(res)
			}).catch((err)=>{
				
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.textBuuton{
		width: 320rpx;
		font-size: 28rpx;
		margin: 0 auto;
		height: 70rpx;
		line-height: 70rpx;
	}
	.tip{
		width: 80%;
		margin-left: 10%;
		text-align: left;
		margin-top: 40upx;
		border: 1upx solid #ccc;
		font-size: 0.7rem;
	}
	.tip view{
		padding: 10upx;
		margin-left: 30upx;
	}
</style>
