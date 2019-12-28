<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">安徽省监理费工程复杂程度调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="lt">
							<view class="white-space text-left" >
								<p  v-for="(v,k) in item.list" :key="k"
								 @tap="assignment" :data-val="v.val" class="w-100 wupx font p-2 border-bottom border-blue lt mb-1">
									<view class="dlfxs lt">{{v.content}}</view>
									<text class="bg-blue p-1 rt bradius">{{v.val}}</text> </p>
							</view>
						</view>
					</uni-collapse-item>
						<view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view>
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
				modalName:'jlfWan_fztz',
				dataList:[
					{
						title:"房屋建筑工程",
						list:[
							{content:"普通工业厂房和物流、储备仓库工程 ",val:"0.90" },
							{content:"住宅工程",val:"1.0" },
							{content:"综合商业用房",val:"1.10" },
							{content:"按四星级及以上标准建设的酒店（含精装修）",val:"1.15" },
							{content:"大跨度钢结构建筑（体育场馆、文化场馆、会展中心等）",val:"1.25" },
							{content:"综合性医院",val:"1.15" },
							{content:"地下四层及以上或基坑深度≥18M",val:"1.20" },
							{content:"100M≤建筑高度＜200M",val:"1.20" },
							{content:"200M≤建筑高度＜300M",val:"1.30" },
							{content:"建筑高度≥300M",val:"1.35" },
							{content:"古建筑维修；古遗址修复；文物古迹维护",val:"1.40" },
						]
					},
					{
						title:"市政公用工程",
						list:[
							{content:"普通道路工程；人行天桥",val:"1.0" },
							{content:"城巿快速路；分离式立交桥；人行地下通道",val:"1.15" },
							{content:"互通式立交桥；地下選道；城市地铁、轻轨",val:"1.20" },
							{content:"单孔跨径≥100M的桥梁",val:"1.20" },
							{content:"单孔跨径≥200M的桥梁",val:"1.30" },
							{content:"长度＜1000M隧道工程",val:"1.20" },
							{content:"长度≥3000M隧道工程；连拱隧道；水底隧道；浅埋暗挖隧道；城市地铁",val:"1.30" },
							{content:"1000M≤长度＜3000M隧道工程；跨度≥12M的隧道工程",val:"1.20" },
							{content:"直径＜1M的管道工程",val:"0.9" },
							{content:"直径≥1M的管道工程；＜3M3/S的泵站；＜5万吨/日水厂（污水厂）工程",val:"1.0" },
							{content:"直径≥5M的管道工程；顶管工程；≥3M3/S的泵站；≥5万吨/日的给水厂或污水厂工程",val:"1.20" },
							{content:"园林工程；城巿广场",val:"0.9" },
							{content:"中低压燃气工程",val:"1.0" },
							{content:"垃圾中转站；垃圾填埋工程",val:"1.0" },
							{content:"垃圾中转站；液化储气站",val:"1.15" },
							{content:"垃圾焚烧",val:"1.20" },
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
	.bradius{
		border-radius: 20upx;
	}
	
</style>