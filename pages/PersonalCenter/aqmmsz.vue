<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">安全密码设置</block>
		</cu-custom>
		<view class="font-md">
			<view class="px-4 py-3 iconGray row border-bottom" >手机号: {{userInfo.userInfo.user.tel}}</view>
			<view class="px-4 py-3 row border-bottom" style="width:50%">
				<input type="text" placeholder="请输入短信验证码" placeholder-style="font-size:26rpx" v-model="telnum">
				<!-- <button  @tap="getTelNum">发送验证码</button> -->
			</view>
			<view class="px-4 py-3 row border-bottom">
				<input type="text" v-model="pwd" placeholder="请输入安全密码(尽量不要与登录密码一致哦)" placeholder-style="font-size:26rpx">
			</view>
			<text class="ml-4 iconGray font">字母、数字、符号、两种以上的组合,6-16个字符</text>
			<view class="px-4 py-3 row border-bottom">
				<input type="text" v-model="repwd" placeholder="再次输入安全密码" placeholder-style="font-size:26rpx">
			</view>
		</view>
		<button class="okbtn" @tap="setpwd">确认密码</button>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				telnum: '',
				picnum: '',
				pwd: '',
				repwd: '',
				imgUrl:this.$serverimgUrl,
				getpic: Math.random()
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			newPic(){
				this.getpic = Math.random()
			},
			getTelNum(){
				$req.request({
					url:'/api/xcx/registerverfi',
					method:'POST',
					data:{
						tel:this.userInfo.userInfo.user.tel,
						tel_time:Date.now(),
						captcha:this.picnum,
						message_code:'alert'
					}
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:err.data.message
					})
				})
			},
			setpwd() {
				$req.request({
					url:'/api/xcx/setPassword',
					method:'POST',
					data:{
						tel:this.userInfo.userInfo.user.tel,
						tel_code:this.telnum,
						password:this.pwd,
						password_confirmation:this.repwd
					}
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:err.data.message
					})
				})
			}
		}
	}
</script>

<style >
	page{
		background: #fff;
	}
	.okbtn{
		width: 80%;
		height: 2rem;
		line-height: 2rem;
		margin-top: 2rem;
		margin-left: 10%;
		color: #fff;
		background-color: #00a0ea;
	}
</style>
