<template>
	<view>
		<view class="my-stand" v-for="(item,index) in items" :key="index">
			<view class="my-stand-info">
				<view class="">
					标准名:
					<text>{{item.standard}}</text>
				</view>
				<view class="">
					文件名:
					<text>{{item.file}}</text>
				</view>
			</view>
			<view class="my-stand-down">
				<navigator>下载</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'},
					{standard:'建筑装饰设计收费标准20...',file:'建筑装饰设计收费标准20...'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.my-stand{
		width: 100%;
		padding: 15upx 40upx;
		display: flex;
		border-bottom: 2upx solid #dddddd;
	}
	.my-stand-info{
		width: 70%;
	}
	.my-stand-down{
		width: 30%;
		margin: auto;
		text-align: center;
	}
	.my-stand-down navigator{
		width: 96upx;
		height: 48upx;
		line-height: 40upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 24upx;
		padding: 6upx 24upx;
		background: #00a0ea;
		margin-left: 40%;
	}
</style>
