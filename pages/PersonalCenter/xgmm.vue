<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">修改密码</block>
		</cu-custom>
		<view >
			<view class="p-3 row border-bottom">
				<text class="font-md">旧 &nbsp;密 &nbsp;码:</text>
				<input placeholder="输入原密码" v-model="oldpwd"/>
			</view>
			<view class="p-3 row border-bottom">
				<text class="font-md">新 &nbsp;密 &nbsp;码:</text>
				<input placeholder="输入新密码" v-model="newpwd"/>
			</view>
			<view class="p-3 row border-bottom">
				<text class="font-md">确认密码:</text>
				<input placeholder="确认密码" v-model="reqpwd"/>
			</view>
			<view class="tips font"><text>6-16位,由字母(区分大小写)、数字、符号组成</text></view>
			<button class="btn" @tap="changepwd">确定</button>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				oldpwd:'',
				newpwd:'',
				reqpwd:''
			}
		},
		methods: {
			changepwd(){
				const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/
				if(!this.oldpwd){
					return uni.showToast({
						icon:'none',
						title:'原始密码不能为空'
					})
				}
				if(!this.newpwd){
					return uni.showToast({
						icon:'none',
						title:'新密码不能设置为空'
					})
				}
				if(this.newpwd != this.reqpwd){
					return uni.showToast({
						icon:'none',
						title:'两次密码输入不一致'
					})
				}
				if(!reg.test(this.newpwd) || !reg.test(this.reqpwd)){
					return uni.showToast({
						icon:'none',
						title:'密码输入不符合规范'
					})
				}
				$req.request({
					url: '/api/xcx/account/setPassword',
					method: 'POST',
					data: {
						oldpassword:this.oldpwd,
						password:this.newpwd,
						password_confirmation:this.reqpwd
					}
				})
				.then((res)=>{
					uni.showToast({
						icon:'none',
						title:'修改密码成功'
					})
					uni.redirectTo({
					    url: '../login/login'
					});
				})
				.catch((err)=>{
					console.log("修改密码失败",err)
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.tips{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		color: red;
		text-align: center;
	}
	.btn{
		width: 90%;
		height: 70upx;
		line-height: 70upx;
		background-color: #00a0ea;
		color: #fff;
	}
</style>
