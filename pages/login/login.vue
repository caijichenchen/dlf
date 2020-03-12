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
				<input class="biaoti" v-model="loginFrom.tel" type="text" placeholder="输入手机号/邮箱地址" />
			</view>
			<view class="list-call py-2">
				<view class="cuIcon-unlock iconBLue font-bs"></view>
				<input class="biaoti" v-model="loginFrom.password" type="text" placeholder="输入密码" password="true" />
			</view>
			<button class="cu-btn backBlue login-btn" @tap="bindLogin">登陆</button>
			<view class="row mt-5 ">
				<view>
					<label class="radio" @tap="recordLoginFrom"><radio style="transform: scale(0.6);" :checked="remember" />记住我</label>
				</view>
				<navigator url="/pages/forget/forget" style="margin-left: auto;">忘记密码?</navigator>
			</view>
			<view class="mt-4">
				<view class="row" style="height: 60rpx;">
					<view class="b-b"></view>
					<view style="line-height: 60rpx;width: 40%;text-align: center;font-size: 28rpx;">其他方式登录</view>
					<view class="b-b"></view>
				</view>
				<view class="else-c py-5">
					<!-- #ifdef APP-PLUS -->
					<view class="e-wrap">
						<view class="qqlogin"></view>
					</view>
					<!-- #endif -->
					
					<!-- #ifdef MP-WEIXIN -->
					<view class="e-wrap">
						<view class="welogin">
							<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
							</button>
						</view>
					</view>
					<!-- #endif -->
				</view>
				<view class="else-b">
					<view>没有账号?</view>
					<navigator url="/pages/reg/reg" style="color: #00A0E0;">立即注册</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				loginFrom:{
					tel: uni.getStorageSync('tel') || '',
					password: uni.getStorageSync('password') || ''
				},
				remember: false
			};
		},
		mounted() {
			const tel = uni.getStorageSync('tel')
			const password = uni.getStorageSync('password')
			if(tel && password){
				this.remember = true
			}
		},
		methods: {
			...mapMutations(['login','getUserInfo','setWeChatInfo']),
			//微信小程序登录
			wxGetUserInfo(){
				uni.login({
					provider: 'weixin',
					success:loginRes=> {
						uni.getUserInfo({
							provider: 'weixin',
							success:infoRes=>{
								const weChatInfo = {
									code:loginRes.code,
									endata:"!"+infoRes.encryptedData+"!",
									ivdata:"!"+infoRes.iv+"!"
								}
								this.weChatLogin(weChatInfo)
							}
						})
					}
				});
			},
			weChatLogin(weChatInfo){
				this.$req.request({
					url:'/getWxAccessToken',
					data:{...weChatInfo}
				}).then(res=>{
					if(res.data.status == 'fail' && res.data.message == '未绑定账号，请绑定'){
						this.$msg(res.data.message)
						this.setWeChatInfo(res.data.data)
						uni.navigateTo({
							url:'/pages/weChatBind/weChatBind'
						})
					}else if(res.data.status == 'fail' && res.data.message == '获取用户信息失败,请稍后重试'){
						this.$msg(res.data.message)
					}else{
						this.login(res.data.access_token)
						uni.setStorageSync('loginToken',res.data.access_token);
						this.$msg('登录成功','success')
						this.getUserData()
						uni.switchTab({
						    url: '/pages/index/index'
						});
					}
				}).catch(err=>{
					this.$msg('拉起微信登录失败,请稍后重试')
				})
			},
			bindLogin(e) { //校验输入格式
				const { tel,password } = this.loginFrom
				const regPhone = /^1[3456789]\d{9}$/
				const regEmail =  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if(!tel){
					return this.$msg('手机号/邮箱输入不能为空')
				}
				if(tel.includes('@')){
					if(!regEmail.test(tel)){
						return this.$msg('邮箱输入格式不正确')
					}
					this.userLogin()
				}else{
					if(!regPhone.test(tel)){
						return this.$msg('手机号输入格式不正确')
					}
					this.userLogin()
				}
		    },
			userLogin(){  //获取token
				this.$req.request({
					url: '/getApiToken',
					header: {"Content-Type": "application/x-www-form-urlencoded"},
					data: {...this.loginFrom},
				}).then((res)=>{
					this.login(res.data.access_token)
					uni.setStorageSync('loginToken',res.data.access_token);
					this.$msg('登录成功','success')
					this.getUserData()
					uni.switchTab({
					    url: '/pages/index/index'
					});
				}).catch((err)=>{
					this.$msg('登录失败,请稍后重试')
				})
			},
			//获取用户个人信息
			getUserData() {
				this.$req.request({
					url:'/api/xcx/account/userInfo'
				}).then((res)=> {
					this.getUserInfo(res.data)
				}).catch((err)=>{
					this.$msg('获取用户资料失败,请稍后重试')
				})
			},
			recordLoginFrom(){
				const { tel,password } = this.loginFrom
				this.remember = !this.remember
				if(this.remember){
					uni.setStorageSync('tel',tel)
					uni.setStorageSync('password',password)
				}else{
					uni.removeStorageSync('password')
				}
			}
		},
		watch:{
			loginFrom:{
				handler(val){ //保存用户信息到本地
					uni.setStorageSync('tel',val.tel)
					if(this.remember){
						uni.setStorageSync('password',val.password)
					}
				},
				deep:true
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
	.login-btn {
		height: 70rpx;
		font-size: 32rpx;
		line-height: 70rpx;
		margin-top: 40rpx;
	}
	.b-b {
		width: 30%;
		border-bottom: 2rpx solid #ccc;
		height: 50%;
	}
	.else-c {
		width: 100%;
		display: flex;
		justify-content: center;/*水平主轴居中*/
		align-items: center;
	}
	.else-b {
		display: flex;
		justify-content: center;
	}
	.e-wrap {
		width: 50%;
		display: flex;
		justify-content: center
	}
	.qqlogin {
		width: 80rpx;
		height: 80rpx;
		background-image: url('../../static/QQ.png');
		background-size: cover;
	}
	.welogin {
		width: 80rpx;
		height: 80rpx;
	}
	.bottom {
		width: 100%;
		height: 100%;
		background-image: url('../../static/wechat.png');
		background-size: cover;
		background-color: #FFFFFF;
	}
</style>
