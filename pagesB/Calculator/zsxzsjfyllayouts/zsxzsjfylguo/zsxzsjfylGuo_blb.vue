<template>
	<!-- 模态框 -->

	<!-- 设计费 比例表 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">园林和景观设计比例信息表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer" accordion="true">
					<!-- 1.园林和景观设计I,Ⅱ级(无初步设计) -->
					<uni-collapse-item title="1.园林和景观设计I,Ⅱ级(无初步设计)">
						<view class="border ">
							<p class="p-2 border-bottom " @tap="assignment" data-val='50'><text>50</text> 方案设计(%)</p>
							<p class="p-2 "  @tap="assignment" data-val='50'><text>50</text> 施工图设计(%)</p>
						</view>
					</uni-collapse-item>
					<!-- 2.园林和景观设计I,Ⅱ级 -->
					<uni-collapse-item title="2.园林和景观设计I,Ⅱ级">
						<view class="border ">
							<p class="p-2 border-bottom " @tap="assignment" data-val='30'><text>30</text> 方案设计(%)</p>
							<p class="p-2 border-bottom " @tap="assignment" data-val='20'><text>20</text> 初步设计(%)</p>
							<p class="p-2 "  @tap="assignment" data-val='50'><text>50</text> 施工图设计(%)</p>
						</view>
					</uni-collapse-item>
					<!-- 3.园林和景观设计III,IV级 -->
					<uni-collapse-item title="3.园林和景观设计III,IV级">
						<view class="border ">
							<p class="p-2 border-bottom " @tap="assignment" data-val='35'><text>35</text> 方案设计(%)</p>
							<p class="p-2 border-bottom " @tap="assignment" data-val='20'><text>20</text> 初步设计(%)</p>
							<p class="p-2 "  @tap="assignment" data-val='45'><text>45</text> 施工图设计(%)</p>
						</view>
					</uni-collapse-item>
					
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
				modalName:'zsxzsjfylGuo_blb'
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		
	}
</script>

<style>
	uni-collapse-item{
		text-align: left;
	}
	uni-collapse-item .border{
		text-align: center;
	}
</style>
