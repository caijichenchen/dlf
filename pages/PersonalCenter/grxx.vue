<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">个人资料</block>
		</cu-custom>
		<view>
			<view class="p-2 row border-bottom font-md">
				<view style="line-height: 80rpx;">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像:</view>
				<view style="margin-left: auto;" >
					<image style="width: 80rpx;height: 80rpx;border-radius: 50%;" :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image>
				</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >用&nbsp;户&nbsp;名:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.name}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user_name}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</view>
				<view style="margin-left: auto;" v-if="userInfo.userInfo.sex == 1">女</view>
				<view style="margin-left: auto;" v-if="userInfo.userInfo.sex == 0">男</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >验证手机:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.tel}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >验证邮箱:</view>
				<view style="margin-left: auto;"></view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >会员信息:</view>
				<view style="margin-left: auto;">会员等级:{{userInfo.vipInfo.type}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >会员期限:</view>
				<view style="margin-left: auto;">{{userInfo.vipInfo.expireDate}}</view>
			</view>
			<view class="p-3 row font-md"  v-if="userInfo.vipInfo.type == '自选会员'">
				<navigator class="iconBLue" url="./wdhy">点击查看详情</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				serverUrl:this.$serverimgUrl,
				userInfo: ''
			}
		},
		mounted() {
			$req.request({
				url: '/api/xcx/account/userInfo'
			}).then(res=>{
				this.userInfo = res.data
				console.log(res.data)
			}).catch(err=>{
				uni.showToast({
					icon:'none',
					title:'获取个人信息失败，请稍后重试'
				})
			})
		},
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
</style>
