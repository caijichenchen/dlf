<template>
    <view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">优惠券</block>
		</cu-custom>
		<view class="px-2">
			<view v-if="allList.length == 0">
				<view class="text-center mt-4">您暂时还没有可以使用的优惠券哦</view>
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
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				allList: [],
				dateNow:new Date().getTime()
			}
		},
		onLoad(options) {
			$req.request({
				url:'/api/xcx/myvip/getUserCouponByType',
				data:{
					type:options.type
				}
			}).then(res=>{
				let result = res.data.data
				result.forEach(item=>{
					let arr = item.start_end_time.split(' ')
					item.startTime = new Date(arr[0]).getTime()
					item.endTime = new Date(arr[2]).getTime()
				})
				this.allList = result
				console.log(this.allList)
			}).catch(err=>{
				uni.showToast({
					icon:'none',
					title:'获取优惠券信息失败,请稍后重试'
				})
			})
		},
		methods:{
			useDiscounter(){
				
			}
		}
	}
</script>

<style scoped>
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
