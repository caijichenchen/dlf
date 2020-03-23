<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水利水电工程勘察收费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="num-wrap">
				<view class="num-wrap-li border-b"
					v-for="(item, index) in tzxsList" :key="index"  @tap="assignment" :data-val="item.val">
					<view class="li-left">{{item.content}}</view>
					<view class="li-right">
						<text class="num-box">{{item.val}}</text>
					</view>
				</view>
				<view class="text-left mx-1 my-1"></view>
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
				modalName:'slsdgckcGuo_fjtz',
				tzxsList:[
					{content:"坝址或坝线比较(一个或者一条)",val:"0.7"},
					{content:"坝址或坝线比较(三个或者三条)",val:"1.3"},
					{content:"引水线路比较(两条以上)",val:"1.20"},
					{content:"岩溶地区(岩溶地区勘察)",val:"1.2"},
					{content:"河床覆盖层厚度(>60m)",val:"1.1"},
					{content:"地震设防烈度(>=8度,取值范围:1.1~1.2)",val:"1.15"},
					{content:"高坝勘察(>=250m)",val:"1.1"},
					{content:"深埋长隧道(埋深>1000m,长度>8km)",val:"1.2"},
					{content:"线路勘察(两条以上,取值范围:1.05~1.5)",val:"1.275"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>