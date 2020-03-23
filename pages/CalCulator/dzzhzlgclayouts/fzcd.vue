<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">招标代理费计算类别</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl" v-if="status">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						{{ v.show }}
					</view>
				</view>
			</view>
			<view v-else class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						{{ v.show }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script> 
import { modalMixin } from '@/common/base/modalMixin';
export default {
	mixins: [modalMixin],
	props: {
		showModalName: {
			type: String,
			default: null
		}, // 弹框可见标志
		status:{
			type:Boolean,
			default:false
		}
	},
	data() {
		return {
			modalName: 'dzzhzlgcGuo_fzcd',
			fzcdList: [
				{
					name: '复杂（1.3）',
					data: ['1、地质灾害应急勘察','2、井深超过20m的井下作业','3、5种以上勘察手段','4、勘察路线长度＞3km','5、工作区间相对高差＞300m']
				},
				{
					name: '较复杂（1.2）',
					data: ['1、井深不超过20m','2、＞5m的井下作业','3、3~5种勘察手段','4、1km＜勘察路线长度≤3km','5、工作区间相对高差＞100m，＜300m']
				},
				{
					name: '简单（1.0）',
					data: ['1、井深不超过5m的井下作业','2、2种及以下勘察手段','3、勘察路线长度＜1km','4、工作区间相对高差＜100m']
				},
			],
			fzcdData:[
				{
					category:'1.地质灾害',
					name: '复杂（1.3）',
					data: ['1.特大型；','2.治理灾种>3类；','3.治理工程点之间距离≥10km；','4、勘察路线长度＞3km','5、工作区间相对高差＞300m']
				},
				{
					name: '较复杂（1.2）',
					data: ['1、井深不超过20m','2、＞5m的井下作业','3、3~5种勘察手段','4、1km＜勘察路线长度≤3km','5、工作区间相对高差＞100m，＜300m']
				},
				{
					name: '简单（1.0）',
					data: ['1、井深不超过5m的井下作业','2、2种及以下勘察手段','3、勘察路线长度＜1km','4、工作区间相对高差＜100m']
				},
			]
		};
	}
};
</script>

<style>

</style>
