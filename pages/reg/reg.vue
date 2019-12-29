<template>
	<view>
		<view :style="'margin-top:'+CustomBar+ 'px'"></view>
		<view class="text-center">
			<view class="dlf-title">独立费</view>
			<view class="dlf-content">轻松计算 无价时间</view>
		</view>
		<view class="list font-md">
			<view class="list-call py-2">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="phoneno" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call py-2">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call py-2">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="regpassword" type="text" password maxlength="16" placeholder="请确认密码" />
			</view>
			<view class="row py-2">
				<view class="list-call" style="width: 60%;">
					<image class="img" src="/static/shilu-login/3.png"></image>
					<input class="biaoti" v-model="code" type="number" placeholder="请输入验证码" />
				</view>
				<view class="code" :class="goreg ? '':'noinput'" @click="getCode">{{codetext}}</view>
			</view>
			<button class="regbtn" :class="goreg ? '':'noinput'" @click="goreg && regUser">立即注册</button>
		</view>
		<view class="text-center">
			<view class="okmsg">注册即代表同意<text style="color: #f66264;" @tap="showModal" data-target="vip">《会员协议》</text></view>
		</view>
		<view class="login-box text-center">
			<text>已有账号 ? </text>
			<text style="color: #00a0e0;" @tap="gologin">立即登录</text>
		</view>
		<vip-msg v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></vip-msg>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import vipMsg from './vipMsg.vue'
	export default {
		data() {
			return {
				phoneno:'',
				password:'',
				regpassword:'',
				code:'',
				codetext: '获取验证码',
				goreg:false,
				time:10,
				timer: null,
				showModalName: null,
			}
		},
		methods:{
			checkInput(){
				var regPhone = /^1[3456789]\d{9}$/
				if(!regPhone.test(this.phoneno)){
					uni.showToast({
						icon: 'none',
						title:'手机号输入格式不正确'
					})
					return 
				}
				if(this.password != this.regpassword){
					uni.showToast({
						icon: 'none',
						title:'两次密码输入不一致'
					})
					return 
				}
				if(!this.password && !this.regpassword){
					return
				}
				this.goreg = true
			},
			getCode(){
				var that = this
				this.timer = setInterval(()=>{
					if(that.time == 0){
						clearInterval(that.timer)
						that.time = 10
						that.goreg = true
						that.codetext = '获取验证码'
						return 
					}
					that.goreg = false
					that.codetext = (that.time--)+'s 再获取'
				},1000)
				$req.request({
					url:'/xcx/registerVerfied',
					data:{
						tel:this.phoneno,
						message_code: 'registf'
					}
				}).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			regUser(){
				console.log(22)
			},
			gologin(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			showModal(e) {
				this.showModalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.showModalName = null
			},
		},
		components:{
			vipMsg
		}
	}
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}
	.dlf-title {
		font-size: 94rpx;
		font-weight: bolder;
		color: #00A0E0;
	}
	.dlf-content {
		font-size: 64rpx;
		color: #00A0E0;
	}
	.list {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		width: 75%;
		margin-top: 40rpx;
		color: #656565;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		border-bottom: 2rpx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 40rpx;
		height: 40rpx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		line-height: 100upx;
		margin-left: 16upx;
	}
	.code {
		text-align: center;
		color: #fff;
		border:2rpx solid #00a0ea;
		padding: 10rpx 12rpx;
		margin-left: auto;
		background: #00a0e0;
	}
	.noinput {
		opacity: 0.6;
	}
	.regbtn {
		color: #FFFFFF;
		background-color: #00a0ea;
		text-align: center;
		width: 100%;
		height: 70rpx;
		font-size: 32rpx;
		line-height: 70rpx;
		margin-top: 20rpx;
		border-radius: 14rpx;
	}
	.okmsg{
		margin-top: 50rpx;
		height: 62rpx;
		line-height: 62rpx;
		font-size: 28rpx;
		border-bottom: 2rpx solid #ddd;
	}
	.login-box {
		color: #656565;
		margin-top: 50rpx;
		font-size: 32rpx;
	}
</style>
