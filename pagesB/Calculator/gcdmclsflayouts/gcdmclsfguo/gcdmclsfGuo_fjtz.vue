<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察附加调整系数</view>
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
				modalName:'gcdmclsfGuo_fjtz',
				tzxsList:[
					{content:"1.二、三、四等三角(边)不造标",val:"0.6"},
					{content:"2.连接原有三角点",val:"0.5"},
					{content:"3.房顶标志、墙上水准",val:"0.5"},
					{content:"4.三角高程",val:"1.2"},
					{content:"5.GPS测量C级、D级、E级不造标",val:"0.6"},
					{content:"6.建立施工方格网的导线点（收费基价为表2.2-2四等三角点）",val:"0.6"},
					{content:"7.检验施工方格网导线点的稳定性（收费基价为表2.2-2四等三角点）",val:"0.48"},
					{content:"8.航测、陆测地形图",val:"0.7"},
					{content:"9.汇水面积测量",val:"0.4"},
					{content:"10.带状地形测量（图面宽度＜20cm）",val:"1.3"},
					{content:"11.地形图修测",val:"1.1"},
					{content:"12.覆盖或隐蔽程度＞60%（系数为1.2~1.5）",val:"1.3"},
					{content:"13.绘制1:200大样图",val:"1.6"},
					{content:"14.数字化测绘",val:"1.5"},
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