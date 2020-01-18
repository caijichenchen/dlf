<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">微信绑定</block>
		</cu-custom>
		<view v-show="tabIndex == 0">
			<view class="title-box">
				<view class="dlf-title">绑定已有账户</view>
				<view class="dlf-content">下次直接快捷登录</view>
			</view>
			<view class="list font-md">
				<view class="list-call py-2">
					<input class="biaoti" v-model="phone" type="text" placeholder="输入绑定手机号/邮箱" />
				</view>
				<view class="list-call py-2">
					<input class="biaoti" v-model="password" type="text" placeholder="输入密码" password="true" />
				</view>
				<button style="background-color: #ee4433;" class="cu-btn login-btn" @tap="bindInfo">立即绑定</button>
				<view class="text-center mt-2" style="color: #656565;" @tap="tabIndex=1">绑定手机号</view>
			</view>
		</view>
		<view v-show="tabIndex == 1">
			<view class="title-box">
				<view class="dlf-title">绑定手机号</view>
				<view class="dlf-content">创建账户下次直接快捷登录</view>
			</view>
			<view class="list font-md">
				<view class="list-call py-2">
					<input class="biaoti" @blur="checkPhone" v-model="phone" type="text" placeholder="请输入手机号" />
				</view>
				<view class="list-call py-2">
					<input class="biaoti" v-model="code" type="text" placeholder="请输入验证码" />
					<view :class="getCodeStatus ? 'iconBLue':'iconG'" @tap="getCodeStatus && getCode()">{{codeText}}</view>
				</view>
				<button class="cu-btn backBlue login-btn" @tap="bindNewInfo">确认登录</button>
				<view class="text-center mt-2" style="color: #656565;" @tap="tabIndex=0">绑定已有账户</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {mapState,mapMutations} from 'vuex'
	export default {
		data(){
			return {
				tabIndex:0,
				codeText: '获取验证码',
				phone:'',
				password: '',
				getCodeStatus:false,
				time:60,
				timer:null,
				code: ''
			}
		},
		methods:{
			...mapMutations(['login','getUserInfo','setWeChatInfo']),
			bindInfo(){ //校验输入是否合法
				const regPhone = /^1[3456789]\d{9}$/
				const regEmail =  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if(!this.phone){
					return uni.showToast({
						icon: 'none',
						title:'手机号/邮箱输入不能为空'
					})
				}
				if(this.phone.includes('@')){
					if(!regEmail.test(this.phone)){
						return uni.showToast({
							icon:'none',
							title:'邮箱输入格式不正确'
						})
					}
					this.userLogin()
				}else{
					if(!regPhone.test(this.phone)){
						return uni.showToast({
							icon:'none',
							title:'手机号输入格式不正确'
						})
					}
					this.userLogin()
				}
			},
			userLogin(){ //绑定用户
				$req.request({
					url:'/api/xcx/bindUser',
					data:{
						email:this.phone,
						password:this.password,
						type:'wechat',
						unionid: this.wechatInfo.unionId,
						avatar:this.wechatInfo.avatar
					}
				}).then(res=>{
					console.log(res)
					this.login(res.data.access_token)
					uni.setStorageSync('loginToken',res.data.access_token);
					uni.showToast({
						icon:'success',
						title: '登录成功'
					});
					this.getUserData()
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'绑定登录失败,请稍后你重试'
					})
				})
			},
			checkPhone(){ //验证手机号
				const regPhone = /^1[3456789]\d{9}$/
				if(!this.phone){
					return uni.showToast({
						icon: 'none',
						title:'手机号输入不能为空'
					})
				}
				if(!regPhone.test(this.phone)){
					return uni.showToast({
						icon:'none',
						title:'手机号输入不符合规范'
					})
				}
				$req.request({
					url:'/api/xcx/checkTelExsit',
					data:{
						tel:this.phone
					}
				}).then(res=>{
					if(res.data.status == 'fail' && res.data.message == '手机号已存在'){
						uni.showToast({
							icon:'none',
							title:res.data.message
						})
					}else{
						uni.showToast({
							icon:'none',
							title:'手机号可正常绑定'
						})
						this.getCodeStatus = true
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'检验手机号失败,请稍后重试'
					})
				})
			},
			getCode(){
				if(!this.getCodeStatus){
					return uni.showToast({
						icon:'none',
						title:'请输入规范的手机号'
					})
				}
				this.getCodeStatus = false
				this.timer = setInterval(()=>{
					if(this.time == 0){
						clearInterval(this.timer)
						this.time = 60
						this.getCodeStatus = true
						this.codeText = '获取验证码'
						return 
					}
					this.codeText = (this.time--)+'s 再获取'
				},1000)
				$req.request({
					url:'/api/xcx/registerVerfied',
					data:{
						tel:this.phone,
						message_code:'registf'
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
							title:'验证码发送失败,请稍后重试'
						})
					}
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'验证码发送失败,请稍后重试'
					})
				})
			},
			bindNewInfo(){
				if(!this.phone){
					return uni.showToast({
						icon:'none',
						title:'手机号输入不能为空'
					})
				}
				if(!this.code){
					return uni.showToast({
						icon:'none',
						title:'验证码输入不能为空'
					})
				}
				$req.request({
					url:'/api/xcx/createAccountAndBind',
					data:{
						tel:this.phone,
						type:'wechat',
						unionid: this.wechatInfo.unionId,
						avatar:this.wechatInfo.avatar,
						tel_code:this.code
					}
				}).then(res=>{
					this.login(res.data.access_token)
					uni.setStorageSync('loginToken',res.data.access_token);
					uni.showToast({
						icon:'success',
						title: '登录成功'
					});
					this.getUserData()
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'绑定用户失败,请稍后重试'
					})
				})
			},
			getUserData() {
				$req.request({
					url:'/api/xcx/account/userInfo'
				}).then((res)=> {
					this.getUserInfo(res.data)
					uni.switchTab({
					    url: '/pages/index/index'
					});
				}).catch((err)=>{
					console.log('获取用户资料失败',err)
				})
			},
		},
		computed:{
			...mapState({
				wechatInfo:state=>state.wechatInfo.wechatInfo,
			})
		}
	}
</script>

<style>
	.title-box{
		padding-left: 12.5%;
		text-align: left;
		margin-top: 60rpx;
	}
	.dlf-title {
		font-size: 44rpx;
	}
	.dlf-content {
		font-size: 30rpx;
		color: #656565;
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
</style>
