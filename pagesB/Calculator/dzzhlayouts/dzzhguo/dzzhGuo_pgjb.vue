<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">地质灾害危害评估费建设项目重要性</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="warp">
					<z-table :tableData='tableData' :columns='columns'></z-table>
			</view>
		</view>
	</view>
</template>

<script>
	import zTable from '@/components/z-table/z-table.vue';
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
				modalName:'dzzhGuo_pgjb',
				columns:[
					{
						title:"复杂程度</br>评估分级 项目重要性",
						key:"cd",
						width:370
					},
					{
						title:"复杂",
						key:"fz",
						width:100
					},
					{
						title:"中等",
						key:"zd",
						width:100
					},
					{
						title:"简单",
						key:"jd",
						width:100
					},
				],
				tableData:[
					{
						cd:"重要建设项目",
						fz:"一级",
						zd:"一级",
						jd:"一级"
					},
					{
						cd:"较重要建设项目",
						fz:"一级",
						zd:"二级",
						jd:"三级"
					},
					{
						cd:"一般建设项目",
						fz:"二级",
						zd:"三级",
						jd:"三级"
					},
				],
			}
		},
		components: {
			zTable,
		},
		methods: {
			
		}
	}
</script>

<style >
	
</style>