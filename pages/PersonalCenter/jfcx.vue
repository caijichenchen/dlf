<template>
    <view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">积分查询</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in inquireList" :key="index" @tap="getInquire" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="inquire-content">
				<view v-if="TabCur == 0">
					<view class="p-3 row border-bottom font-md">
						<view >{{titlelist[TabCur]}}</view>
						<view  style="margin-left: auto;">{{jfye.integral}}</view>
					</view>
					<view class="p-3 row border-bottom font-md">
						<view >总累计积分</view>
						<view style="margin-left: auto;">{{jfye.cumtrapz}}</view>
					</view>
				</view>
				<view v-else>
					<view class="p-3 row border-bottom font-md">
						<view class="i-title">{{titlelist[TabCur]}}</view>
						<view style="margin-left: auto;">11积分</view>
					</view>
					<view class="p-3 row border-bottom font-md" v-for="(item,index) in inquireData.integralCalculation" :key="index">
						<view class="i-title">
							{{item.detail}}
						</view>
						<view  v-if="TabCur == 1 || TabCur == 2" style="margin-left: auto;">
							花费了{{item.value}}积分
						</view>
						<view  v-else style="margin-left: auto;">
							获得了{{item.value}}积分
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
				shows:1,
				TabCur: 0,
				scrollLeft: 0,
				inquireList:['积分余额','下载消耗','计算消耗','积分获得'],
				titlelist:['可用积分','计算消耗积分','下载消耗积分','总积分'],
				jfye:{},
				inquireData:{}
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/integral/inquire',
			}).then(res=>{
				this.jfye = res.data.integralBalance
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		methods: {
			getInquire(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur >= 1){
					$req.request({
						url:'/api/xcx/integral/inquire',
						data:{id:e.currentTarget.dataset.id}
					}).then(res=>{
						this.inquireData = res.data
						console.log(res)
					}).catch(err=>{
						console.log(err)
					})
				}
			 },
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
	/* tabs样式 */
	.inquire-content {
		width: 100%;
	}
	.i-title {
		width: 65%;
		word-wrap:break-word;
		white-space: normal;
		line-height: 56upx;
	}
</style>
