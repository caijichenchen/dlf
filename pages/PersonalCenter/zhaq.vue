<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">账户安全</block>
		</cu-custom>
		<view class="font-md">
			<view class="p-3 row border-bottom">
				<view>单日异地登陆次数</view>
				<text style="margin-left: auto;">{{safedata.abnormality_number}}次</text>
			</view>
			<view class="p-3 row border-bottom">
				<view>今日登陆次数</view>
				<text style="margin-left: auto;">{{safedata.login_number}}次</text>
			</view>
			<view class="p-3 row border-bottom">
				<view>今日异常登陆次数</view>
				<text style="margin-left: auto;">{{safedata.abnormality_number}}次</text>
			</view>
			<view class="p-3 row border-bottom">
				<view>帐户冻结次数</view>
				<text style="margin-left: auto;">{{safedata.closure_number}}次</text>
			</view>
			<view class="p-2">
				<view>独立费网站的封号原因:</view>
				<view>1、为保护帐户安全，避免帐号密码泄漏被盗，独立费帐号仅限个人使用，不允许转借或租赁他人；</view>
				<view>2、同一独立费帐号单日异地登陆限制，且同一时间同一帐号只能在一个设备上登陆，异地登录次数多过，账号将被冻结</view>
				<view>3、若收到封号提醒或已被封号，请尽快登出非本人设备或修改帐号密码以免帐号被封禁或再次被封禁。若多次被封禁我司将遵循协议永久封号喔~具体规则说明 <text class="chakan">点击查看</text><text>独立费会员协议</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				safedata:{}	
			}
		},
		onLoad() {
			$req.request({
				url: '/api/xcx/account/security',
				header: {
					"Authorization": "Bearer " + uni.getStorageSync('loginToken'),
					"Accept":"application/prs.dlf.v1+json",
				} 
			})
			.then((res)=>{
				console.log("获取安全信息成功",res)
				this.safedata = res.data
			})
			.catch((err)=>{
				console.log("获取安全信息失败",err)
			})
		},
	}
</script>

<style>
	page{
		background: #fff;
	}

</style>
