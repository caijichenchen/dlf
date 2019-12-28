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
				modalName:'dlgcqqgzkcfGuo_fjtz',
				isactive: 0,
				show:true,
				dataList: [
					{
						title: '火电工程',
						itemlist: [
							{
								content: '每增加一个灰场方案',
								val: '1.15'
							},
							{
								content: '每增加一个取水方案',
								val: '1.10'
							},
							{
								content: '灰坝高度超过30m',
								val: '1.05'
							},
							{
								content: '每增加一个厂（站）址方案',
								val: '1.40'
							},
							{
								content: '人工高边坡勘察',
								val: '1.10'
							},
							{
								content: '只考虑一个厂（站）址方案',
								val: '1.10'
							},
						]
					},
					{
						title: '变电工程',
						itemlist: [
							{
								content: '每增加一个厂（站）址方案',
								val: '1.40'
							},
							{
								content: '人工高边坡勘察',
								val: '1.10'
							},
							{
								content: '只考虑一个厂（站）址方案',
								val: '0.8'
							},
							{
								content: '直流换流站勘察',
								val: '1.80'
							},
							{
								content: '每增加一个变压器',
								val: '1.30'
							},
						]
					},
					{
						title: '送电工程',
						itemlist: [
							{
								content: '重冰区勘察',
								val: '1.20'
							},
							{
								content: '稳定性评价',
								val: '1.20'
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