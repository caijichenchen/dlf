<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">
				<!-- <view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						{{ v.show }}
					</view>
				</view> -->
				<uni-collapse>
					<uni-collapse accordion="true">
						<uni-collapse-item v-for="(item, index) in ksList" :key="index"  :title="item.title">
							<view v-for="(v, k) in item.list" :key="k" class="border-bottom border-blue text-left font p-2 white-space"
							 @tap="assignment" :data-key="k"   :data-val="v.level">
								<span class="font-md">{{ v.level }}</span>
								<view v-for="(c, d) in v.conList" :key="d" class="font">{{ c.content }}</view>
							</view>
						</uni-collapse-item>
					</uni-collapse>
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
			fzcd: '',
			ksList: [
				{
					title: '建筑、人防工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '1.高度＜24m的公共建筑和住宅工程' },
								{ content: '2.跨度＜24m的厂房和仓储建筑工程。' },
								{ content: '3.室外工程及简单的配套用房。' },
								{ content: '4.高度<70m的高耸构筑物。。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1. 24m≤高度＜50m的公共建筑工程。' },
								{ content: '2.24m≤跨度＜36m厂房和仓储建筑工程;。' },
								{ content: '3.高度≥24m的住宅工程。' },
								{ content: '4.仿古建筑,一般标准的古建筑、保护性建筑以及地下建筑工程。' },
								{ content: '5.装饰、装修工程。' },
								{ content: '6. 防护级别为四级及以下的人防工程;。' },
								{ content: '7. 70m≤高度＜120m的高耸构筑。。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1. 高度≥50m的公共建筑工程,或跨度≥36m的厂房和仓储建筑工程' },
								{ content: '2.高标准的古建筑、保护性建筑' },
								{ content: '3.防护级别为四级以上的人防工程' },
								{ content: '	4. 高度≥120m的高耸构筑物' },
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
								{ content: '1.DN<1.0m的给排水地下管线工程' },
								{ content: '2.小区内燃气管道工程;。' },
								{ content: '3.小区供热管网工程,＜2MW的小型换热站工程。' },
								{ content: '4.小型垃圾中转站,简易堆肥工程。' },
								{ content: '	5.人行天桥、涵洞工程;。' },
								{ content: '6.城市支路工程、过街天桥及地下通道工程。' },
								{ content: '7.园林绿化工程。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1.DN≥1.0m的给排水地下管线工程;＜3m³/s的给水、污水泵站:＜10万吨/日给水厂工程给水,＜5万吨日污水处理厂工程' },
								{ content: '2.城市中、低压燃气管网(站),＜1000m3液化气贮灌场(站)' },
								{ content: '3.锅炉房,城市供热管理网工程,≥2MW换热站' },
								{ content: '4.≥100t日的垃圾中转站,垃圾填埋场' },
								{ content: '5.城市道路、广场、停车场工程' },
								{ content: '6.城市次干路工程,城市分离式立交桥及单孔跨径100米以下的桥梁' },
								{ content: '7.长度1000米以下的隧道工程' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1.≥3m³/s的给水、污水泵站;≥10万吨/日给水厂工程,≥5万吨/日污水处理工程' },
								{ content: '2.城市高压燃气管网(站),≥1000m³液化气贮灌场(站)' },
								{ content: '3.垃圾焚烧工程；' },
								{ content: '4.海底排污管线,海水取排水、淡化及处理工程' },
								{ content: '5.城市快速路、主干路,城市互通式立交桥及单孔跨径100米以上桥梁' },
								{ content: '6.长度1000米以上的隧道工程；' },
								{ content: '7.各类地铁轻轨工程。' },
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
