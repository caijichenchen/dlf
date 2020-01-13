<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view v-if="type == 'phone'" class="mt-4 p-2">
			<view class="row border-bottom mb-3 pb-1">
				<view class="py-1" >输入验证码:</view>
				<input type="text" v-model="code">
				<view class="code-btn iconWhite backBlue p-1" :class="codeStatus ? '':'not'" @tap="codeStatus && getCode()">{{codetext}}</view>
			</view>
		</view>
		<view v-if="type == 'email'" class="mt-4 p-2 ">
			<view class="row border-bottom mb-3 pb-1">
				<view>输入邮箱:</view>
				<input type="text" v-model="email">
			</view>
			<view class="code-btn iconWhite backBlue py-1" @tap="uniteEmail">确认</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data(){
			return {
				type: 'phone',
				title: '解绑手机号',
				code: '',
				email: '',
				codetext: '获取验证码',
				timer:null,
				time:60,
				codeStatus:true
			}
		},
		onLoad(options) {
			if(options.type == 'phone'){
				this.type = 'phone'
				this.title = '解绑手机号'
			}else if(options.type == 'email'){
				this.type = 'email'
				this.title = '绑定邮箱'
			}
		},
		methods:{
			getCode(){
				this.codeStatus = false
				this.timer = setInterval(()=>{
					if(this.time == 0){
						clearInterval(this.timer)
						this.time = 60
						this.codeStatus = true
						this.codetext = '获取验证码'
						return 
					}
					this.codetext = (this.time--)+'s 再获取'
				},1000)
				$req.request({
					url:'/api/xcx/account/sms'
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'发送验证码失败,请稍后重试'
					})
				})
			},
			unitePhone(){
				if(!this.code){
					return uni.showToast({
						icon:'none',
						title:'验证码输入不能为空'
					})
				}
				$req.request({
					url:'/api/xcx/account/verify',
					data:{
						code:this.code
					}
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'操作失败,请稍后重试'
					})
				})
			},
			uniteEmail(){
				const regEmail =  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if(!regEmail.test(this.email)){
					return uni.showToast({
						icon:'none',
						title:'邮箱格式输入不正确'
					})
				}
				$req.request({
					url:'/api/xcx/checkEmailExsit',
					data:{
						email:this.email
					},
				}).then(res=>{
					if(res.data.status == 'success'){
						this.setEmail()
					}else if(res.data.status == 'fail'){
						uni.showToast({
							icon:'none',
							title:res.data.message
						})
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'验证邮箱失败,请稍后重试'
					})
				})
			},
			setEmail(){
				$req.request({
					url:'/api/xcx/saveVerifiEmail',
					data:{
						email:this.email
					},
					method:'POST'
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'邮件发送失败,请稍后重试'
					})
				})
			}
		}
	}
</script>

<style>
	.code-btn {
		border-radius: 6rpx;
		margin: 0 auto;
		text-align: center;
	}
	.not{
		opacity: 0.6;
	}
</style>
