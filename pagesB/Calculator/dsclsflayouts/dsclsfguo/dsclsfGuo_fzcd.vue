<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-洞室测量复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
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
				modalName:'dsclsfGuo_fzcd',
				key:0,
				resultval: [1.25,1.25,1.25],
				lastval: 3.75,
				dataList: [
					{
						title: '照明',
						list: [
							{
								content:'有充分照明',
								name:'简单',
								val: '1.25',
								current:0
							},
							{
								content:'有部分照明',
								name:'中等',
								val: '2.5',
								current:1
							},
							{
								content:'没有照明',
								name:'复杂',
								val: '3.75',
								current: 2
							}
						]
					},
					{
						title: '净空高',
						list: [
							{
								content:'洞室的净空高≥ 2.0 m',
								name:'简单',
								val: '1.25',
								current:0
							},
							{
								content:'洞室的净空高≥1.8 m',
								name:'中等',
								val: '2.5',
								current:1
							},
							{
								content:'洞室的净空高＜1.8 m',
								name:'复杂',
								val: '3.75',
								current:2
							}
						]
					},
					{
						title: '导线',
						list: [
							{
								content:'洞室导线平均边长≥15m',
								name:'简单',
								val: '1.25',
								current:0
							},
							{
								content:'洞室导线平均边长≥11m',
								name:'中等',
								val: '2.5',
								current:1
							},
							{
								content:'洞室导线平均边长＜11m',
								name:'复杂',
								val: '3.75',
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
				console.log(this.lastval)
			},
		}
	}
</script>

<style >
	.activeclass {
		background-color: #007AFF;
		color: #fff;
	}
	.val {
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