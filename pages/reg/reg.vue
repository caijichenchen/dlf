<template>
	<view>
		<cu-custom  >
		    <block slot="content"></block>
		</cu-custom>
		<view class="text-center">
			<view class="dlf-title">独立费</view>
			<view class="dlf-content">轻松计算 无价时间</view>
		</view>
		<view class="list font-md">
			<view class="list-call py-2">
				<view class="cuIcon-mobilefill iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPhone" v-model="regFrom.tel" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call py-2">
				<view class="cuIcon-unlock iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPassword" v-model="regFrom.password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call py-2">
				<view class="cuIcon-unlock iconBLue font-bs"></view>
				<input class="biaoti" @blur="checkPassword" v-model="regFrom.password_confirmation" type="text" password maxlength="16" placeholder="请确认密码" />
			</view>
			<view class="row py-2">
				<view class="list-call" style="width: 60%;">
					<view class="cuIcon-safe iconBLue font-bs"></view>
					<input class="biaoti" v-model="regFrom.tel_code" type="number" placeholder="请输入验证码" />
				</view>
				<view class="code" :class="codeStatus?'':'noinput'" @tap="codeStatus && getCode()">
					{{time ? time+'s 再获取' : '获取验证码'}}
				</view>
			</view>
			<button class="regbtn" :class="codeStatus?'':'noinput'" @tap="codeStatus && regUser()">立即注册</button>
		</view>
		<view class="text-center">
			<view class="okmsg">注册即代表同意<text style="color: #f66264;" @tap="showModal" data-target="vip">《会员协议》</text></view>
		</view>
		<view class="login-box row" style="justify-content: center;">
			<text>已有账号 ? </text>
			<navigator style="color: #00a0e0;" url="/pages/login/login">立即登录</navigator>
		</view>
		<vip-msg v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></vip-msg>
	</view>
</template>

<script>
	import vipMsg from './vipMsg.vue'
	export default {
		data() {
			return {
				regFrom:{
					tel:'',
					password:'',
					password_confirmation:'',
					tel_code:''
				},
				time:0,
				showModalName: null,
			}
		},
		methods:{
			checkPhone(){ //校验手机号
				const { tel } = this.regFrom
				const regPhone = /^1[3456789]\d{9}$/
				if(!regPhone.test(tel.trim())){
					return this.$msg('手机号输入格式不正确')
				}
				this.$req.request({
					url:'/api/xcx/checkTelExsit',
					data:{ tel:tel }
				}).then(res=>{
					if(res.data.status == 'success' && res.data.message == '手机号不存在'){
						this.$msg('该手机号可正常注册')
					}
				}).catch(err=>{
					this.$msg('查询手机号失败,请稍后重试')
				})
			},
			checkPassword(){ //校验密码
				const { password,password_confirmation } = this.regFrom
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
			getCode(){ //获取短信验证码
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
							message_code: 'registf'
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
			regUser(){
				if(!this.code){
					return this.$msg('验证码输入不能为空')
				}
				this.$req.request({
					url:'/api/xcx/register',
					data:{...this.regFrom}
				}).then(res=>{
					if(res.data.status == 400 || res.data.msg == '注册失败'){
						this.$msg('注册失败,请稍后重试')
					}else{
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				}).catch(err=>{
					this.$msg('注册失败,请稍后重试')
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
		},
		computed:{
			codeStatus(){
				const { tel,password,password_confirmation } = this.regFrom
				const regPhone = /^1[3456789]\d{9}$/
				if(!regPhone.test(tel.trim())){
					return false
				}
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!password && !reg.test(password) && password != password_confirmation){
					return false
				}
				return true
			}
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
