<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程地质测绘复杂程度</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt"
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
				modalName:'ytgcsjGuo_fzcd',
				dataList: [
					{
						title: '地基处理',
						list: [
							{
								content:'对地基基础变形无严格要求的建筑物，工程地质条件简单,地下水条件简单，对施工影响轻微',
								val:'I级',
							},
							{
								content:'对地基基础变形有一定要求的建筑物，工程地质条件较复杂,地下水条件较复杂，对施工影响较严重',
								val:'II级',
							},
							{
								content:'对地基基础变形有严格要求的建筑物，工程地质条件复杂,地下水条件复杂，对施工影响严重',
								val:'III级',
							}
						]
					},
					{
						title: '基坑支护',
						list: [
							{
								content:'基坑深度H≤6.0m,破坏后果不严重,工程地质条件简单,地下水条件简单,对施工影响轻微',
								val:'I级',
							},
							{
								content:'基坑深度6.0m<(H)<=12.0m,破坏后果严重破坏后果严重,工程地质条件较复杂,地下水条件较复杂,对施工影响较严重',
								val:'II级',
							},
							{
								content:'基坑深度H>12.0m,破坏后果很严重,工程地质条件复杂,地下水条件复杂,对施工影响严重',
								val:'III级',
							}
						]
					},
					{
						title: '施工降水',
						list: [
							{
								content:'外墙轴线内包面积(F)≤1000㎡,单层地下水，渗透系数0.5m/d<(K)≤20m/d,降水深度(S△)≤7.0m,对工程环境的影响无严格要求,辅助工程措施简单',
								val:'I级',
							},
							{
								content:'外墙轴线内包面积1000㎡<(F)≤2000㎡,双层地下水，渗透系数0.5m/d<(K)≤50m/d,降水深度7.0m<(S△)≤13.0m,对工程环境的影响有一定要求,辅助工程措施较复杂',
								val:'II级',
							},
							{
								content:'外墙轴线内包面积(F)>2000㎡,多层地下水，渗透系数(K)≤0.5m/d或者(K)>50m/d,降水深度(S△)>13.0m,对工程环境的影响有严格要求,辅助工程措施复杂',
								val:'III级',
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
			addClass(k) {
				this.isactive = k
			}
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