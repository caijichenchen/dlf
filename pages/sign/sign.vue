<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">签到详情</block>
		</cu-custom>
		<view class="contents">
			<view class="sign-box">
				<view v-if="showSign" class="sign-btn" @tap="getSign">签到</view>
				<view class="sign-content" v-else>
					<view class="s-item iconBLue sign-top">
						{{userIntegral}}
					</view>
					<view class="s-item iconBLue">
						可用积分
					</view>
				</view>
			</view>
		</view>
		<view class="sign-t" v-if="showSign">今天还未签到,点击签到,获取免费积分</view>
		<view class="sign-t" v-else>签到越多免费计算次数就越多</view>
		<view style="padding-left: 3%;padding-right: 3%;">
			<view>活动说明:</view>
			<view>①.每人每天最多签到一次,签到成功后获得积分。</view>
			<view>②.每次签到成功可获得1-3积分。</view>
			<view>邀请好友(推荐):</view>
			<view>邀请一个好友成功注册并登录独立费,您和您的好友即可各获得3天的VIP会员奖励。<text class="iconBLue" @tap="goInvite">去邀请</text></view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default{
		data(){
			return {
				showSign : true,
				userIntegral :''
			}
		},
		mounted() {
			let nowHour = new Date().getHours()
			const signMsg = uni.getStorageSync('signStatus')
			if(nowHour == 0){
				this.showSign = true
			}else if(!signMsg || signMsg.status != 'sign'){
				this.showSign = true
			}else {
				this.showSign = false
				this.userIntegral = signMsg.scope
			}
		},
		methods:{
			goInvite(){
				uni.navigateTo({
					url: '/pages/invite/invite'
				})
			},
			getSign(){
				console.log('qqqq')
				$req.request({
					url: '/api/xcx/sign',
					method:'POST'
				}).then(res=>{
					uni.setStorageSync('signStatus',{status:'sign',scope:res.data.userIntegral})
					this.showSign = false
					this.userIntegral = res.data.userIntegral
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.contents{
		background-color: #3d78de;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 80rpx;
		padding-bottom: 80rpx;
	}
	.sign-btn {
		height: 100%;
		line-height: 200rpx;
		font-size: 34rpx;
		color: #00a0e0;
	}
	.sign-t{
		color: #fff;
		background: #3d78de;
		text-align: center;
		font-size: 32rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-bottom: 20rpx;
		letter-spacing: 4rpx;
	}
	.sign-box {
		width: 200rpx;
		height: 200rpx;
		background: #FFFFFF;
		border-radius: 50%;
	}
	.sign-content{
		height: 120rpx;
		margin-top: 38rpx;
	}
	.s-item{
		height: 50%;
		line-height: 200%;
		text-align: center;
		letter-spacing: 4rpx;
		font-size: 30rpx;
	}
	.sign-top{
		border-bottom: 2rpx solid #ccc;
	}
</style>
