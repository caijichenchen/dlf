<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理收费复杂调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="lt">
							<view class="white-space text-left" >
								<p  v-for="(v,k) in item.list" 
										:key="k"
										@tap="assignment" 
										:data-val="v.val" 
										class="wupx font p-2 border-bottom border-blue lt mb-1"
										>
									<view class="dlfxs lt">{{v.content}}</view>
									<text class="bg-blue p-1 rt bradius">{{v.val}}</text> </p>
							</view>
						</view>
					</uni-collapse-item>
						<!-- <view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view> -->
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
				modalName:'jlfMin_fztz',
				dataList:[
					{
						title:"建筑、人防工程",
						list:[
							{content:"1.高度＜24m的公共建筑和住宅工程  2.跨度＜24m的厂房和仓储建筑工程 3.室外工程及简单的配套用房 4.高度＜70m的高耸构筑物 ",val:"0.85" },
							{content:"1.24m≤高度＜50m的公共建筑工程 2.24m≤跨度＜36m的厂房和仓储建筑工程   3.高度≥24m的住宅工程 4.仿古建筑,一般标准的古建筑、保护性建筑以及地下建筑工程 5.装饰、装修工程 6.防护级別为四级及以下的人防工程 7.70m≤高度＜120m的高耸构筑物 ",val:"1.00" },
							{content:"1.高度≥50m的公共建筑工程,或跨度≥36m的厂房和仓储建筑工程 2.高标准的古建筑、保护性建筑  3.防护级別为四级以上的人防工程 4.高度≥120m的高耸构筑物 ",val:"1.15" },
						]
					},
					{
						title:"市政公用、园林绿化工程",
						list:[
							{content:"1.DN＜1.0m的给排水地下管线工程  2.小区内燃气管道工程 3.小区供热管网工程,＜2MW的小型换热站工程 4.小型垃圾屮转站,简易堆肥工程 ",val:"0.85" },
							{content:"1.DN≥1.0m的给排水地下管线工程;＜3m3/S的给水、污水泵站;＜10万吨/给水厂工程,＜5万吨/曰污水处理厂工程 2.城市中、低压燃气管网(站),＜1000m3,液化气贮罐场(站) 3.锅炉房,城市供热管网工程,≥2W换热站工程 4.≥100t/日的垃圾中转站,垃圾填埋工程 5.园林绿化工程 ",val:"1.0" },
							{content:"1.≥3m3/S的给水、污水泵站,≥10万吨/日给水厂工程,≥5万吨/7日污水处理厂工程2.城市高压燃气管网(站),≥100液化气贮罐场(站)3.垃圾焚烧工程4.海底排污管线.海水取排水、淡化及处理工程",val:"1.15" },
						]
					},
					{
						title:"公路、城市道路、轨道交通、索道工程",
						list:[
							{content:"1.三级、四级公路及相应的机电工程 2.一级公路、二级公路的机电工程 ",val:"0.85" },
							{content:"1.一级公路、二级公路2.高速公路的机电工程3.城市道路、广场、停车场工程",val:"1.0" },
							{content:"1.高速公路工程2.城市地铁、轻轨3.客(货)运索道工程",val:"1.15" },
						]
					},
					{
						title:"公路桥梁、城市桥梁和隧道工程",
						list:[
							{content:"1.总长＜1000m或单孔跨径＜150m的公路桥梁 2.长度100隧道工程 3.人行天桥、涵洞工程 ",val:"0.85" },
							{content:"1.总长≥1000m或150m≤单孔跨径＜250m的公路桥梁 2.1000m≤长度＜3000m的隧道工程 3.城市桥梁、分离式立交桥,地下通道工程 ",val:"1.0" },
							{content:"1.主跨≥250m拱桥,单跨≥250m预应力混凝土连续结构,≥400m斜拉桥,≥800m悬索桥 2.连拱隧道、水底隧道、长度≥3000m的隧道工程 3.城市互通式立交桥 ",val:"1.15" },
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

<style >
	
	
</style>