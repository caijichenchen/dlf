<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">地质灾害评估收费工程类别调整系数</view>
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
				modalName:'dzzhGuo_gclbtzxs',
				dataList: [
					{
						title: '线性工程',
						list: [
							{
								content:'铁路（地铁）、高等级公路',
								val:'1.0',
							},
							{
								content:'一般公路、输水渠道',
								val:'0.8',
							},
							{
								content:'输油、输水、输气管线、光缆、输电线路',
								val:'0.6',
							}
						]
					},
					{
						title: '矿山工程',
						list: [
							{
								content:'地下采矿工程',
								val:'1.0',
							},
							{
								content:'露天转地下采矿工程',
								val:'0.8',
							},
							{
								content:'露天采矿工程',
								val:'0.6',
							}
						]
					},
					{
						title: '水利水电工程',
						list: [
							{
								content:'地下电厂水利水电工程',
								val:'1.0',
							},
							{
								content:'地表电厂水利水电工程',
								val:'0.9',
							},
							{
								content:'水利工程',
								val:'0.8',
							}
						]
					},
					{
						title: '工业与民用建筑工程',
						list: [
							{
								content:'工业厂房、民用住宅工程',
								val:'1.0',
							},
							{
								content:'其它场地及单跨场馆工程',
								val:'0.8',
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