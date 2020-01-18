<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理费工程复杂程度专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, index) in item.list" 
										:key="index" 
										@tap="assignment" 
										:data-val="i.val"
										:data-key="index"
										data-index="index0"
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
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
					<view>1.不适合本表特征的工程项目，工程难度系数按1.00计算；</view>
					<view>2.当工程特征适用两个及以上难度系数时，取最大值。</view>
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
				modalName: 'jlfQian_fztz',
				CustomBar:this.CustomBar,
				dataList:[
					{
						title:"房屋建筑工程",
						list:[
							{content:"1.高度<24m的公共建筑和住宅工程;2.跨度<24m的厂房和仓储建筑;3.室外工程及简单的配套用房4.高度<70m的高耸构筑物",val:"I级" },
							{content:"1.24m≤高度<50m的公共建筑;2.24m≤跨度<36m的厂房和仓储建筑;3.高度>24m的住宅工程;4.仿古建筑、一般标准的古建筑、保护性建筑以及地下建筑工程;5.装饰、装修工程;6.防护级别为四级及以下的人防工程;7.70m≤高度",val:"II级" },
							{content:"1.高度>50m的公共建筑工程,或跨度>36m的厂房和仓储建筑工程;2.高标准的古建筑、保护性建筑;3.防护级别为四级以上的人防工程;4.高度>120m的高耸构筑物。",val:"III级" },
						],
					},
					{
						title:"市政基础设施工程",
						list:[
							{content:"1.DN<1.0m的给排水地下管线工程;2.小区内燃气管道工程;3.小区内供热管道工程,4.小型垃圾中转站,简易堆肥工程;5.人行天桥、涵洞工程;6.城市支路工程、过街天桥及地下通道工程;7.园林绿化工程",val:"I级" },
							{content:"1.≥DN1.0m的给排水地下管线工程;<3m3/s的给水、污水泵站;<10万吨/日给水厂工程,<5万吨/日污水处理厂工程;2.城市中、低压燃气管网(站),<1000m3液化气贮灌场(站);3.锅炉房,城市供热管网工程,>2Mw换热站工程;4.≥100吨/日的垃圾中转站,垃圾填埋场;5.城市道路、广场、停车场工程;6.城市次干路工程,城市分离式立交桥及单孔跨径100以下的桥梁;7.长度1000米以下的隧道工程",val:"II级" },
							{content:"1.≥3m3/s的给水、污水泵站;>10万吨/日给水厂工程,>5万吨/日污水处理厂工程;2.城市高压燃气管网(站),>10003液化气贮灌场(站);3.垃圾焚烧工程;4.城市快速路、主千道,城市互通式立交桥及单孔跨径100米以上桥梁;5.长度1000米以上的隧道工程；6.各类地铁轻轨工程。",val:"III级" },
						],
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
	.content{
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
	.bradius{
		border-radius: 20upx;
	}
	.dlfxs{
		width: 560upx;
		float: left;
		
	}
</style>