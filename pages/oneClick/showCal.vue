<template>
	<view class="category-warp">
		<view class="content-wrap">
			<view class="c-title">Ⅰ、项目名称及工程造价</view>
			<view class="i-wrap">
				<view class="i-title b-l">项目名称</view>
				<input class="i-in i-l" type="text">
			</view>
			<view class="i-wrap">
				<view class="i-title b-l">工程造价</view>
				<input class="i-in i-b" type="text">
				<view class="i-title b-r">万元</view>
			</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅱ、工程建设其他费用</view>
			<!-- <component :is="jsxmqq"></component> -->
			<jsxmqq></jsxmqq>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅲ、预备费</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅳ、建设期贷款利息</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅴ、铺底流动资金</view>
			<!-- <view v-for="(item,index) in testList" :key="index">
				<view v-if="item.check">{{'哈哈哈'+item.name}}</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import jsxmqq from '@/pagesC/Calculator/jsxmqqgzzxflayouts/jsxmqqgzzxfguo/jsxmqqgzzxf_counter_guo'
	export default {
		data (){
			return {
				
			}
		},
		components: {
			jsxmqq
		}
	}
</script>

<style>
	.category-warp {
		margin-top: 40rpx;
		margin-bottom: 50rpx;
	}
	.content-wrap {
		/* padding: 70rpx 0; */
	}
	.c-title{
		font-size: 36rpx;
		margin-left: 10rpx;
		margin: 40rpx;
	}
	.i-wrap {
		display: flex;
		margin: 14rpx 3%;
	}
	.i-title{
		background: #eee;
		font-size: 28rpx;
		color: #555;
		padding: 12rpx 16rpx;
		border: 2rpx solid #ccc;
	}
	.i-in{
		border: 2rpx solid #ccc;
		height: 70rpx;
	}
	.i-l {
		width: 78%;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
	.i-b{
		width: 65%;
	}
	.b-l{
		border-top-left-radius: 12rpx;
		border-bottom-left-radius: 12rpx;
		border-right: 0;
	}
	.b-r{
		border-left: 0;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
</style>
