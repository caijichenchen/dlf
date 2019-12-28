<template>
	<view>
		<view class="table">
			<view>
				序号
			</view>
			<view>
				名称
			</view>
			<view>
				操作
			</view>
		</view>
		<view class="list_all">
			暂无数据
		</view>
		<view class="">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.table{
		width: 100%;
		display: flex;
		background: #FFFFFF;
	}
	.table view{
		width: 33.33%;
		padding: 16upx;
		font-size: 28upx;
		text-align: center;
	}
	.list_all{
		width: 100%;
		padding: 16upx;
		text-align: center;
		border-bottom: 1px solid #f2f2f2;
		border-top: 1px solid #f2f2f2;
		color: #656565;
		background: #FFFFFF;
	}
</style>
