<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理费工程复杂程度专业调整系数</view>
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
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
					<view>1.不适合本表特征的工程项目，工程难度系数按1.00计算；</view>
					<view>2.当工程特征适用两个及以上难度系数时，取最大值。</view>
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
				modalName:'jlfChuan_zytz',
				dataList:[
					{
						title:"2.矿山采选工程",
						list:[
							{content:"黑色、有色、黄金、化学、非金属及其他矿采选工程",val:"0.9" },
							{content:"选煤及其他煤炭工程",val:"1.0" },
							{content:"矿井工程、铀矿采选工程",val:"1.1" },
						],
					},
					{
						title:"3.加工冶炼工程",
						list:[
							{content:"冶炼工程",val:"0.9" },
							{content:"船舶水工工程",val:"1.0" },
							{content:"各类加工工程",val:"1.0" },
							{content:"核加工工程",val:"1.2" },
						],
					},
					{
						title:"4.石油化工工程",
						list:[
							{content:"石油工程",val:"0.9" },
							{content:"化工、石化、化纤、医药工程",val:"1.0" },
							{content:"核化工工程",val:"1.2" },
						],
					},
					{
						title:"5.水利电力工程",
						list:[
							{content:"风力发电、其他水利工程",val:"0.9" },
							{content:"火力工程、送变电工程",val:"1.0" },
							{content:"核能、水电、水库工程",val:"1.2" },
						],
					},
					{
						title:"6.交通运输工程",
						list:[
							{content:"机场道路、助航灯光工程",val:"0.9" },
							{content:"铁路、公路、城市道路、轻轨及机场空管工程",val:"1.0" },
							{content:"水运、地铁、桥梁、隧道、索道工程",val:"1.1" },
						],
					},
					{
						title:"7.建筑市政工程",
						list:[
							{content:"园林绿化工程",val:"0.8" },
							{content:"建筑、人防、市政公用工程",val:"1.0" },
							{content:"邮政、电信、广播电视工程",val:"1.0" },
						],
					},
					{
						title:"8.农业林业工程",
						list:[
							{content:"农林工程",val:"0.9" },
							{content:"林业工程",val:"0.9" },
						],
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

<style scoped>
	.content{
		width: 83%;
		/* height: 70upx; */
		line-height: 70upx;
		white-space: pre-line;
	}
	.text{ 
		height: 0;
		line-height: 4upx;
		border-radius: 25upx;
		margin-top: 15upx;
		float: right;
	}
	.wupx{
		width: 690upx;
	}
	.bradius{
		border-radius: 20upx;
	}
	.dlfxs{
		width: 560upx;
		float: left;
		
	}
</style>