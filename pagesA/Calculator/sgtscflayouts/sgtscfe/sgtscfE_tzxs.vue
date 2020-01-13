<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工图审查费调整系数</view>
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
				modalName:'sgtscfE_tzxs',
				tzxsList: [
					{value:"施工图审查费调整系数默认为1",xs:"1"},
					{value:"复审费用按照施工图设计文件审查咨询服务收费标准的50％收取",xs:"0.5"},
					{value:"对列入国家和省重点工程项目计划的工程项目，施工图设计文件审查咨询服务费基准价按附表标准的70％计取",xs:"0.7"},
					{value:"对经济适用住房项目，施工图设计文件审查咨询服务费基准价按附表标准的50％计取",xs:"0.5"},
					{value:"经审查批准的施工图设计文件，如因委托方的原因需要部分变更后重审的，可视重审工作量按原审查咨询服务收费的30-60％收取重审咨询服务费",xs:"0.45"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>