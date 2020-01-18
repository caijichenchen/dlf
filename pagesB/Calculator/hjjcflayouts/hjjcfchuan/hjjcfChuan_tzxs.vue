<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">环境监测费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{item.xs}}
						</span>
					</view>
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
				modalName:'hjjcfChuan_tzxs',
				CustomBar:this.CustomBar,
				tzxsList: [
					{value:"外单位索取环境监测数据按所需用数据监测收费总和的10%收费",xs:"0.1"},
					{value:"编制快报、月报、季报、年报等环境质量报告的编制费按该报告所涉及的监测数据的监测收费总和的10%取",xs:"0.1"},
					{value:"当年监测数据按所需用数据监测收费总和的15%收取",xs:"0.15"},
					{value:"需提供环境监测报告的，环境监测报告编制费按采样费、分析费之和加收。数据型环境监测报告加收10-15%",xs:"1.125"},
					{value:"需提供环境监测报告的，环境监测报告编制费按采样费、分析费之和加收。评价型环境监测报告加收15-20%",xs:"1.175"},
					{value:"多媒体声像报告在收取编制费的同时需另加收20%的报告制作费",xs:"1.2"},
					{value:"污染事故、纠纷仲裁、技术成果鉴定、建设项目竣工环保验收监测，加收50%",xs:"1.5"},
					{value:"现场采样及现场测试->废气采样及测试: 对放射性、有毒、有害工艺尾气，加收50％费用",xs:"1.5"},
					{value:"现场采样及测试->排气筒（或烟道）废气采样测试:当烟道气或工艺尾气温度>150℃，加收20%费用",xs:"1.2"},
					{value:"现场采样及测试:在生产废气监测中，对放射、有毒、有害工艺尾气，加收50%费用",xs:"1.5"},
					{value:"现场采样及测试->水质采样:夜间采样加收50%",xs:"1.5"},
					{value:"现场采样及测试->水质采样->流量:>30米宽的工业废水的流量测试加倍收费",xs:"2"},
					{value:"现场采样及测试->水质采样->流量:>夜间测量加收20",xs:"1.2"},
					{value:"样品前处理:>复杂基体、痕量分析按上述标准200%收费",xs:"2"},
					{value:"样品前处理:>放射、剧毒、“三致”物按上述标准200%收费",xs:"2"},
					{value:"监测分析->理化检测:分析需使用标准注明的相应大型仪器的，样品总数少于（不含）10个时加收30%",xs:"1.3"},
					{value:"监测分析->理化检测:分析需使用标准注明的相应大型仪器的，样品总数50个样（不含50个）以上时，按收费标准的70%收取",xs:"0.7"},
					{value:"监测分析->理化检测:分析需使用标准注明的相应大型仪器的，样品总数100个样（不含100个）以上时，按收费标准的50%收取",xs:"0.5"},
					{value:"监测分析->理化检测:放射、剧毒、“三致”物按上述标准200%收费",xs:"2"},
					{value:"现场物理监测:夜间监测加收20%",xs:"1.2"}
				]
			}
		},
	}
</script>

<style >
	
	
</style>