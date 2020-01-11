<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">园林和景观设计比例信息表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view >
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, index) in item.list" 
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
				modalName:'zsxzsjfylGuo_blb',
				dataList: [
					{
						title: '1.园林和景观设计I,Ⅱ级(无初步设计)',
						list: [
							{
								content:'方案设计(%)',
								val:'50',
							},
							{
								content:'施工图设计(%)',
								val:'50',
							}
						]
					},
					{
						title: '2.园林和景观设计I,Ⅱ级',
						list: [
							{
								content:'方案设计(%)',
								val:'30',
							},
							{
								content:'初步设计(%)',
								val:'20',
							},
							{
								content:'施工图设计(%)',
								val:'50',
							}
						]
					},
					{
						title: '3.园林和景观设计III,IV级',
						list: [
							{
								content:'方案设计(%)',
								val:'35',
							},
							{
								content:'初步设计(%)',
								val:'20',
							},
							{
								content:'施工图设计(%)',
								val:'45',
							}
						]
					}
				]
			}
		},
		
	}
</script>

<style>
</style>
