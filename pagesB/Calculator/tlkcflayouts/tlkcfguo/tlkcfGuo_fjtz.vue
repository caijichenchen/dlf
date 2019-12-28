<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">铁路工程附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
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
					<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>1.相应单价是指铁路工程勘察收费基价乘以附加调整系数后的单位收费价格；</view>
							<view>2.枢纽内的正线，一公里以上的联络线（包括干线与干线、干线与支线、专用线之间的联络线）、环到线、环发线、疏解线，一公里以上专用线的工程勘察，按照相应单价乘以线路长度计算收费；</view>
							<view>3. 枢纽内的大站（包括编组站、工业站、含客技站的客站），除贯通正线的工程勘察费外，加收相应单价乘以大站长度的2倍计算收费；</view>
							<view>4.枢纽内进出大站上、下行分开的疏解线，按照相应单价乘以上、下行线路长度之和计算收费；其他方向引入正线，环到线、环发线、疏解线，一公里以上联络线和专用线等在大站长度范围以内的部分，按照相应单价乘以线路长度的0.5倍计算收费；</view>
							<view> 5.枢纽内的勘察为独立复杂的技术设施，如机务段、车辆段、独立货场等，或者上述设施不在大站长度范围内的工程勘察，按照铁路工程勘察收费基价乘以基线长度的1～2倍计算收费。</view>
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
				modalName:'tlkcfGuo_fjtz',
				tzxsList:[
					{content:"默认系数",val:"1"},
					{content:"一次勘察-(按初、定测收费基价之和计算收费)",val:"0.8"},
					{content:"施工图阶段的补充定测（按定测收费基价计算收费）",val:"0.6"},
					{content:"新建双线",val:"1.1"},
					{content:"增建第二线",val:"1.0"},
					{content:"既有线（含电气化铁路）技术改造(系数范围0.6~0.9)|根据工作量计算收费",val:"0.75"},
					{content:"新建电气化单线铁路",val:"1.05"},
					{content:"新建电气化双线铁路",val:"1.15"},
					{content:"电气化铁路增建第二线",val:"1.05"},
					{content:"既有线技术改造并电化（附加系数范围0.8~1.05）|根据工作量计算收费",val:"0.925"},
					{content:"既有线现状电化",val:"0.7"},
					{content:"时速160～200公里的客运专线（不再考虑双线系数）",val:"1.3"},
					{content:"正线长度在30公里以下的独立项目（按相应单价计算收费）",val:"1.5"},
					{content:"永久碴场专用线",val:"1.0"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			
		}
	}
</script>

<style >
	
	
</style>