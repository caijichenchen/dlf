<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">设计收费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, k) in item.list" 
										:key="k" 
										@tap="assignment" 
										:data-val="i.val"
										:data-key="k"
										>
								<view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{i.content}}
								</view>
								<span class="spbtn text-white px-1 bg-blue rt" >
									{{i.val}}
								</span>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
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
				modalName:'sjfGuo_fjtz',
				dataList:[
					{
						title:"2.矿山采选工程",
						list:[
							{content:"其他无特别说明附加调整系数的，取值为1 ",val:"1" },
							{content:"III级选煤厂、水煤浆制备及燃烧应用工程，附加调整系数为1.4。",val:"1.4" },
						]
					},
					{
						title:"3.加工冶炼工程",
						list:[
							{content:"此节无说明的附加调整，取值为1",val:"1.0" },
							{content:"注：1.编制钢结构施工详图，按照钢结构出厂价格的2.5%计算收费；2.单独委托设备的基础设计，按照设备总价的2.5%计算收费",val:"1" },
						]
					},
					{
						title:"4.石油化工工程",
						list:[
							{content:"其他无特别说明附加调整系数的，取值为1",val:"1.0" },
							{content:"注：增加管段图设计的，附加调整系数为1.1。",val:"1.1" },
						]
					},
					{
						title:"5.水利电力工程",
						list:[
							{content:"其他无特别说明附加调整系数的，取值为1",val:"1.0" },
							{content:"注：1、水电工程可行性研究与初步设计阶段合并的，设计总工作量附加调整系数为1.1；2、水库和水电工程计费额包括水库淹没区处理补偿费和施工辅助工程费。",val:"1.1" },
							{content:"引调水渠道或管线、河道堤防工程附加调整系数为0.85；",val:"0.85" },
							{content:"灌区田间工程附加调整系数为0.25；",val:"0.25" },
							{content:"水土保持工程附加调整系数为0.7；",val:"0.7" },
							{content:"河道治理及引调水工程建筑物、构筑物工程附加调整系数为1.3。",val:"1.3" },
						]
					},
					{
						title:"6.交通运输工程",
						list:[
							{content:"其他无特别说明附加调整系数的，取值为1.0",val:"1.0" },
							{content:"I级工程 【三级、四级公路及交通安全设施、道班房工程】 ",val:"1.89" },
							{content:"III级工程 【1．高速公路、一级公路工程；2.高速公路、一级公路的交通安全设施、监控系统、通信系统、收费系统及管理养护、服务设3．城市主干路、快速路、城市地铁、轻轨、广场、停车场工程；4．客（货）运索道工程】中“序号1”高速公路、一级公路工程附加调整系数为0.61。",val:"0.61" },
							{content:"公路桥梁、隧道工程附加调整系数，I级 【1． 总长＜1000m，水深＜15m，单孔跨径为30～50m的预应力混凝土简支梁，30～50m的预应力混凝土连续箱梁等大桥工程；2．地质构造简单，长度＜500m的隧道工程】工程为2.0",val:"2.0" },
							{content:"公路桥梁、隧道工程附加调整系数，III级 【1．总长＞1000m，水深＞15m，单孔跨径为＞250m的预应力混凝土连续结构和钢筋混凝土拱桥，跨度400～1000m的斜拉桥、800～1500m的悬索桥等大桥工程；2．地质构造复杂，长度＞1000m的隧道工程；3．全苜蓿叶型、双喇叭型、枢纽型等各类独立的互通式立体交叉工程】工程为0.7",val:"0.7" },
							{content:"城市道路、桥梁、隧道通过地下管网密集区的，附加调整系数为1.1。",val:"1.1" },
						]
					},
					{
						title:"7.建筑市政工程",
						list:[
							{content:"古建筑、仿古建筑、保护性建筑等,根据具体情况，附加调整系数为1.3～1.6；",val:"1.45" },
							{content:"智能建筑弱电系统设计,以弱电系统的设计概算为计费额，附加调整系数为1.3；",val:"1.3" },
							{content:"室内装修设计,以室内装修的设计概算为计费额，附加调整系数为1.5；",val:"1.5" },
							{content:"特殊声学装修设计,以声学装修的设计概算为计费额，附加调整系数为2.0；",val:"2.0" },
						]
					},
					{
						title:"8.农业林业工程",
						list:[
							{content:"农林工程林业无特殊说明。附加调整系数取定为1.0",val:"1.0" },
						]
					},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		
	}
</script>

<style scoped>
	.content1{
		width: 83%;
		/* height: 70upx; */
		line-height: 70upx;
		white-space: pre-line;
	}
	.text{ 
		height: 0;
		line-height: 4upx;
		border-radius: 25upx;
		margin-top: 15upx;
		float: right;
	}
	.wupx{
		width: 690upx;
	}
	
</style>
