<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">通信工程工作量比例表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view>
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view>
							<view class="white-space text-left" >
								<view v-for="(v,k) in item.list" 
									:key="'0'+k"
									class="font border-tlr mb-2 row"
									@click="addClass(k)"
									:class="isactive == k ? 'activeclass':''"
									>
									<view class="dlfxs lt">{{v.content}}</view>
								</view>
								<view class="wupx font p-2 border border-blue lt mb-1" @tap="assignment" :data-val="item.list[isactive].val" :key="isactive">
									<view class="val" >{{item.list[isactive].val}}</view><br/>
									<view>{{item.list[isactive].introduction}}</view>
								</view>
							</view>
						</view>
					</uni-collapse-item>
						<!-- <view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view> -->
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
				modalName:'txgckcfGuo_blb',
				isactive: 0,
				dataList: [
					{
						title: '通信管道及光（电）缆线路工程',
						list: [
							{
								content:' 一阶段勘察(%)',
								val:'80',
								introduction:'收集资料、调查情况、选定路由、现场测量、疑点坑探、测量定位、土壤PH值及大地电阻率分析等'
							},
							{
								content:' 二阶段勘察(初步设计阶段勘察)',
								val:'40',
								introduction:'收集资料、调查情况、选定路由、疑点坑探等'
							},
							{
								content:' 二阶段勘察(施工图设计阶段勘察)',
								val:'60',
								introduction:'收集资料、调查情况、选定路由、现场测量、疑点坑探、测量定位、土壤PH值及大地电阻率分析等'
							}
						]
					},
					{
						title: '微波、卫星及移动通信设备安装工程',
						list: [
							{
								content:' 一阶段勘察(%)',
								val:'80',
								introduction:'收集资料、调查情况、选定路由、高程测量、站址选择、干扰调查、划线定位等'
							},
							{
								content:' 二阶段勘察(初步设计阶段勘察)',
								val:'60',
								introduction:'收集资料、调查情况、选定路由、高程测量、站址选择、干扰调查等'
							},
							{
								content:' 二阶段勘察(施工图设计阶段勘察)',
								val:'40',
								introduction:'收集资料、调查情况、高程测量、划线定位等'
							}
						]
					}
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