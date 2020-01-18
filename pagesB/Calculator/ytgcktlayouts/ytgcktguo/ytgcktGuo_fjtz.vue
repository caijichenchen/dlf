<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程勘察收费附加调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group">
					<view class="w-100 dlf-li font lt border-b"
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs"> 
						<view style="width:87%;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt">
							{{item.xs}}
						</span>
					</view>
				</view>
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
						<view>附加调整系数为两个或两个以上时，附加调整系数不能连乘，将附加调整系数相加，减去附加调整系数的个数，加上定值1，作为附加系数值。</view>
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
			modalName: 'ytgcktGuo_fjtz',
			CustomBar:this.CustomBar,
			fjxs: '',
			fjxsList: [
				{value:"默认系数为1",xs:"1"},
				{value:"钻孔:跟管钻进、泥浆护壁、基岩无水干钻钻探、基岩破碎带钻进取芯",xs:"1.5"},
				{value:"钻孔:水平孔、斜孔钻探",xs:"2.0"},
				{value:"钻孔:坑道内作业",xs:"1.3"},
				{value:"勘探、取样、原位测试:线路上作业",xs:"1.3"},
				{value:"钻孔、取样、原位测试-水上作业-滨海",xs:"3.0"},
				{value:"钻孔、取样、 原位测试-水上作业-湖、江、 河-水深（D）D≤10",xs:"2.0"},
				{value:"钻孔、取样、  原位测试-水上作业-湖、江、  河-水深（D）10＜D≤ 20",xs:"2.5"},
				{value:"钻孔、取样、 原位测试-水上作业-湖、江、河-水深（D）D＞20",xs:"3.0"},
				{value:"钻孔、取样、 原位测试-水上作业-塘、沼泽地",xs:"1.5"},
				{value:"钻孔、取样、原位测试-水上作业-积水区（含水稻田）",xs:"1.2"},
				{value:"钻孔、取样:夜间作业（原位测试仅限于表3.3-4中序号1～6）",xs:"1.2"},
				{value:"勘探、取样、原位测试:岩溶、洞穴、泥石流、滑坡、沙漠、山前洪积裙等复杂场地（复杂调整系数1.1～1.3，暂取中间值）",xs:"1.2"},
				{value:"洞探:洞探标准断面为4m2,大于标准断面部分乘以0.6的附加调整系数，另行计算收费",xs:"0.6"},
			]
		};
	},
	methods: {
	},
	

};
</script>

<style>

</style>
