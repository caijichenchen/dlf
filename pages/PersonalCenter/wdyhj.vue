<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的优惠券</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="px-2">
				<view v-if="allList.length == 0">
					<view class="text-center">您暂时还没有可以使用的优惠券哦</view>
					<!-- <view>兑换优惠券</view> -->
				</view>
				<view v-else>
					<view v-for="(item,index) in allList" :key="index" style="display: flex;" class="discount-item mt-4">
						<view class="ml-3 dis-left py-1">
							<view class="py-1 iconBLue">￥<text style="font-weight: 600;font-size: 40rpx;">{{item.discount}}</text>满{{item.sum_limit}}减{{item.discount}}</view>
							<view class="py-2">{{item.type}}</view>
							<view class="py-1" style="font-size: 26rpx;">有限期:{{item.start_end_time}}</view>
						</view>
						<view class="dis-right">
							<view v-if="dateNow < item.startTime" class="dis-li py-1 no">时间未到</view>
							<view v-if="item.startTime<=dateNow&&dateNow<=item.endTime" class="dis-li py-1 ok" @tap="useDiscounter(item.type)">立即使用</view>
							<view v-if="dateNow > item.endTime" class="dis-li py-1 no">已过期</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				sjf:['全部','VIP会员','企业会员','自选会员'],
				allList:[],
				dateNow:new Date().getTime()
			}
		},
		mounted() {
			this.allhy()
		},
		methods: {
			navigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pages/${path}/${path}`
				})
			},
			 tabSelect(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 0){
					this.allhy()
				}else if(this.TabCur == 1){
					this.vip()
				}else if(this.TabCur == 2){
					this.qyvip()
				}else if(this.TabCur == 3){
					this.zxvip()
				}
			 },
			allhy(){
				$req.request({
					url:'/api/xcx/myvip/getUserAllCoupon',
				}).then(res=>{
					let result = res.data.data
					result.forEach(item=>{
						let arr = item.start_end_time.split(' ')
						item.startTime = new Date(arr[0]).getTime()
						item.endTime = new Date(arr[2]).getTime()
					})
					this.allList = result
				}).catch(err=>{
					console.log(err)
				})
			},
			vip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=1',
				}).then(res=>{
					let result = res.data.data
					result.forEach(item=>{
						let arr = item.start_end_time.split(' ')
						item.startTime = new Date(arr[0]).getTime()
						item.endTime = new Date(arr[2]).getTime()
					})
					this.allList = result
				}).catch(err=>{
					console.log(err)
				})
			},
			zxvip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=3',
				}).then(res=>{
					let result = res.data.data
					result.forEach(item=>{
						let arr = item.start_end_time.split(' ')
						item.startTime = new Date(arr[0]).getTime()
						item.endTime = new Date(arr[2]).getTime()
					})
					this.allList = result
				}).catch(err=>{
					console.log(err)
				})
			},
			qyvip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=2',
				}).then(res=>{
					let result = res.data.data
					result.forEach(item=>{
						let arr = item.start_end_time.split(' ')
						item.startTime = new Date(arr[0]).getTime()
						item.endTime = new Date(arr[2]).getTime()
					})
					this.allList = result
				}).catch(err=>{
					console.log(err)
				})
			},
			useDiscounter(type){
				if(type.search('企业') != -1){
					return uni.navigateTo({
						url:'/pages/PersonalCenter/qyhy'
					})
				}else if(type.search('VIP') != -1){
					return uni.navigateTo({
						url:'/pages/PersonalCenter/VIPhy'
					})
				}else if(type.search('自选') != -1){
					return uni.navigateTo({
						url:'/pages/PersonalCenter/zxhy'
					})
				}
			}
		},
	}
</script>

<style>
	.discount-item{
		width: 100%;
		border: 3upx solid #ececec;
		border-radius: 10upx;
		box-shadow: 4upx 4upx 8upx  #CCCCCC;
	}
	.dis-left {
		width: 70%;
		border-right: 5upx dotted #ececec;
	}
	.dis-right {
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ok {
		border: 2rpx solid #00a0e0;
		color: #00A0E0;
	}
	.no {
		border:  2rpx solid #ccc;
		color: #ccc;
	}
	.dis-li {
		text-align: center;
		font-size: 30rpx;
		width: 80%;
		border-radius: 36rpx;
	}
	
	
</style>
