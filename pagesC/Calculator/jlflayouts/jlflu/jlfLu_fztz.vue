<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">
				<uni-collapse accordion="true" animation="outer">
					<uni-collapse-item v-for="(item, index) in ksList" :key="index"  :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, index) in item.list" 
										:key="index" 
										@tap="assignment" 
										:data-val="i.level"
										:data-key="index"
										data-index="index0"
										>
								<view class="iconBLue fongt-mb" >
									{{i.level}}
								</view>
								<view v-for="(m,k) in i.conList" :key="'0'+k" class="lt" style="white-space: pre-wrap;">
									{{m}}
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	import { uniCollapse, uniCollapseItem } from '@dcloudio/uni-ui';
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
			modalName: 'jlfLu_fztz',
			CustomBar:this.CustomBar,
			fzcd: '',
			ksList: [
				{
					title: '建筑、人防工程',
					list: [
						{
							level: 'I级',
							conList: [
								'1.高度＜24m的公共建筑和住宅工程' ,
								'2.跨度＜24m的厂房和仓储建筑工程。' ,
								'3.室外工程及简单的配套用房。' ,
								'4.高度<70m的高耸构筑物。。' ,
							]
						},
						{
							level: 'II级',
							conList: [
								'1. 24m≤高度＜50m的公共建筑工程。' ,
								'2.24m≤跨度＜36m厂房和仓储建筑工程;。' ,
								'3.高度≥24m的住宅工程。' ,
								'4.仿古建筑,一般标准的古建筑、保护性建筑以及地下建筑工程。' ,
								'5.装饰、装修工程。' ,
								'6. 防护级别为四级及以下的人防工程;。' ,
								'7. 70m≤高度＜120m的高耸构筑。。' ,
							]
						},
						{
							level: 'III级',
							conList: [
								'1. 高度≥50m的公共建筑工程,或跨度≥36m的厂房和仓储建筑工程' ,
								'2.高标准的古建筑、保护性建筑' ,
								'3.防护级别为四级以上的人防工程' ,
								'	4. 高度≥120m的高耸构筑物' ,
							]
						},
					]
				},
				{
					title: '市政公用工程',
					list: [
						{
							level: 'I级',
							conList: [
								'1.DN<1.0m的给排水地下管线工程' ,
								'2.小区内燃气管道工程;。' ,
								'3.小区供热管网工程,＜2MW的小型换热站工程。' ,
								'4.小型垃圾中转站,简易堆肥工程。' ,
								'	5.人行天桥、涵洞工程;。' ,
								'6.城市支路工程、过街天桥及地下通道工程。' ,
								'7.园林绿化工程。' ,
							]
						},
						{
							level: 'II级',
							conList: [
								'1.DN≥1.0m的给排水地下管线工程;＜3m³/s的给水、污水泵站:＜10万吨/日给水厂工程给水,＜5万吨日污水处理厂工程' ,
								'2.城市中、低压燃气管网(站),＜1000m3液化气贮灌场(站)' ,
								'3.锅炉房,城市供热管理网工程,≥2MW换热站' ,
								'4.≥100t日的垃圾中转站,垃圾填埋场' ,
								'5.城市道路、广场、停车场工程' ,
								'6.城市次干路工程,城市分离式立交桥及单孔跨径100米以下的桥梁' ,
								'7.长度1000米以下的隧道工程' ,
							]
						},
						{
							level: 'III级',
							conList: [
								'1.≥3m³/s的给水、污水泵站;≥10万吨/日给水厂工程,≥5万吨/日污水处理工程' ,
								'2.城市高压燃气管网(站),≥1000m³液化气贮灌场(站)' ,
								'3.垃圾焚烧工程；' ,
								'4.海底排污管线,海水取排水、淡化及处理工程' ,
								'5.城市快速路、主干路,城市互通式立交桥及单孔跨径100米以上桥梁' ,
								'6.长度1000米以上的隧道工程；' ,
								'7.各类地铁轻轨工程。' ,
							]
						},
					]
				},
				
			
			]
		};
	},
	methods: {
		
	},
	components: {
		uniCollapse,
		uniCollapseItem,
	},
};
</script>

<style>

</style>
