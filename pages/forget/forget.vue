<template>
	<view>
		<cu-custom  >
		    <block slot="content"></block>
		</cu-custom>
		<view class="header text-center">
			<text style="margin-right: 90rpx;" :class="{'activeCat':showTab == 0}" @click="changeCategory(0)">手机号找回</text>
			<!-- <text :class="{'activeCat':showTab == 1}" @click="changeCategory(1)">邮箱找回</text> -->
		</view>
		<view class="list" v-if="showTab == 0">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" @blur="checkPhone" v-model="phoneno" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/3.png"></image>
				<input class="biaoti" v-model="code" type="number" maxlength="4" placeholder="请输入验证码" />
				<view class="code" :class="phoneStatus ? '':'noinput'" @click="phoneStatus && getCode()">{{codetext}}</view>
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="regpassword" type="text" password maxlength="16" placeholder="请确认新密码" />
			</view>
			<button class="regbtn" :class="checkPwd ? '':'noinput'" @click="checkPwd && setNewPwd()">提交</button>
		</view>
		<view v-if="showTab == 1" class="list">
			<view class="list-call">
				<input class="biaoti" type="text" v-model="userEmail" @blur="checkEmail" placeholder="请输入邮箱地址" />
			</view>
			<button class="regbtn" :class="checkPwd ? '':'noinput'" @click="checkPwd && setNewEmail()">发送重置密码链接</button>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				phoneno:'',
				code:"",
				password:'',
				regpassword: '',
				phoneStatus: false,
				showTab: 0,
				goreg:false,
				userEmail: '',
				time: 60,
				codetext:'获取验证码'
			}
		},
		methods: {
			changeCategory(index){
				this.showTab = index
			},
			checkPhone(){
				const regPhone = /^1[3456789]\d{9}$/
				const phoneNum = this.phoneno.trim()
				if(!regPhone.test(phoneNum)){
					uni.showToast({
						icon: 'none',
						title:'手机号输入格式不正确'
					})
					return 
				}
				$req.request({
					url:'/api/xcx/checkTelExsit',
					data:{
						tel:phoneNum
					}
				}).then(res=>{
					if(res.data.status == 'success' && res.data.message == '手机号不存在'){
						uni.showToast({
							icon:'none',
							title:'手机号不存在'
						})
					}else{
						this.phoneStatus = true
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'查询手机号失败,请稍后重试'
					})
				})
			},
			checkInput(){
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!this.password){
					return uni.showToast({
						icon:'none',
						title:'密码输入不能为空'
					})
				}
				if(!reg.test(this.password)){
					return uni.showToast({
						icon:'none',
						title:'密码输入不符合规范'
					})
				}
				if(this.password != this.regpassword){
					uni.showToast({
						icon: 'none',
						title:'两次密码输入不一致'
					})
					return 
				}
			},
			getCode(){
				this.timer = setInterval(()=>{
					if(this.time == 0){
						clearInterval(this.timer)
						this.time = 60
						this.phoneStatus = true
						this.codetext = '获取验证码'
						return 
					}
					if(this.phoneStatus){
						this.phoneStatus = false
					}
					this.codetext = (this.time--)+'s 再获取'
				},1000)
				$req.request({
					url:'/api/xcx/registerVerfied',
					data:{
						tel:this.phoneno,
						message_code: 'reset'
					}
				}).then(res=>{
					if(res.data[0] == 'T'){
						uni.showToast({
							icon:'none',
							title:'验证码发送成功'
						})
					}else{
						uni.showToast({
							icon:'none',
							title:'验证码发送失败，请稍后重试'
						})
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'验证码发送失败，请稍后重试'
					})
				})
			},
			setNewPwd(){
				if(!this.code){
					return uni.showToast({
						icon:'none',
						title:'验证码输入不能为空'
					})
				}
				$req.request({
					url:'/api/xcx/telReset',
					data:{
						tel:this.phoneno,
						password:this.password,
						password_confirmation:this.regpassword,
						tel_code:this.code
					}
				}).then(res=>{
					console.log(res)
					if(res.data.status == 200 || res.data.msg == '密码重置成功'){
						uni.showToast({
							icon:'none',
							title:'密码重置成功'
						})
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						},1500)
					}else{
						uni.showToast({
							icon:'none',
							title:'密码重置失败,请稍后重试'
						})
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'密码重置失败,请稍后重试'
					})
				})
			},
			checkEmail(){
				const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if(!this.userEmail){
					return uni.showToast({
						icon:'none',
						title:'邮箱输入不能为空'
					})
				}
				if(reg.test(this.userEmail)){
					return uni.showToast({
						icon:'none',
						title:'邮箱输入不符合规范'
					})
				}
			},
			setNewEmail(){
				
			}
		},
		computed:{
			checkPwd(){
				let baseStatus = false
				// if(!this.phoneStatus){
				// 	return baseStatus
				// }
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!this.password){
					return baseStatus
				}
				if(!reg.test(this.password)){
					return baseStatus
				}
				if(this.password != this.regpassword){
					return baseStatus
				}
				baseStatus = true
				return baseStatus
			}
		}
	}
</script>

<style>
	.header {
		font-size: 40rpx;
		color: #656565;
	}
	.activeCat {
		color: #00A0E0;
		border-bottom: 2rpx solid #00A0E0;
	}
    .list {
    	display: flex;
    	flex-direction: column;
    	padding-left: 12%;
    	padding-right: 12%;
    	margin-top: 60rpx;
    	box-sizing: border-box;
    }
    .list-call{
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    	color: #333333;
    	height: 80rpx;
    	margin-bottom: 10rpx;
    	border-bottom: 2rpx solid rgba(230,230,230,1);
    }
    .list-call .img{
    	width: 40rpx;
    	height: 40rpx;
    }
    .list-call .biaoti{
    	flex: 1;
    	text-align: left;
    	font-size: 32upx;
    	line-height: 100upx;
    	margin-left: 16upx;
    }
    .code {
    	text-align: center;
    	color: #fff;
    	border:2rpx solid #00a0ea;
    	height: 60rpx;
    	line-height: 60rpx;
    	padding-left: 10rpx;
    	padding-right: 10rpx;
    	font-size: 26rpx;
    	background: #00a0e0
    }
    .noinput {
    	opacity: 0.6;
    }
    .regbtn {
    	color: #FFFFFF;
    	background-color: #00a0ea;
    	text-align: center;
    	width: 100%;
    	border-radius: 10rpx;
    	font-size: 28rpx;
    	height: 60rpx;
    	line-height: 60rpx;
    	margin-top: 40rpx;
    }
</style>
