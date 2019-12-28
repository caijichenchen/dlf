<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">建筑装饰设计相关工程的附加系数表</view>
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
				modalName:'jzzssjsfGuo_fztz',
				tzxsList:[
					{content:"建筑装饰设计",val:"1.5"},
					{content:"机电设备专业二次深化设计",val:"1.25"},
					{content:"室内家具、陈设艺术设计(深度为方案阶段)",val:"1.2"},
					{content:"建筑环境艺术照明设计",val:"1.25"},
					{content:"建筑外装饰设计(深度为方案阶段)",val:"1.1"},
					{content:"建筑标识系统(深度为方案阶段)",val:"1.1"},
					{content:"古建筑、仿古建筑、保护性建筑等",val:"1.45"},
					{content:"智能建筑弱电系统设计,以弱电系统设计概算为计费额",val:"1.3"},
					{content:"特殊声学装修设计,以声学装修的设计概算为计费额",val:"2.0"},
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