<template>
	<!-- 模态框 -->

	<!-- 设计费 比例表 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程各阶段工作量比例信息表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer" accordion="true">
					<!-- 1.园林和景观设计I,Ⅱ级(无初步设计) -->
					<uni-collapse-item v-for="(item,index) in dataList" :key="index"  :title="item.title">
						<view class="border">
							<p class="p-2 border-bottom " v-for="(v,k) in item.list" :key="k" @tap="assignment" :data-val='v.val'><text>{{v.val}}</text> {{v.design}}(%)</p>
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
				modalName:'zsxzsjfszGuo_blb',
				// 内容列表
				dataList:[
					{
						title:"1.道路交通工程",
						list:[
							{val:'50',design:'初步设计'},
							{val:'50',design:'施工图设计'},
						]
					},
					{
						title:"2.给排水环境工程",
						list:[
							{val:'50',design:'初步设计'},
							{val:'50',design:'施工图设计'},
						]
					},
					{
						title:"3.燃气热力工程",
						list:[
							{val:'50',design:'初步设计'},
							{val:'50',design:'施工图设计'},
						]
					},
					{
						title:"4.城市轨道交通工程",
						list:[
							{val:'45',design:'初步设计'},
							{val:'55',design:'施工图设计'},
						]
					},
				]
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
