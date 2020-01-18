<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">工程类型调整系数表</view>
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
				modalName:'slsdqqgzkcfGuo_lxtz',
				CustomBar:this.CustomBar,
				tzxsList:[
					{content:"水电工程",val:"1.4"},
					{content:"潮汐发电工程",val:"1.7"},
					{content:"水库工程",val:"1.2"},
					{content:"水土保持工程",val:"0.61"},
					{content:"引调水工程、灌区骨干工程和河道治理工程(建筑物)",val:"1.08"},
					{content:"引调水工程、灌区骨干工程和河道治理工程(渠道管线、河道堤防)",val:"0.8"},
					{content:"城市防护工程、河口整治工程(建筑物)",val:"1.15"},
					{content:"城市防护工程、河口整治工程(其他工程)",val:"0.82"},
					{content:"围垦工程(建筑物)",val:"1.03"},
					{content:"围垦工程(其他工程)",val:"0.75"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>