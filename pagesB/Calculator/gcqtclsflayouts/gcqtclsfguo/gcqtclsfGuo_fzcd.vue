<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-勘察复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="title-box">
				<view class="title"
						v-for="(item,index) in dataList"
						:key="index"
						:class="isactive === index ? 'active' : ''"
						@click="addClass(index)"
				>
					<view style="font-size: 0.5rem; color: #666;">{{item.title}}</view>
				</view>
			</view>
			<view class="lt" v-if="show">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(m,k) in dataList[isactive].itemList" :key="k" :title="m.itemtitle">
						<view class="dlf-group lt">
							<radio-group style="width:100%">
									<label class="w-100 dlf-li font lt" style="width:100%;display: flex;"
											v-for="(i, j) in m.list" 
											:key="j" 
											:data-val="i.val"
											:data-key="k"
											@click="radioChange" 
										>
											<view>
													<radio :value="i.val" :checked="j == 0" style="transform:scale(0.5)" />
											</view>
											<view class="lt" style="width: 87%; white-space: pre-wrap;" >
												{{i.content}}---{{i.val}}
											</view>
											<span class="spbtn text-white px-1 bg-blue rt" style="width:60upx">
												{{i.name}}
											</span>
									</label>
							</radio-group>
						</view>
					</uni-collapse-item>
					<button @tap="computeval" :data-val="lastval">计算</button>
				</uni-collapse>
			</view>
			<view class="lt" v-else>
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt"
								v-for="(i, index) in dataList[isactive].itemList" 
								:key="index" 
								@tap="computeval" 
								:data-val="i.val"
								:data-key="index"
								>
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{i.content}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{i.name}}
						</span>
					</view>
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
				modalName:'gcqtclsfGuo_fzcd',
				key:0,
				resultval: [1,1,1,1],
				lastval: 4,
				isactive: 0,
				show:true,
				dataList: [
					{
						title: '一般地区',
						itemList:[
							{
								itemtitle: '地形',
								list: [
									{
										content: '起伏小或比高≤20m的平原',
										val: '1',
										name: '简单'
									},
									{
										content: '起伏大但有规律，或比高≤80m的丘陵地',
										val: '2',
										name: '中等'
									},
									{
										content: '起伏变化很大或比高＞80m的山地',
										val: '3',
										name: '复杂'
									},
								]
							},
							{
								itemtitle: '通视',
								list: [
									{
										content: '良好，隐蔽地区面积≤20%',
										val: '1',
										name: '简单'
									},
									{
										content: '一般，隐蔽地区面积≤40%',
										val: '2',
										name: '中等'
									},
									{
										content: '困难，隐蔽地区面积≤60%',
										val: '3',
										name: '复杂'
									},
								]
							},
							{
								itemtitle: '通行',
								list: [
									{
										content: '较好，植物低矮，比高较小的梯田地区',
										val: '1',
										name: '简单'
									},
									{
										content: '一般，植物较高，比高较大的梯田，容易通过的沼泽或稻田地区',
										val: '2',
										name: '中等'
									},
									{
										content: '困难，密集的树林或荆棘灌木丛林、竹林，难以通行的水网、稻田、沼泽、沙漠地，岭谷险峻、地形切割剧烈、攀登艰难的山区',
										val: '3',
										name: '复杂'
									},
								]
							},
							{
								itemtitle: '地物',
								list: [
									{
										content: '稀少',
										val: '1',
										name: '简单'
									},
									{
										content: '较少',
										val: '2',
										name: '中等'
									},
									{
										content: '较多',
										val: '3',
										name: '复杂'
									},
								]
							},
						]
					},
					{
						title: '建筑群区',
						itemList: [
							{
								content: '有一般地区特征,细部坐标点每格≤5；建筑物占图面积≤30%',
								val: '3',
								name: '简单'
							},
							{
								content: '有一般地区特征,细部坐标点每格≤8；建筑物占图面积≤50%',
								val: '8',
								name: '中等'
							},
							{
								content: '有一般地区特征,细部坐标点每格＞8；建筑物占图面积＞50%',
								val: '11',
								name: '复杂'
							},
						]
					},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(index){
				if(this.isactive == index){
					return
				}
				this.isactive = index
				this.show=!this.show
			},
			radioChange(e){
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
			},
		},
	}
</script>

<style scoped>
	.title-box {
		width: 100%;
		height: 2.5rem;
		display: flex;
		padding-left: 0.3rem;
	}
	.title {
		width: 20%;
		height: 100%;
		line-height: 2.5rem;
		margin-right: 1rem;
		border: 2upx solid #3788e4;
		border-bottom: none;
		border-radius: 6upx;
	}
	.active {
		background: #3788e4;
		color: #fff;
	}
	
</style>