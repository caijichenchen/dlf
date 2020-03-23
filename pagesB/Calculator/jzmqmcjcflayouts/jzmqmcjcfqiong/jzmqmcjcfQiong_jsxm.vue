<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">计算项目备注</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt" style=" white-space: pre-wrap">
				{{jzmqmcjcfQiong4}}
			</view>
		</view>
	</view>
</template>

<script>
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
			jzmqmcjcfQiong4: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				modalName:'jzmqmcjcfQiong_jsxm',
			}
		},
	}
</script>

<style >
	
	
</style>