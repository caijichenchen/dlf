<template>
	<view class="contain">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">绑定支付宝</block>
		</cu-custom>
		<view class="aqmmsz">
			<view class="group">
				<text>支付宝姓名:</text>
				<input type="text"  v-model="uname" placeholder="请输入支付宝姓名" placeholder-style="font-size:0.77rem">
			</view>
			<view class="group">
				<text>支付宝账号:</text>
				<input type="text"  v-model="unum" placeholder="请输入支付宝账号" placeholder-style="font-size:0.77rem">
			</view>
			<view class="group">
				<text>再次输入支付宝账号:</text>
				<input type="text"  v-model="urenum" placeholder="请再次输入支付宝账号" placeholder-style="font-size:0.77rem">
			</view>
			<view class="group">
				<text >手机号:</text>
				<input type="text"  v-model="utel" >
			</view>
			<view class="group">
				<input type="password" v-model="captcha" placeholder="请输入验证码" placeholder-style="font-size:0.77rem">
				<img :src="imgUrl+'/captcha/default?Oq5BOpX6'+getpic" alt="" @tap="newPic" style="margin-left: 1.5rem;margin-top: 0.5rem;">
			</view>
			<view class="group">
				<input type="password" v-model="telcode" placeholder="请输入短信验证码" placeholder-style="font-size:0.77rem">
				<text class="textBuuton px-2 position-absolute round" @tap="getTelNum">发送验证码 </text>
			</view>
		</view>
		<view class="qrbtn"><button class="btn" @tap="setzfb">确认绑定</button></view>
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
				uname:'',
				unum:'',
				urenum:'',
				captcha:'',
				telcode: '',
				utel: '',
				imgUrl:this.$serverimgUrl,
				getpic: Math.random()
			}
		},
		onLoad() {
			if(this.userInfo){
				this.utel = this.userInfo.userInfo.user.tel
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
						tel:this.utel,
						tel_time:Date.now(),
						captcha:this.captcha,
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
			setzfb() {
				$req.request({
					url:'/api/xcx/aliBind',
					method:'POST',
					data:{
						tel:this.utel,
						tel_code:this.tel_code,
						ali_name:this.uname,
						ali_account:this.unum,
						ali_account_confirmation:this.urenum
					}
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.contain{
		width: 100%;
		height: 1250upx;
		background-color: #fff;
		font-size: 24upx;
		color: #898989;
	}
	.aqmmsz,.qrbtn{
		width: 675upx;
		height: 500upx;
		margin-left: 37.5upx;
	}
	.group{
		width: 100%;
		height: 100upx;
		border-bottom: 1upx solid #ccc;
		line-height: 100upx;
		position: relative;
	}
	.group input{
		height: 100%;
		float: left;
		padding-left: 20upx;
	}
	.group text{
		float: left;
	}
	.textBuuton{
		right: 30upx;
		top: 20upx;
	}
	.qrbtn{
		height: 100upx;
		margin-top: 30upx;
	}
	.qrbtn .btn{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		color: #fff;
		font-size: 0.77rem;
		background-color: #00a0ea;
	}
</style>
