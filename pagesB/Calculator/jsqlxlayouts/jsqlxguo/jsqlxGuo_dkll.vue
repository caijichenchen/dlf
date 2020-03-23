<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">最新贷款利率</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group">
					<view class="w-100 dlf-li font lt border-b" 
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs"> 
						<view style="width: 87%;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt">
							{{item.xs}}
						</span>
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
			modalName: 'jsqlxGuo_dkll',
			fjxs: '',
			fjxsList: [
				{value:"2018年8月1日利率上限（1.3倍）",xs:"6.18"},
				{value:"2018年8月1日利率上限（1.2倍）",xs:"5.7"},
				{value:"2018年8月1日利率上限（1.1倍）",xs:"5,23"},
				{value:"2018年8月1日利率下限（85折）",xs:"4.04"},
				{value:"2018年8月1日利率下限（7折）",xs:"3.33"},
				{value:"2018年8月1日基准利率",xs:"4.75"},
			]
		};
	},
	methods: {
	},
	

};
</script>

<style>

</style>
