<template>
	<view class="content">
		<cu-custom  >
		    <block slot="content"></block>
		</cu-custom>
		<view class="header">
			<text style="margin-right: 3rem;" :class="{'activeCat':showPhone}" @click="changeCategory">手机号找回</text>
			<text :class="{'activeCat':showEmail}" @click="changeCategory">邮箱找回</text>
		</view>
		<view class="list" v-if="showPhone">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="phoneno" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="regpassword" type="text" password maxlength="16" placeholder="请确认密码" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/3.png"></image>
				<input class="biaoti" v-model="code" type="number" maxlength="4" placeholder="请输入验证码" />
				<view class="code" :class="goreg ? '':'noinput'" @click="getCode">{{codetext}}</view>
			</view>
			<button class="regbtn" :class="goreg ? '':'noinput'" @click="goreg && regUser">提交</button>
		</view>
		<view v-if="showEmail" class="list">
			<view class="list-call">
				<input class="biaoti" type="text" placeholder="请输入邮箱地址" />
			</view>
			<button class="regbtn" :class="goreg ? '':'noinput'" @click="goreg && regUser">发送重置密码链接</button>
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
				showPhone:true,
				showEmail:false,
				goreg:false,
				codetext:'获取验证码'
			}
		},
		methods: {
			changeCategory(){
				if(this.showEmail){
					this.showPhone = true
					this.showEmail = false
				}else if(this.showPhone){
					this.showEmail = true
					this.showPhone = false
				}
			},
			
		}
	}
</script>

<style>
	.content {
		width: 100%;
		padding: 0.5rem 0.5rem;
		box-sizing: border-box;
	}
	.header {
		font-size: 1.2rem;
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
    	margin-top: 1.8rem;
    	box-sizing: border-box;
    }
    .list-call{
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    	color: #333333;
    	height: 2.3rem;
    	margin-bottom: 0.3rem;
    	border-bottom: 2rpx solid rgba(230,230,230,1);
    }
    .list-call .img{
    	width: 1.2rem;
    	height: 1.2rem;
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
    	height: 1.8rem;
    	line-height: 1.8rem;
    	padding-left: 0.3rem;
    	padding-right: 0.3rem;
    	font-size: 0.75rem;
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
    	border-radius: 0.3rem;
    	font-size: 0.85rem;
    	height: 2.3rem;
    	line-height: 2.3rem;
    	margin-top: 1.2rem;
    }
</style>
