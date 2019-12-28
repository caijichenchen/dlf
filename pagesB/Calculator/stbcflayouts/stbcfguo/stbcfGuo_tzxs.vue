<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水土保持费调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.value}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.xs}}
							</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'stbcfGuo_tzxs',
				tzxsList: [
					{value:"地貌类型调整系数山区",xs:"1.2"},
					{value:"丘陵及风沙区",xs:"1.0"},
					{value:"平原区",xs:"0.8"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		}
	}
</script>

<style >
	
	
</style>