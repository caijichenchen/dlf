<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-勘察复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view >
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, index) in item.itemlist" 
										:key="index" 
										@tap="assignment" 
										:data-val="i.val"
										:data-key="index"
										>
								<view class="rt" style="width: 87%; white-space: pre-wrap;">
									{{i.content}}
								</view>
								<span class="iconBLue font-mb px-1 lt" >
									{{i.val}}
								</span>
							</view>
						</view>
					</uni-collapse-item>
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
				modalName:'jzzssjsfGuo_blb',
				isactive: 0,
				show:true,
				dataList: [
					{
						title: '建筑装饰工程Ⅰ级',
						itemlist: [
							{
								content: '方案设计(%)',
								val: '50'
							},
							{
								content: '施工图设计(%)',
								val: '50'
							}
						]
					},
					{
						title: '建筑装饰工程Ⅱ级',
						itemlist: [
							{
								content: '概念设计(%)',
								val: '20'
							},
							{
								content: '方案设计(%)',
								val: '30'
							},
							{
								content: '初步设计(%)',
								val: '20'
							},
							{
								content: '施工图设计(%)',
								val: '30'
							},
						]
					},
					{
						title: '建筑装饰工程Ⅲ级',
						itemlist: [
							{
								content: '概念设计(%)',
								val: '20'
							},
							{
								content: '方案设计(%)',
								val: '30'
							},
							{
								content: '初步设计(%)',
								val: '25'
							},
							{
								content: '施工图设计(%)',
								val: '25'
							},
						]
					},
				]
			}
		},

		methods: {
			addClass(index){
				if(this.isactive == index){
					return
				}
				this.isactive = index
				this.show=!this.show
			}
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
		width: 30%;
		height: 100%;
		line-height: 2.5rem;
		margin-right: 1rem;
		border: 2upx solid #3788e4;
		border-bottom: none;
		border-radius: 6upx;
		word-break:break-all
	}
	.active {
		background: #3788e4;
		color: #fff;
	}
	
</style>