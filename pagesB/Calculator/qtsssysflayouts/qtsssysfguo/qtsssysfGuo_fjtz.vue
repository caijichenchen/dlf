<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程勘探附加调整系数</view>
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
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {modalMixin} from "@/common/base/modalMixin.js"
	
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
				modalName: 'qtsssysfGuo_fjtz',
				tzxsList:[
					{content:"默认系数为1",val:"1.0"},
					{content:"钻孔:跟管钻进、泥浆护壁、基岩无水干钻钻探、基岩破碎带钻进取芯",val:"1.5"},
					{content:"钻孔:水平孔、斜孔钻探",val:"2.0"},
					{content:"钻孔:坑道内作业",val:"1.3"},
					{content:"勘探、取样、原位测试:线路上作业",val:"1.3"},
					{content:"钻孔、取样、原位测试-水上作业-滨海",val:"3.0"},
					{content:"钻孔、取样、 原位测试-水上作业-湖、江、 河-水深（D）D≤10",val:"2.0"},
					{content:"钻孔、取样、  原位测试-水上作业-湖、江、  河-水深（D）10＜D≤ 20",val:"2.5"},
					{content:"钻孔、取样、 原位测试-水上作业-湖、江、河-水深（D）D＞20",val:"3.0"},
					{content:"钻孔、取样、 原位测试-水上作业-塘、沼泽地",val:"1.5"},
					{content:"钻孔、取样、原位测试-水上作业-积水区（含水稻田）",val:"1.2"},
					{content:"钻孔、取样:夜间作业（原位测试仅限于表3.3-4中序号1～6）",val:"1.2"},
					{content:"勘探、取样、原位测试:岩溶、洞穴、泥石流、滑坡、沙漠、山前洪积裙等复杂场地（复杂调整系数1.1～1.3，暂取中间值）",val:"1.2"},
					{content:"洞探:洞探标准断面为4m2,大于标准断面部分乘以0.6的附加调整系数，另行计算收费",val:"0.6"},
				],
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