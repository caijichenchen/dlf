<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">城市规划设计收费说明</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
									v-for="(item, index) in tzxsList" 
									:key="index"  
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
				modalName:'csghYue_ghlx',
				tzxsList:[
					// {content:"“区域总面积”按该市、县的行政区域面积计算",val:"区域总面积"},
					// {content:"省域、跨行政区的城镇体系规划收费，由承担方与委托方面议",val:"省域、跨行政区"},
					// {content:"规划期末城镇化水平可按《广东省城镇体系规划》预测值确定",val:"规划期末"},
					{content:"规划面积为经行政主管部门审批的规划末期的城市用地项目",val:"规划面积"},
					{content:"“非建设用地”为城市规划区内除建设用地以外的其余用地",val:"非建设用地"},
					{content:"“村镇总体规划”收费，参照本标准执行。",val:"村镇总体规划"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>