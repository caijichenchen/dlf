<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">火电、长输管道、铁路、公路工程勘察复杂程度赋分表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt" v-if="gclbindex == 0">
							<view class="w-100 dlf-li font lt"
										v-for="(i, k) in item.list" 
										:key="k" 
										@tap="getval" 
										:data-val="i.hval"
										:data-key="index"
										>
								<view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{i.content}}
								</view>
								<span class="spbtn text-white px-1 bg-blue rt" >
									{{i.text}}
								</span>
							</view>
						</view>
						<view class="dlf-group lt" v-else>
							<view class="w-100 dlf-li font lt"
										v-for="(i, k) in item.list" 
										:key="k" 
										@tap="getval" 
										:data-val="i.fval"
										:data-key="index"
										>
								<view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{i.content}}
								</view>
								<span class="spbtn text-white px-1 bg-blue rt" >
									{{i.text}}
								</span>
							</view>
						</view>
					</uni-collapse-item>
						<!-- <view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view> -->
						<button @tap="assignment" :data-val="lastval">计算</button>
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
			gclbindex: {
				type: Number,
				default: null
			},
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'dlgckcGuo_fzcd',
				key:0,
				resultval: [1,1,1,5,1],
				lastval: 9,
				dataList: [
					{
						title: '地形',
						list: [
							{
								content:'地形平坦或稍有坡度',
								text:'I级--分值：1(1/1)',
								hval: '1',
								fval: '1'
							},
							{
								content:'地形起伏小，高差在≤20m的缓丘地区',
								text:'II级--分值：3(3/3)',
								hval: '3',
								fval: '3'
							},
							{
								content:'地形起伏较大，高差在≤80m的重丘地区',
								text:'III级--分值：5(6/6)',
								hval: '6',
								fval: '6'
							},
							{
								content:'地形起伏变化大，高差在≤150m的山区',
								text:'IV级--分值：7(10/10)',
								hval: '10',
								fval: '10'
							},
							{
								content:'地势起伏变化很大，高差在＞150m的山区',
								text:'V级--分值：9(14/14)',
								hval: '14',
								fval: '14'
							},
						]
					},
					{
						title: '通视通行',
						list: [
							{
								content:'地区开阔，通视良好；通行方便的平原或草原',
								text:'I级--分值：1(1/10)',
								hval: '1',
								fval: '10'
							},
							{
								content:'高草、高农作物、树林、竹林隐蔽地区面积在≤20%；有部分杂草和低农作物或比高较小的梯田地区',
								text:'II级--分值：2(5/16)',
								hval: '5',
								fval: '16'
							},
							{
								content:'高草、高农作物、树林、竹林隐蔽地区面积≤40%；容易通过的沼泽水网、高差较大的梯田地区',
								text:'III级--分值：4(8/22)',
								hval: '8',
								fval: '22'
							},
							{
								content:'高草、高农作物、树林、竹林隐蔽地区面积≤50%；沙漠、较难通行的水网、沼泽、较深的冲沟、石峰石林及难于通行的岩石露头地区',
								text:'IV级--分值：6(12/28)',
								hval: '12',
								fval: '28'
							},
							{
								content:'高草、高农作物、树林、竹林隐蔽地区面积＞50%；岭谷险峻、地形切割剧烈、攀登艰难的山区、很难通行的沼泽、密集的荆刺灌木丛林区',
								text:'V级--分值：8(16/36)',
								hval: '16',
								fval: '36'
							},
						]
					},
					{
						title: '地物',
						list: [
							{
								content:'房屋、矿洞、地质勘探点（线）、沟坎、道路、水系、灌网及各种管线等面积≤5%',
								text:'I级--分值：1(1/1)',
								hval: '1',
								fval: '1'
							},
							{
								content:'房屋、矿洞、地质勘探点（线）、沟坎、道路、水系、灌网及各种管线等面积≤10%',
								text:'II级--分值：2(2/2)',
								hval: '2',
								fval: '2'
							},
							{
								content:'房屋、矿洞、地质勘探点（线）、沟坎、道路、水系、灌网及各种管线等面积≤25% ',
								text:'III级--分值：3(3/3)',
								hval: '3',
								fval: '3'
							},
							{
								content:'房屋、矿洞、地质勘探点（线）、沟坎、道路、水系、灌网及各种管线等面积≤40%',
								text:'IV级--分值：4(4/4)',
								hval: '4',
								fval: '4'
							},
							{
								content:'房屋、矿洞、地质勘探点（线）、沟坎、道路、水系、灌网及各种管线等面积>40%',
								text:'V级--分值：5(5/5)',
								hval: '5',
								fval: '5'
							},
						]
					},
					{
						title: '工程地质',
						list: [
							{
								content:'地质构造简单、地层岩性单一 （以Ⅰ类岩土为主）',
								text:'I级--分值：1(5/2)',
								hval: '5',
								fval: '2'
							},
							{
								content:'地质构造、地层岩性较简单，不良地质及特殊地质现象极少（以Ⅱ类岩土为主）',
								text:'II级--分值：3(15/5)',
								hval: '15',
								fval: '5'
							},
							{
								content:'地质构造、地层岩性较复杂，不良地质<br>现象较发育，特殊地质现象较多（以Ⅲ类岩土为主）',
								text:'III级--分值：5(25/8)',
								hval: '25',
								fval: '8'
							},
							{
								content:'地质构造复杂，地层岩性变化大，不良地质<br>现象发育，特殊地质现象多（以Ⅳ类岩土为主）',
								text:'IV级--分值：7(35/11)',
								hval: '35',
								fval: '11'
							},
							{
								content:'地质构造极复杂，地层岩性种类繁多，变化复杂，不良地质、<br>特殊地质现象规模大且复杂 （以Ⅴ类岩土为主）',
								text:'V级--分值：9(45/14)',
								hval: '45',
								fval: '14'
							},
						]
					},
					{
						title: '水文气象',
						list: [
							{
								content:'（基础资料齐全；水文情势简单）',
								text:'I级--分值：(1/1)',
								hval: '1',
								fval: '1'
							},
							{
								content:'（基础资料较齐全；水文情势较简单）',
								text:'II级--分值：(2/2)',
								hval: '2',
								fval: '2'
							},
							{
								content:'（基础资料年限短；水文情势较复杂）',
								text:'III级--分值：(3/3)',
								hval: '3',
								fval: '3'
							},
							{
								content:'地质构造复杂，地层岩性变化大，不良地质<br>现象发育，特殊地质现象多（以Ⅳ类岩土为主）',
								text:'IV级--分值：(4/4)',
								hval: '4',
								fval: '4'
							},
							{
								content:'（基础资料缺乏;水文情势极其复杂）',
								text:'V级--分值：(5/5)',
								hval: '5',
								fval: '5'
							},
						]
					}
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(k) {
				this.isactive = k
			},
			getval(e) {
				this.key = e.currentTarget.dataset.key
				var val = e.currentTarget.dataset.val
				this.resultval[this.key] = val
				function sum(arr){
					var fzval = 0
					for(var i = 0;i<arr.length;i++){
						fzval += parseFloat(arr[i])
					}
					return fzval
				}
				this.lastval = sum(this.resultval)
				console.log(this.lastval)
			}
		}
	}
</script>

<style >
	.activeclass {
		background-color: #007AFF;
		color: #fff;
	}
	.text {
		font-size: 20px;
		color: #007AFF;
	}
	.border-tlr{
		border-top: 1upx solid blue;
		border-left: 1upx solid blue;
		border-right: 1upx solid blue;
		padding: 8upx;
	}
</style>