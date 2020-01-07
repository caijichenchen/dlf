<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水库、水电和其它水利工程前期工作阶段勘察复杂程度调整系数表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view>
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view>
							<view class="white-space text-left" >
								<view class="wupx font p-2 border border-blue lt mb-1"
										v-for="(v,k) in item.list"
										@tap="assignment" 
										:data-val="v.val" 
										:key="k"
										>
									<view class="val" >{{v.val}}</view><br/>
									<view>{{v.introduction}}</view>
								</view>
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
				modalName:'slsdqqgzkcfGuo_blb',
				isactive: 0,
				dataList: [
					{
						title: '水库工程',
						list: [
							{
								val:'45',
								introduction:'项目建设书阶段（%）'
							},
							{
								val:'55',
								introduction:'可行性研究阶段（%）'
							}
						]
					},
					{
						title: '引调水工程；灌区骨干工程（支渠以上，下同）；河道治理工程；城市防护工程；河口整治工程；围垦工程(建筑物)',
						list: [
							{
								val:'38',
								introduction:'项目建设书阶段（%）'
							},
							{
								val:'62',
								introduction:'可行性研究阶段（%）'
							},
						]
					},
					{
						title: '引调水工程；灌区骨干工程（支渠以上，下同）；河道治理工程；城市防护工程；河口整治工程；围垦工程(渠道管线河道堤防)',
						list: [
							{
								val:'43',
								introduction:'项目建设书阶段（%）'
							},
							{
								val:'57',
								introduction:'可行性研究阶段（%）'
							}
						]
					},
					{
						title: '水土保持工程',
						list: [
							{
								val:'40',
								introduction:'项目建设书阶段（%）'
							},
							{
								val:'60',
								introduction:'可行性研究阶段（%）'
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
			addClass(k) {
				if(this.isactive == k){
					return
				}
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
		border-top: 1upx solid #00a0e0;
		border-left: 1upx solid #00a0e0;
		border-right: 1upx solid #00a0e0;
		padding: 22rpx 8rpx;
	}
</style>