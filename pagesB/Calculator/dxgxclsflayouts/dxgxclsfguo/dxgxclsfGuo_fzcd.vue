<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-地下管线测量复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title" >
						<view class="dlf-group lt">
									<radio-group style="width:100%">
											<label class="w-100 dlf-li font lt" style="width:100%;display: flex;"
													v-for="(i, j) in item.list" 
													:key="j" 
													:data-val="i.val"
													:data-key="index"
													@click="radioChange" 
													:data-checked="j === i.current"
												>
													<view>
															<radio :value="i.val" :checked="j == 0" style="transform:scale(0.5)" />
													</view>
													<view class="lt" style="width: 87%; white-space: pre-wrap;" >
														{{i.content}} 
													</view>
													<span class="spbtn text-white px-1 bg-blue rt" style="width:60upx">
														{{i.name}}
													</span>
											</label>
									</radio-group>
						</view>
					</uni-collapse-item>
						<!-- <view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view> -->
						<button @tap="computeval" :data-val="lastval">计算</button>
				</uni-collapse>
			</view>
		</view>
	</view>
</template>

<script>
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
				modalName:'dxgxclsfGuo_fzcd',
				key:0,
				resultval: [1,1,1,1],
				lastval: 4,
				dataList: [
					{
						title: '地形',
						list: [
							{
								content:'平坦',
								name:'简单',
								val: '1',
								current:0
							},
							{
								content:'起伏不大',
								name:'中等',
								val: '2',
								current:1
							},
							{
								content:'高差大',
								name:'复杂',
								val: '3',
								current:2
							}
						]
					},
					{
						title: '障碍',
						list: [
							{
								content:'建筑物密度小',
								name:'简单',
								val: '1',
								current:0
							},
							{
								content:'建筑物密度中等',
								name:'中等',
								val: '2',
								current:1
							},
							{
								content:'建筑物密度大',
								name:'复杂',
								val: '3',
								current:2
							}
						]
					},
					{
						title: '种类',
						list: [
							{
								content:'1~3种',
								name:'简单',
								val: '1',
								current:0
							},
							{
								content:'4~5种',
								name:'中等',
								val: '2',
								current:1
							},
							{
								content:'>5种',
								name:'复杂',
								val: '3',
								current:2
							}
						]
					},
					{
						title: '定位点',
						list: [
							{
								content:'每km平均≤10点',
								name:'简单',
								val: '1',
								current:0
							},
							{
								content:'每km平均≤20点',
								name:'中等',
								val: '2',
								current:1
							},
							{
								content:'每km平均＞20点',
								name:'复杂',
								val: '3',
								current:2
							}
						]
					}
				]
			}
		},
		methods: {
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

<style >
	.activeclass {
		background-color: #007AFF;
		color: #fff;
	}
	.name {
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