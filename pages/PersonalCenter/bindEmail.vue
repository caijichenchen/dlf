<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view v-if="type == 'phone'" class="mt-4 p-2">
			<view class="row border-bottom mb-3 pb-1">
				<view class="py-1" v-model="code">输入验证码:</view>
				<input type="text">
				<view class="code-btn iconWhite backBlue p-1">获取验证码</view>
			</view>
			<view class="code-btn iconWhite backBlue py-1" @tap="unitePhone">确认</view>
		</view>
		<view v-if="type == 'email'" class="mt-4 p-2 ">
			<view class="row border-bottom mb-3 pb-1">
				<view>输入邮箱:</view>
				<input type="text" v-model="email">
				<view class="code-btn iconWhite backBlue p-1 mt-2">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				type: 'phone',
				title: '解绑手机号',
				code: '',
				email: ''
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
			unitePhone(){
				
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
</style>
