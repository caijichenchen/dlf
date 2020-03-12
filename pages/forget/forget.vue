<template>
	<view>
		<cu-custom  >
		    <block slot="content"></block>
		</cu-custom>
		<view class="header text-center">
			<text style="margin-right: 90rpx;" :class="{'activeCat':showTab == 0}" @tap="changeCategory(0)">手机号找回</text>
			<!-- <text :class="{'activeCat':showTab == 1}" @click="changeCategory(1)">邮箱找回</text> -->
		</view>
		<view class="list" v-if="showTab == 0">
			<view class="list-call">
				<view class="cuIcon-mobilefill iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPhone" v-model="forgetFrom.tel" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<view class="cuIcon-safe iconBLue font-bs"></view>
				<input class="biaoti" v-model="forgetFrom.tel_code" type="number" maxlength="4" placeholder="请输入验证码" />
				<view class="code" :class="codeStatus ? '':'noinput'" @click="codeStatus && getCode()">{{time ? time+'s 再获取' : '获取验证码'}}</view>
			</view>
			<view class="list-call">
				<view class="cuIcon-unlock iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPassword" v-model="forgetFrom.password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call">
				<view class="cuIcon-unlock iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPassword" v-model="forgetFrom.password_confirmation" type="text" password maxlength="16" placeholder="请确认新密码" />
			</view>
			<button class="regbtn" :class="checkPwd ? '':'noinput'" @tap="checkPwd && setNewPwd()">提交</button>
		</view>
		<view v-if="showTab == 1" class="list">
			<view class="list-call">
				<input class="biaoti" type="text" v-model="userEmail" @blur="checkEmail" placeholder="请输入邮箱地址" />
			</view>
			<button class="regbtn" :class="checkPwd ? '':'noinput'" @tap="checkPwd && setNewEmail()">发送重置密码链接</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				forgetFrom:{
					tel:'',
					password:'',
					password_confirmation:'',
					tel_code:''
				},
				showTab: 0,
				userEmail: '',
				time: 0,
			}
		},
		methods: {
			changeCategory(index){
				this.showTab = index
			},
			checkPhone(){ //检验手机号
				if(!this.codeStatus) return this.$msg('手机号输入格式不正确')
				this.$req.request({
					url:'/api/xcx/checkTelExsit',
					data:{ tel:tel }
				}).then(res=>{
					if(res.data.status == 'success' && res.data.message == '手机号不存在'){
						this.$msg('手机号不存在')
					}else{
						this.$msg('手机号可正常注册')
					}
				}).catch(err=>{
					this.$msg('查询手机号失败,请稍后重试')
				})
			},
			checkPassword(){
				const { password,password_confirmation } = this.forgetFrom
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!password){
					return this.$msg('密码输入不能为空')
				}
				if(!reg.test(password)){
					return this.$msg('密码输入不规范')
				}
				if(password != password_confirmation){
					return this.$msg('两次密码输入不一致')
				}
			},
			getCode(){ //验证码
				if(!this.time){
					this.time = 60
					const intervalId = setInterval(()=>{
						if(this.time == 0){
							clearInterval(intervalId)
						}
						this.time--
					},1000)
					this.$req.request({
						url:'/api/xcx/registerVerfied',
						data:{
							tel:this.regFrom.tel,
							message_code: 'reset'
						}
					}).then(res=>{
						if(res.data[0] == 'T'){
							this.$msg('验证码发送成功')
						}else{
							clearInterval(intervalId)
							this.$msg('验证码发送失败，请稍后重试')
						}
					}).catch(err=>{
						clearInterval(intervalId)
						this.$msg('验证码发送失败，请稍后重试')
					})
				}
			},
			setNewPwd(){ //重置密码
				if(!this.forgetFrom.tel_code){
					return this.$msg('验证码输入不能为空')
				}
				this.$req.request({
					url:'/api/xcx/telReset',
					data:{...this.forgetFrom}
				}).then(res=>{
					if(res.data.status == 200 || res.data.msg == '密码重置成功'){
						this.$msg('密码重置成功')
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						},1500)
					}else{
						this.$msg('密码重置失败,请稍后重试')
					}
				}).catch(err=>{
					this.$msg('密码重置失败,请稍后重试')
				})
			},
			checkEmail(){
				const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if(!this.userEmail){
					return this.$msg('邮箱输入不能为空')
				}
				if(reg.test(this.userEmail)){
					return this.$msg('邮箱输入不符合规范')
				}
			},
		},
		computed:{
			codeStatus(){ //获取验证码按钮
				const { tel } = this.forgetFrom
				return /^1[3456789]\d{9}$/.test(tel.trim())
			},
			checkPwd(){ //校验密码
				const { password,password_confirmation } = this.regFrom
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!password && !reg.test(password) && password != password_confirmation){
					return false
				}
				return true
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
    	height: 70rpx;
    	line-height: 70rpx;
    	margin-top: 40rpx;
    }
</style>
