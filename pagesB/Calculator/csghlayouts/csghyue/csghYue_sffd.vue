<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">城市规划设计收费浮动比例系数</view>
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
				modalName:'csghYue_sffd',
				tzxsList:[
					// {content:"默认系数100",val:"100"},
					// {content:"概念规划：不同阶段的概念规划按照相应阶段规划收费标准的40%~60%计费",val:"50"},
					// {content:"景观规划：按照相应项目规划设计收费标准的30~40%收取",val:"30"},
					{content:"单独编制城市规划纲要，按总体规划收费标准的45%收费",val:"45"},
					{content:"城市设计-单独编制城市设计收费标准：总体规划按其相应规划设计收费标准的40%~50%收取",val:"45"}
				]
			}
		},
	}
</script>

<style >
	
	
</style>