<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程各阶段工作量比例信息表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view>
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
									{{i.design}}
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
							{val:'50',design:'初步设计(%)'},
							{val:'50',design:'施工图设计(%)'},
						]
					},
					{
						title:"2.给排水环境工程",
						list:[
							{val:'50',design:'初步设计(%)'},
							{val:'50',design:'施工图设计(%)'},
						]
					},
					{
						title:"3.燃气热力工程",
						list:[
							{val:'50',design:'初步设计(%)'},
							{val:'50',design:'施工图设计(%)'},
						]
					},
					{
						title:"4.城市轨道交通工程",
						list:[
							{val:'45',design:'初步设计(%)'},
							{val:'55',design:'施工图设计(%)'},
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
