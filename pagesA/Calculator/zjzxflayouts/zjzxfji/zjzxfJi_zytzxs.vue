<template>
	<view class="cu-modal"  @touchmove.stop.prevent="moveHandle"  :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">造价咨询费专业调整系数</view>
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
				modalName:'zjzxfJi_zytzxs',
				tzxsList: [
					{value:"市政工程",xs:"0.8"},
					{value:"水利水电工程",xs:"0.9"},
					{value:"机场场道工程",xs:"0.7"},
					{value:"公路、道路工程",xs:"0.8"},
					{value:"城市轨道工程",xs:"0.8"},
					{value:"桥梁、隧道工程",xs:"0.7"},
					{value:"港口工程",xs:"0.8"},
					{value:"井巷矿山工程",xs:"1.1"},
					{value:"园林绿化工程",xs:"1.1"},
					{value:"装饰装修工程",xs:"1.2"},
					{value:"仿古建筑工程",xs:"1.2"},
					{value:"安装工程",xs:"1.2"},
					{value:"其他工程",xs:"1.0"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>