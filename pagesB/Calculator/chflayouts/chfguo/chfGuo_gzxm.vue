<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">测绘费内容查看</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt" style="white-space: pre-wrap">
				{{chfGuo5}}
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
			chfGuo5: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				modalName:'chfGuo_gzxm',
			}
		},
	}
</script>

<style >
	
	
</style>