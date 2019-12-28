<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">公路工程附加调整系数</view>
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
				modalName:'glgckcfGuo_fjtz',
				tzxsList:[
					{content:"默认系数",val:"1"},
					{content:"一次勘察-(按初、定测收费基价之和计算收费)",val:"0.8"},
					{content:"施工图阶段的补充定测（按定测收费基价计算收费）",val:"0.6"},
					{content:"正线长度在30公里以下的独立项目（按相应路段主线长度计算收费）",val:"1.5"},
					{content:"桥梁、隧道（附加调整系数：2~3）（按相应路段主线长度计算收费）",val:"2.5"},
					{content:"立体交叉|一般互通式（按相应路段主线长度计算收费）",val:"2"},
					{content:"立体交叉|枢纽型互通式（附加调整系数：3~4）（按相应路段主线长度计算收费）",val:"3.5"},
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