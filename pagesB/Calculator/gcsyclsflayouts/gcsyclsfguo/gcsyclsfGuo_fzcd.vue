<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-水域测量复杂程度表</view>
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
				modalName:'gcsyclsfGuo_fzcd',
				key:0,
				resultval: [1,1,1,1],
				lastval: 4,
				dataList: [
					{
						title: '测线',
						list: [
							{
								content:'测线长≤300m或断面间距在图上＞3cm',
								name:'简单',
								val: '1'
							},
							{
								content:'测线长≤700m或断面间距在图上＞2cm',
								name:'中等',
								val: '2'
							},
							{
								content:'测线长＞700m或断面间距在图上≤2cm',
								name:'复杂',
								val: '3'
							}
						]
					},
					{
						title: '水域',
						list: [
							{
								content:'水深≤5m，无摸浅工作',
								name:'简单',
								val: '1'
							},
							{
								content:'水深≤15m，或浅滩、礁石较多，有摸浅工作',
								name:'中等',
								val: '2'
							},
							{
								content:'水深＞15m或在河泊封冻期作业，浅滩、礁石很多，摸浅工作多',
								name:'复杂',
								val: '3'
							}
						]
					},
					{
						title: '通视',
						list: [
							{
								content:'岸边开阔，通视良好',
								name:'简单',
								val: '1'
							},
							{
								content:'岸边建筑物、堆积物较少，有低于 1.5m的围墙及防汛堤，有部分防护林带',
								name:'中等',
								val: '2'
							},
							{
								content:'岸边建筑物、堆积物较多，有高于1.5m的围墙及防汛堤，有较密集的防护林带',
								name:'复杂',
								val: '3'
							}
						]
					},
					{
						title: '障碍',
						list: [
							{
								content:'来往船只较少',
								name:'简单',
								val: '1'
							},
							{
								content:'来往船只较多或测区内有停留的船、竹排、木排',
								name:'中等',
								val: '2'
							},
							{
								content:'来往船只频繁或测区内停泊的船、竹排、木排较多',
								name:'复杂',
								val: '3'
							}
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