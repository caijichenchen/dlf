<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
									v-for="(item, index) in tzxsList" 
									:key="index" 
									@tap="assignment" 
									:data-val="item.val"
									:data-key="index"
									>
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.content}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.val}}
							</span>
						</view>
					</view>
					<!-- <view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>附加调整系数为两个或两个以上的, 附加调整系数相加。</view>
					</view> -->
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
				modalName:'slsdqqgzkcfGuo_fjtz',
				tzxsList:[
					{content:"坝址比较(一个或一条,取值范围:0.7~1)",val:"0.85"},
					{content:"坝址比较(三个或三条,取值范围:1~1.3)",val:"1.15"},
					{content:"引水线路比较(两条以上、含两条,取值范围:1~1.2)",val:"1.1"},
					{content:"岩溶地区(岩溶地区勘察,取值范围:1~1.2)",val:"1.1"},
					{content:"河床覆盖层厚度(>60m,取值范围:1~1.1)",val:"1.05"},
					{content:"地震设防烈度(>=8度,取值范围:1.1~1.2)",val:"1.15"},
					{content:"高坝勘察(>=250m,取值范围:1~1.1)",val:"1.05"},
					{content:"深埋长隧道(埋深>1000m,长度>8km,取值范围:1~1.2)",val:"1.1"},
					{content:"线路勘察(两条以上,取值范围:1.05~1.5)",val:"1.275"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>