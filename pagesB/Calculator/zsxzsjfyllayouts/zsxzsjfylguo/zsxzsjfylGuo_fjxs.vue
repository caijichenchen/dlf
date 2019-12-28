<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">园林和景观设计附加系数信息表</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view  class="dlf-group lt">
					<view class="w-100 dlf-li font lt" 
					v-for="(item, index) in fjcdList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 88%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{item.xs}}
						</span>
					</view>
				</view>
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
						<view>1.发包人要求设计人提供附表三中所列的服务时，设计服务成本相应增加，“服务成本附加系数”反映了所增加成本与设计基本服务成本基数的比例关系，有区间值的系对不同服务内容、不同深度与复杂程度采集、分析的结果。</view>
						<view>2.“总体设计”指初步设计之前，一些项目需要分期建设、发包人要求编制的总体设计（总体规划设计）。一般建设项目的总平面或总图设计不属于总体设计范畴。</view>
						<view>3.“设计总包服务”指设计人承担全部（含分包）设计管理责任，“主体设计协调”指建设项目由两个或者两个以上设计人承担时，发包人确定其中一个设计人承担主体设计协调服务，对设计的合理性和整体性负责。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { modalMixin } from '@/common/base/modalMixin';
export default {
	mixins: [modalMixin],
	props: {
		showModalName: {
			type: String,
			default: null
		} // 弹框可见标志
	},
	data() {
		return {
			modalName: 'zsxzsjfylGuo_fjxs',
			fjxs: '',
			fjcdList: [
				{value:" 景观建筑、仿古建筑（系数范围：0.3 - 0.6） ",xs:"0.45"},
				{value:" 改扩建和综合整治项目（系数范围：0.3 - 0.6） ",xs:"0.45"},
				{value:" 总体设计 ",xs:"0.1"},
				{value:" 设计总包服务、主体设计协调（系数范围：0.1 - 0.2） ",xs:"0.15"},
				{value:" 编制施工图预算  ",xs:"0.1"},
				{value:" 编制工程竣工图   ",xs:"0.08"},
				{value:" 驻场配合服务 （系数范围：0.1 - 0.2） ",xs:"0.15"}, 
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>

.dlf-group {
	width: 100%;
	font-size: 30upx;
	text-align: left;
	border-left: 1upx solid #00a0e0;
	border-right: 1upx solid #00a0e0;
	border-top: 1upx solid #00a0e0;
}
.dlf-group .dlf-li {
	line-height: 45upx;
	padding: 10upx; 
	white-space: pre-line;
	border-bottom: 1upx solid #00a0ea;
}
.spbtn{
	display: inline-block;
	border-radius: 15upx;
}
</style>
