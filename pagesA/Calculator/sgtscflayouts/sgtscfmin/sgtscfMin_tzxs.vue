<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工图审查费调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.value}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.xs}}
							</span>
						</view>
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
				modalName:'sgtscfMin_tzxs',
				tzxsList: [
					{value:"施工图审查费调整系数默认为1",xs:"1"},
					{value:"国家和省重点建设工程的施工图审查收费按本通知规定的收费标准60%收取",xs:"0.6"},
					{value:"享受政府优惠政策的社会保障性住房(包括经济适用住房、廉租住房、拆迁安置房、限价商品住房项目等)按本通知规定的收费标准70%收取",xs:"0.7"},
					{value:"施工图审查过程中如发现问题，须进行局部设计整改的，再次送审不得另行收费;因其他客观原因导致施工图总量60%以上须进行设计整改的，可按本通知规定收费标准的50%另行收取",xs:"0.5"},
					{value:"复查费用按本通知规定的收费标准50%收取",xs:"0.5"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		}
	}
</script>

<style >
	
	
</style>