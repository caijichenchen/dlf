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
				modalName:'ytgcdzchfGuo_fzcd',
				dataList: [
					{
						title: '地质构造',
						list: [
							{
								content:'岩层产状水平或倾斜很缓',
								val:'简单',
							},
							{
								content:'有显著的褶皱、断层',
								val:'中等',
							},
							{
								content:'有复杂的褶皱、断层',
								val:'复杂',
							}
						]
					},
					{
						title: '岩层特征',
						list: [
							{
								content:'简单,露头良好',
								val:'简单',
							},
							{
								content:'变化不稳定，露头中等，有较复杂地质现象',
								val:'中等',
							},
							{
								content:'变化复杂，种类繁多，露头不良，有滑坡、岩溶等复杂地质现象',
								val:'复杂',
							}
						]
					},
					{
						title: '地形地貌',
						list: [
							{
								content:'地形平坦，植被不发育，易于通行',
								val:'简单',
							},
							{
								content:'地形起伏较大，河流、灌木较多，通行较困难',
								val:'中等',
							},
							{
								content:'峡谷山地，林木密集，水网、稻田、沼泽、通行困难',
								val:'复杂',
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