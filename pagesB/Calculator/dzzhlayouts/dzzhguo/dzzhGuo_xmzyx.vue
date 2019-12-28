<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">地质灾害危害评估费建设项目重要性</view>
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
				modalName:'dzzhGuo_xmzyx',
				tzxsList:[
					{content:"开发区建设、城镇新区建设、放射性设施、军事设施、核电、二级（含）以上公路、铁路、机场、大型水利工程、电力工程、港口码头、矿山、集中供水水源地、工业建筑、民用建筑、垃圾处理场、水处理厂等",val:"重要建设项目"},
					{content:"新建村庄、三级（含）以下公路、中型水利工程、电力工程、港口码头、矿山、集中供水水源地、工业建筑、民用建筑、垃圾处理场、水处理厂等",val:"较重要建设项目"},
					{content:"小型水利工程、电力工程、港口码头、矿山、集中供水水源地、工业建筑、民用建筑、垃圾处理场、水处理厂等",val:"一般建设项目"},
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