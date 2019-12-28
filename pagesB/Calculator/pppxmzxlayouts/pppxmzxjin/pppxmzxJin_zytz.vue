<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">收费附加系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 597upx;">
					<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs"> 
						<view style="width: 595upx;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="text-blue lt">
							{{item.xs}}
						</span>
					</view>
					<view class="pl-1 my-2 lt font white-space">
						<view>注:</view>
						<view>以上为一般复杂项目，对于特殊复杂项目，则根据工作内容采取一事一议的方式由双方另行协商咨询服务费。</view>
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
		} // 弹框可见标志
	},
	data() {
		return {
			modalName: 'pppxmzxJin_fztz',
			fjxs: '',
			fjxsList: [
				{value:" 子项目多（立项批复文件≥3个）",xs:"1.2"},
				{value:" 涵盖两个以上领域或行业",xs:"1.2"},
				{value:" 存量项目",xs:"1.2"},
				{value:" 跨行行政区域或跨行行政层级的大型 项目",xs:"1.2"},
				{value:" 整改项目（如政府购买服务整改，在建项目等）",xs:"1.3"},
				{value:" 经营性项目",xs:"1.4"},
				{value:" 当达到2个及以上条件时，复杂系数一般为1.4",xs:"1.4"},
			]
		};
	},
	methods: {
		clickFjxs(e) {
			//点击隐藏
			console.log(e);
		}
	},
	

};
</script>

<style>

</style>
