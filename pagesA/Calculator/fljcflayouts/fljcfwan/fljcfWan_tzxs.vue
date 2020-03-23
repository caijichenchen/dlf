<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">安徽省防雷设施检测费调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="num-wrap">
				<view class="num-wrap-li border-b"
					v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs">
					<view class="li-left">{{item.value}}</view>
					<view class="li-right">
						<text class="num-box">{{item.xs}}</text>
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
			modalName: 'fljcfWan_tzxs',
			fjxsList: [
				{value:" 默认",xs:"1.0"},
				{value:" 工业项目减半收取",xs:"0.5"},
			]
		};
	},
};
</script>

<style>

</style>
