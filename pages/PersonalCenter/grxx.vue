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
					<image style="width: 80rpx;height: 80rpx;border-radius: 50%;" :src="serverimgUrl+'/upload'+userInfo.userInfo.head_img"></image>
				</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >用&nbsp;户&nbsp;名:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.name}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</view>
				<view style="margin-left: auto;" >{{userInfo.userInfo.user_name?userInfo.userInfo.user_name:'您还没有填写个人信息'}}</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</view>
				<view style="margin-left: auto;" v-if="userInfo.userInfo.sex == 1">女</view>
				<view style="margin-left: auto;" v-else-if="userInfo.userInfo.sex == 0">男</view>
				<view style="margin-left: auto;" v-else>您还没有填写个人信息</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >验证手机:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.tel}} 
					<text class="iconBLue" @tap="bindEmail('phone')">{{userInfo.userInfo.user.tel_verified == 1?'立即解绑':'立即绑定'}}</text> 
				</view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >验证邮箱:</view>
				<view style="margin-left: auto;" v-if="userInfo.email.verified == 1">{{userInfo.email.email}}<text class="iconBLue">已认证</text></view>
				<view style="margin-left: auto;" v-if="userInfo.email.verified == 0"><text class="iconBLue" @tap="bindEmail('email')">绑定邮箱</text></view>
			</view>
			<view class="p-3 row border-bottom font-md">
				<view >会员信息:</view>
				<view style="margin-left: auto;">会员等级:{{userInfo.vipInfo.type}}</view>
			</view>
			<view class="p-3 row border-bottom font-md" v-if="userInfo.vipInfo.type == 'VIP会员' || userInfo.vipInfo.type == '企业会员'">
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
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				serverimgUrl:this.$serverimgUrl,
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
		methods:{
			bindEmail(type){
				uni.navigateTo({
					url:`/pages/PersonalCenter/bindEmail?type=${type}`
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
</style>
