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
				modalName:'sgtscfHei_tzxs',
				tzxsList: [
					{value:"施工图审查费调整系数默认为1",xs:"1"},
					{value:"勘察、设计两阶段需要单独签订审查合同的,勘察部分的收费应按整个项目审查收费的10%收取",xs:"0.1"},
					{value:"勘察、设计两阶段需要单独签订审查合同的,设计部分的收费应按整个项目审查收费的90%收取",xs:"0.9"},
					{value:"凡审查备案后的施工图,建设方需要对其工程功能、标准、规模、结构等內内容进行局部调整,由原施工图审查机构重新审查,重新审查费用根据重审工作量大小,按原审查收费的30~50%收取",xs:"0.4"},
					{value:"复查费用按标准收费额的50%收取",xs:"0.5"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>