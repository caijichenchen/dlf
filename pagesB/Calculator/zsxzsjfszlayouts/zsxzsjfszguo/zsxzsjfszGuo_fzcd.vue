<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程复杂程度</view>
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
			modalName: 'zsxzsjfszGuo_fzcd',
			fzcd: '',
			ksList: [
				{
					title: '1.道路工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '街区及场区内部道路等。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '支路、次干路工程及附属工程。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '城市快速路工程、城市主干路、广场工程、停车场工程及附属工程。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1.汽车实验场工程；' },
								{ content: '2.城市智能交通工程。' },
							]
						},
					]
				},
				{
					title: '2.城市立交、桥梁、隧道工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '1．单孔跨径为5-20m或多孔跨径总长为8-30m(含30m)的桥梁；' },
								{ content: '2. 长度3km以内的敞开式隔声屏。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1．单孔跨径为20~40m(含20m)或多孔跨径总长为30~100m的桥梁；' },
								{ content: '2．简单城市立交桥、梁式结构的人行天桥、人形地下通道、涵洞工程；' },
								{ content: '3．长度大于3km的敞开式隔声屏；' },
								{ content: '4．长度≤500km或开挖跨度≤10的隧道工程。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．单孔跨径50米以上的预应力混凝土简支梁，跨径100米以上的预应力混凝土连续梁或刚构，跨度400米以下拱桥，跨度1000米以下斜拉桥，跨度1500米以下地锚式悬索桥，跨度300米以下自锚式悬索桥；' },
								{ content: '2．500m＜长度≤1000m或10 m ＜开挖跨度≤15m的隧道工程；' },
								{ content: '3．非梁式结构的人行天桥；' },
								{ content: '4．城市高架桥；' },
								{ content: '5．全苜蓿叶型、枢纽型等各类独立的互通式立体交叉工程；' },
								{ content: '6．封闭式隔声屏' }
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．跨度400米以上拱桥，跨度1000米以上斜拉桥，跨度1500米以上地锚式悬索桥，跨度300米以上自锚式悬索桥，以及不能归类为以上桥型的新型桥型；' },
								{ content: '2．现况桥梁拆除、维修加固工程；' },
								{ content: '3．长度＞1000m 或开挖跨度＞15m的隧道工程；' },
								{ content: '4．地质条件复杂隧道、水下隧道、大直径盾构隧道（管片外径大于10m）、浅埋暗挖隧道' },
							]
						}
					]
				},
				{
					title: '3.公共交通工程',
					list: [
						{
							level: 'I级',
							conList: [{ content: '独立公交站台。' }]
						},
						{
							level: 'II级',
							conList: [{ content: '面积≤6000m2的公交场站。' }]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．面积＞6000m2的公交场站； ' },
								{ content: '2．公共交通专用道、公交枢纽、城市综合客运交通枢纽（交通方式小于等于两种）。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．城市综合客运交通枢纽（交通方式大于两种）；' },
								{ content: '2．快速公交系统（BRT）。' },
							]
						},
					]
				},
				{
					title: '4.给排水工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '1．一般给水（含再生水）管线（DN≤0.15m，无管线交叉）工程；' },
								{ content: '2．一般排水地下管线（DN≤0.6m，无管线交叉）工程' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1．城区给水（含再生水）管线（DN≤0.15m，有管线交叉）；' },
								{ content: '2．城区排水管线，一般排水地下管线（DN≤0.6m，有管线交叉）工程；' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．大中型排水管线（DN＞0.6m）工程；大中型给水管线（DN＞0.15m）工程；' },
								{ content: '2．排水渠、涵；' },
								{ content: '3．泵站、地下调蓄池、水闸等构筑物' },
								{ content: '4．单舱综合管沟工程；' },
								{ content: '5．海绵城市、雨水收储设施。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．净水厂、污水处理厂、再生水处理厂、工业废水处理、污泥处理工程、海水淡化及水处理工程；' },
								{ content: '2．长距离超大型输配水管线（长度≥10.0Km 、管径≥2.4m）；' },
								{ content: '3．长距离超大型的排水管线（长度≥5.0Km、管径≥3.0m,）；' },
								{ content: '4．多舱综合管沟工程；' },
								{ content: '5．取水口（取水头部）工程。' }
							]
						}
					]
				},
				{
					title: '5.环境卫生工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '1．公厕及收集站；' },
								{ content: '2．≤150T/d小型垃圾转运站及收集站。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1．≤450T/d中型垃圾转运站（或分选）；' },
								{ content: '2．≤500T/d卫生填埋场；' },
								{ content: '3．一般工业固废。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．＞450T/d大型垃圾转运站（或分选）；' },
								{ content: '2．＞500T/d卫生填埋场；' },
								{ content: '3．垃圾及污泥生化处理厂；' },
								{ content: '4．粪便处理厂；' },
								{ content: '5．填埋气体收集利用工程；' },
								{ content: '6．环境修复工程（含土壤修复、填埋场封场、黑臭水体治理及流域环境综合整治等）；' },
								{ content: '7．电子垃圾资源化；' },
								{ content: '8．畜禽无害化处理；' },
								{ content: '9．建筑垃圾处理工程。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．废物协同性处置工程；' },
								{ content: '2．医疗废物及危险废物处理处置工程；' },
								{ content: '3．地下式垃圾转运站、处理处置工程；' },
								{ content: '4．餐厨垃圾等生物质处理工程；' },
								{ content: '5．垃圾焚烧处理工程；' },
								{ content: '6．垃圾全程分类、资源再利用工程。  ' }
							]
						}
					]
				},
				{
					title: '6.燃气工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '1．庭院户内燃气管道工程；' },
								{ content: '2．自然气化的燃气瓶组供应站工程。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1．小时流量≤30000m3调压站；' },
								{ content: '2．燃气中压管线；' },
								{ content: '3．≤20000户气化站、混气站；' },
								{ content: '4．≤500m³的储配站工程或总容积≤500m3LNG站。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．燃气高压管线；' },
								{ content: '2．大于20000户气化站、混气站；' },
								{ content: '3．大于500 m³且≤5000 m³的储配站或≤总容积5000m3LNG站；' },
								{ content: '4．≤500m燃气管线的穿、跨越工程；' },
								{ content: '5．门站，加气站；' },
								{ content: '6．小时流量大于30000m3调压站。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．大于5000m³的储配站或大于5000m3LNG站；' },
								{ content: '2．大于500m燃气管线的穿跨越工程；' },
								{ content: '3．LNG液化工厂。' }
							]
						}
					]
				},
				{
					title: '7.热力工程',
					list: [
						{
							level: 'I级',
							conList: [
								{ content: '平原区高差＜5m或坡降＜1/500、土壤水文地质条件一般的农业综合开发工程。' },
							]
						},
						{
							level: 'II级',
							conList: [
								{ content: '1．≤2MW的小型换热站工程；' },
								{ content: '2．DN≤400mm热水管道工程；' },
								{ content: '3．10t/h（7MW）及以下锅炉房。' },
							]
						},
						{
							level: 'III级',
							conList: [
								{ content: '1．>2MW的换热站工程；' },
								{ content: '2．DN≤400mm蒸汽管道工程；' },
								{ content: '3．400mm＜DN＜1200mm热水管道工程；' },
								{ content: '4．大于10t/h（7MV），小于等于20t/h（14MV）锅炉房；' },
								{ content: '5．穿、跨越管线。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '1．DN＞400mm蒸汽管道工程；' },
								{ content: '2．DN≥1200mm热水管道工程；' },
								{ content: '3．供热面积大于500万m2的加压泵站、中继能源站或隔压换热站工程；换热首站；' },
								{ content: '4．多热源联网工程；' },
								{ content: '5．蒸汽锅炉和热水锅炉合建的热源厂；' },
								{ content: '6．不同容量规模锅炉合建的热源厂；' },
								{ content: '7．大于20t/h（14MV）锅炉房。' }
							]
						}
					]
				},
				{
					title: '8.城市轨道交通工程',
					list: [
						{
							level: 'III级',
							conList: [
								{ content: '地铁工程、轻轨工程、单轨、有轨电车。' },
							]
						},
						{
							level: 'IV级',
							conList: [
								{ content: '磁浮工程。' }
							]
						}
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
