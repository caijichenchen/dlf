<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">城市规划设计收费调整系数</view>
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
				modalName:'csghYue_tzxs',
				tzxsList:[
					// {content:"默认系数1",val:"1"},
					// {content:"1.规划期末城镇化水平（%）≤50",val:"1.0"},
					// {content:"2.规划期末城镇化水平（%） 51~60",val:"1.1"},
					// {content:"3．规划期末城镇化水平（%） 61~70",val:"1.3"},
					// {content:"4．规划期末城镇化水平（%） >70",val:"1.4"},
					{content:"“村镇总体规划”收费，参照本标准执行。",val:"1"},
					{content:"中心镇总体规划收费乘以1.3系数。",val:"1.3"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>