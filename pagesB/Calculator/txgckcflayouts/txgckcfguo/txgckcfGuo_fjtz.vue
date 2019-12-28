<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">通信工程附加调整系数</view>
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
				modalName:'txgckcfGuo_fjtz',
				tzxsList:[
					{content:"默认系数为1",val:"1"},
					{content:"通信管道穿越桥、河及铁路的，穿越部分附加调整系数为1.2",val:"1.2"},
					{content:"长途架空光（电）缆线路工程利用原有杆路架设光（电）缆的，附加调整系数为0.8 ",val:"0.8"},
					{content:"微蜂窝基站工程勘察费按照移动通信基站的80%计算收费",val:"0.8"}
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