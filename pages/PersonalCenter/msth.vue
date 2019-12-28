<template>
    <view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">密钥兑换历史</block>
		</cu-custom>
		<view class="p-4 border-bottom font-md" v-if="historyData.length == 0">
			抱歉、暂无密匙兑换，想了解更多活动请关注微信公众号-"独立费"
		</view>
		<view v-else class="p-4 border-bottom font-md" v-for="(item,index) in historyData" :key="index">
			<view ><text>密匙:</text><text class="blue">{{item.cdkey}}</text></view>
			<view>物品信息:{{item.message}}</view>
			<view>密匙来源:{{item.publisher}}</view>
			<view>使用时间:{{item.updated_at}}</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
	  data () {
		return {
			historyData:[]
		}
	  },
	  onLoad() {
	  	$req.request({
	  		url:'/api/xcx/myvip/history',
	  		header: {
	  			"Authorization": "Bearer " + uni.getStorageSync('loginToken'),
	  			"Accept":"application/prs.dlf.v1+json",
	  		},
	  	}).then(res=>{
	  		this.historyData = res.data.data.data
	  		console.log(res)
	  	}).catch(err=>{
	  		console.log(err)
	  	})
	  }
	}
</script>

<style >
	page{
		background: #fff;
	}
.blue{
	color: #00a0ea;
	margin-top: 5upx;
}
</style>
