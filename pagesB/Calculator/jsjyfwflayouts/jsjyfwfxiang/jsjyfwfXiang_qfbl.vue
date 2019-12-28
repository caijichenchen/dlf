<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">建设交易服务费收取比例</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						   v-for="(item,index) in contentList" :key="index" @tap="assignment" :data-val="valList[index]">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{valList[index]}}
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
			jsjyfwfXiang8: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				modalName:'jsjyfwfXiang_qfbl',
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		computed: {
			dataComputed: function() {
				return this.jsjyfwfXiang8.split("&&&")
			},
			contentList: function() {
				return this.dataComputed[0].split("|")
			},
			valList: function() {
				return this.dataComputed[1].split("|")
			}
		}
	}
</script>

<style >
	
	
</style>