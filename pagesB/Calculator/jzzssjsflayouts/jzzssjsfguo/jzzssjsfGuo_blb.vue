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
			<view class="lt">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt"
							v-for="(i,k) in dataList[isactive].itemlist"
							:key="k"
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