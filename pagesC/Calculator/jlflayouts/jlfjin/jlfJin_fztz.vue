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
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, index) in item.list" 
										:key="index" 
										@tap="assignment" 
										:data-val="i.val"
										:data-key="index"
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
				modalName: 'jlfJin_fztz',
				CustomBar:this.CustomBar,
				dataList:[
					{
						title:"市政基础设施工程",
						list:[
							{content:"普通道路工程；人行天桥",val:"1.0" },
							{content:"住宅工程普通道路工程；人行天桥",val:"1.10" },
							{content:"互通式立交桥；地下通道；城市地铁、轻轨",val:"1.20" },
							{content:"单孔跨径≥100m 的桥梁",val:"1.20" },
							{content:"单孔跨径≥200m 的桥梁",val:"1.30" },
							{content:"长度＜1000m 的隧道工程",val:"1.10" },
							{content:"1000m≤长度＜3000m 隧道工程；跨度≥12m 隧道工程",val:"1.20" },
							{content:"长度≥3000m 隧道工程；连拱隧道、水底隧道；浅埋暗挖隧道",val:"1.30" },
							{content:"直径＜1m 的管道工程",val:"0.9" },
							{content:"直径≥1m 的管道工程；＜3m³ /s 的泵站；＜5 万吨/日水厂（污水厂）工程",val:"1.00" },
							{content:"埋深≥5m的管道工程；顶管工程；≥3m³/s的泵站；≥5 万吨/日水厂(污水厂)工程",val:"1.20" },
							{content:"园林工程、城市广场",val:"0.90" },
							{content:"古建筑",val:"1.10" },
							{content:"中低压燃气；小区供热工程",val:"1.00" },
							{content:"高压燃气管网；液化储气站",val:"1.15" },
							{content:"垃圾中转站；垃圾填埋工程",val:"1.00" },
							{content:"垃圾焚烧工程",val:"1.20" },
						],
					},
					{
						title:"房屋建筑工程难易程度系数",
						list:[
							{content:"普通厂房工程",val:"0.90" },
							{content:"住宅工程（不含精装）",val:"1.00" },
							{content:"住宅工程（含精装）",val:"1.20" },
							{content:"综合商业用房",val:"1.10" },
							{content:"按四星级及以上标准建设的酒店（含精装修）",val:"1.15" },
							{content:"大跨度钢结构建筑（体育场馆、文化场馆、会展中心等）",val:"1.25" },
							{content:"综合性医院",val:"1.15" },
							{content:"地下四层及以上或基坑深度≥18m",val:"1.20" },
							{content:"100m≤建筑高度＜200m",val:"1.20" },
							{content:"200m≤建筑高度＜300m",val:"1.30" },
							{content:"建筑高度≥300m",val:"1.35" },
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