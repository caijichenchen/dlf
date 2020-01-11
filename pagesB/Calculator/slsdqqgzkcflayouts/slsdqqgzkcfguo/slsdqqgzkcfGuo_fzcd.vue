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
										data-index="index0"
										:data-key="k"
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
				modalName:'slsdqqgzkcfGuo_fzcd',
				isactive: 0,
				dataList: [
					{
						title: '水库、水电工程',
						list: [
							{
								val:'0.85',
								introduction:'赋分值之和≤-3'
							},
							{
								val:'1.0',
								introduction:'赋分值之和-3~10'
							},
							{
								val:'1.15',
								introduction:'赋分值之和≥10'
							}
						]
					},
					{
						title: '引调水建筑物工程',
						list: [
							{
								val:'0.85',
								introduction:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资≤30%'
							},
							{
								val:'1.0',
								introduction:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资≤60%'
							},
							{
								val:'1.15',
								introduction:'丘陵、山区、沙漠地区建筑物投资之和占全部建筑物的总投资>60%'
							}
						]
					},
					{
						title: '引调水渠道管线工程',
						list: [
							{
								val:'0.85',
								introduction:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的≤30%'
							},
							{
								val:'1.0',
								introduction:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的≤60%'
							},
							{
								val:'1.15',
								introduction:'丘陵、山区、沙漠地区渠道管线长度之和占总长度的>60%'
							}
						]
					},
					{
						title: '河道治理建筑物及河道堤防工程',
						list: [
							{
								val:'0.85',
								introduction:'堤防等级V级'
							},
							{
								val:'1.0',
								introduction:'堤防等级III、IV级'
							},
							{
								val:'1.15',
								introduction:'堤防等级I、II级'
							}
						]
					},
					{
						title: '其他',
						list: [
							{
								val:'1',
								introduction:'水土保持工程'
							},
						]
					},
				]
			}
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