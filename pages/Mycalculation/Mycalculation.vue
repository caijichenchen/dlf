<template>
	<view>
		<view class="suggst_title">
			<view class="suggst_title_calculation">
				计算名称
			</view>
			<view class="suggst_title_calculation">
				计算时间
			</view>
			<view class="suggst_title_calculation">
				浏览报告
			</view>
		</view>
		<view class="list_all" v-for="(item,index) in items" :key="index">
			<view class="list_alls">
				<view class="list_all_title">
					<text style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;">{{item.title}}</text>
				</view>
				<view class="list_all_title">
					{{item.time}}
				</view>
				<view class="list_all_title">
					<navigator style="background-color: #5cb85c;border-color: #4cae4c;">查看计算过程</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{title:'监理费计算标准-6165541',time:'两周前'},
					{title:'监理费计算标准-6165541',time:'两周前'},
					{title:'监理费计算标准-6165541',time:'两周前'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.suggst_title{
		display: flex;
		flex-wrap: wrap;
	}
	.suggst_title_calculation{
		width: 33.333%;
		height: 74upx;
		padding: 16upx;
		float: left;
		background-color: #00a0e0;
		color: #FFFFFF;
		text-align: center;
	}
	.list_alls{
		display: flex;
		flex-wrap: wrap;
		border-bottom: 2upx solid #ccc;
	}
	.list_all_title{
		width: 33.3333333%;
		height: 114upx;
		padding: 16upx;
		float: left;
		text-align: center;
	}
	.list_all_title navigator{
		width: 200upx;
		height: 58upx;
		padding: 10upx 20upx;
		color: #FFFFFF;
		font-size: 26upx;
		border-radius: 4upx;
	}
</style>
