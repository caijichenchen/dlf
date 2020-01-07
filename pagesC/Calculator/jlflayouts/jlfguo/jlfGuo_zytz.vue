<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理收费专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt">
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
								<view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{i.content}}
								</view>
								<span class="spbtn text-white px-1 bg-blue rt" >
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
				modalName:'jlfGuo_zytz',
				dataList: [
					{
						title: '1.矿山采选工程',
						list: [
							{
								content:' 黑色、有色、黄金、化学、非金属及其他矿采选工程',
								val:'0.9',
							},
							{
								content:'选煤及其他煤炭工程',
								val:'1.0',
							},
							{
								content:'矿井工程、铀矿采选工程',
								val:'1.1',
							}
						]
					},
					{
						title: '2.加工冶炼工程',
						list: [
							{
								content:'冶炼工程',
								val:'0.9',
							},
							{
								content:'船舶水工工程',
								val:'1.0',
							},
							{
								content:'各类加工工程',
								val:'1.0',
							},
							{
								content:'核加工工程',
								val:'1.2',
							}
						]
					},
					{
						title: '3.石油化工工程',
						list: [
							{
								content:'石油工程',
								val:'0.9',
							},
							{
								content:'化工、石化、化纤、医药工程',
								val:'1.0',
							},
							{
								content:'核化工工程',
								val:'1.2',
							}
						]
					},
					{
						title: '4.水利电力工程',
						list: [
							{
								content:'风力发电、其他水利工程',
								val:'0.9',
							},
							{
								content:'火力工程、送变电工程',
								val:'1.0',
							},
							{
								content:'核能、水电、水库工程',
								val:'1.2',
							}
						]
					},
					{
						title: '5.交通运输工程',
						list: [
							{
								content:'机场道路、助航灯光工程',
								val:'0.9',
							},
							{
								content:'铁路、公路、城市道路、轻轨及机场空管工程',
								val:'1.0',
							},
							{
								content:'水运、地铁、桥梁、隧道、索道工程',
								val:'1.1',
							}
						]
					},
					{
						title: '6.建筑市政工程',
						list: [
							{
								content:'园林绿化工程',
								val:'0.8',
							},
							{
								content:'建筑、人防、市政公用工程',
								val:'1.0',
							},
							{
								content:'邮政、电信、广播电视工程',
								val:'1.0',
							}
						]
					},
					{
						title: '7.农业林业工程',
						list: [
							{
								content:'农林工程',
								val:'0.9',
							},
							{
								content:'林业工程',
								val:'0.9',
							}
						]
					}
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(k) {
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
		border-top: 1upx solid blue;
		border-left: 1upx solid blue;
		border-right: 1upx solid blue;
		padding: 8upx;
	}
</style>