<template>
	<view>
		<!-- <view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''"> -->
		<view class="cu-modal " @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">招标代理费计算类别</view>
					<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="modal-warp">
					<view class="border-bottom" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
						<view class="text-blue font-md text-left mb-1">{{ item.name }}</view>
						<view class="modal-content" v-for="(v, index) in item.data" :key="index">
							{{ v.show }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				fzcdList: [
					{
						name: '工程招标',
						data: [{ show: '工程招标：各类土木工程、建筑工程、设备安装、管道线路敷设、装饰装修等建设以及附带服务的工程招标代理服务收费。' }]
					},
					{
						name: '货物招标',
						data: [
							{ show: '货物招标：原材料、产品、设备和固态、液态或气态物体和电力等货物及其附带服务的货物招标代理服务收费。' },
						]
					},
					{
						name: '服务招标',
						data: [
							{ show: '服务招标：工程勘察、设计、咨询、监理，矿业权、土地使用权出让、转让和保险等工程和货物以外的服务招标代理服务收费。' },
						]
					},
				]
			}
		}
	}
</script>

<style>
	.modal-warp{
		border: 2rpx solid #00a0e0;
		border-bottom: none;
	}
	.border-bottom{
		padding: 18rpx 10rpx;
		border-bottom: 2rpx solid #00a0e0;
	}
	.modal-content{
		font-size: 24rpx;
		line-height: 42rpx;
		text-align: left;
	}
</style>
