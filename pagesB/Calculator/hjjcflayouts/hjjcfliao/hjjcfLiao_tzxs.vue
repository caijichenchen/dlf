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
				modalName:'hjjcfLiao_tzxs',
				CustomBar:this.CustomBar,
				tzxsList: [
					{value:"委托方要求监测单位在国家法定节日进行监测的，在收费标准基础上加收一倍",xs:"2"},
					{value:"污染纠纷、事故仲裁、产品鉴定、验收监测，在收费标准基础上加收50％",xs:"1.5"},
					{value:"现场采样及现场测试->水质采样及测试: 夜间采样加收50％",xs:"1.5"},
					{value:"现场采样及现场测试->废气采样及测试: 烟道气或工艺尾气温度>150℃加收20％费用",xs:"1.2"},
					{value:" 现场采样及现场测试->废气采样及测试: 高空作业距地面5米以上加收20％费用",xs:"1.2"},
					{value:"现场采样及现场测试->废气采样及测试: 炉窑按风量折算，按同等吨位锅炉1.5倍收费",xs:"1.5"},
					{value:"现场采样及现场测试->废气采样及测试: 除尘效率测试按同等锅炉2倍收费",xs:"2"},
					{value:"现场采样及现场测试->废气采样及测试: 对放射性、有毒、有害工艺尾气，加收50％费用",xs:"1.5"},
					{value:"现场采样及现场测试->废气采样及测试: 废气排量测试，按同吨等位锅炉收费",xs:"1"},
					{value:"现场采样及现场测试->大气采样及测试: 采样1小时以上的项目按点、次、项收费标准2倍收费",xs:"2"},
					{value:"现场采样及现场测试->固体采样: 有毒、有害样品采样加收50％的费用",xs:"1.5"},
					{value:"物理监测收费->噪声: 夜间监测加收20％",xs:"1.5"},
					{value:"样品前处理收费: 样品有机分析项目≤3项时，按标准的2倍收费",xs:"2"},
					{value:"检测分析收费->理化检测: 使用标准中注明的大型仪器，样品总数少于10个加收50％",xs:"1.5"},
					{value:"检测分析收费->理化检测: 使用标准中注明的大型仪器，样品总数50个以上按收费标准的70％收费",xs:"0.7"},
					{value:"检测分析收费->理化检测: 样品有机分析项目≤3项时，按标准的2倍收费",xs:"2"}
				]
			}
		},
	}
</script>

<style >
	
	
</style>