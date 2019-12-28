<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
		    <block slot="content">我的收藏</block>
		</cu-custom>
		<view class="suggst_title">
			<view class="suggst_title_calculation" style="width: 370upx;">
				计算名称
			</view>
			<view class="suggst_title_calculation" style="width: 190upx;">
				计算地址
			</view>
			<view class="suggst_title_calculation" style="width: 190upx;">
				取消收藏
			</view>
		</view>
		<view class="list_all" v-for="(item,index) in items" :key="index">
			<view class="list_alls">
				<view class="list_all_title" style="width: 370upx;">
					{{item.title}}				
				</view>
				<view class="list_all_title" style="line-height: 80upx;">
					<navigator :url="item.add" style="background-color: #00a0ea;border-color: #00a0ea;">点击跳转</navigator>
				</view>
				<view class="list_all_title">
					<navigator url="jsym" style="background-color: #d9534f;border-color: #d9534f;">取消收藏</navigator>
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
					{title:'监理费计算标准-6165541奥术大师大',time:'两周前',add:'jsym'},
					{title:'监理费计算标准-6165541',time:'两周前',add:'jsym'},
					{title:'监理费计算标准-6165541',time:'两周前',add:'jsym'}
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
		/* width: 33.333%; */
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
		height: 114upx;
		padding: 16upx;
		float: left;
		text-align: center;
	}
	.list_all_title navigator{
		width: 160upx;
		height: 58upx;
		/* padding: 10upx 20upx; */
		line-height: 58upx;
		color: #FFFFFF;
		font-size: 26upx;
		border-radius: 4upx;
	}
</style>
