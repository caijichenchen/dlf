<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">设计收费专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer" accordion="true">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt border-b"
										v-for="(i, k) in item.list" 
										:key="k" 
										@tap="assignment" 
										:data-val="i.val"
										:data-key="k"
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
				modalName:'sjfGuo_zytz',
				dataList:[
					{
						title:"2.矿山采选工程",
						list:[
							{content:"黑色、黄金、化学、非金属及其他矿采选工程",val:"1.1" },
							{content:"采煤工程，有色、铀矿采选工程",val:"1.2" },
							{content:"选煤及其他煤炭工程",val:"1.3" },
						]
					},
					{
						title:"3.加工冶炼工程",
						list:[
							{content:"各类冷加工工程",val:"1.0" },
							{content:"船舶水工工程",val:"1.1" },
							{content:"各类冶炼、热加工、压力加工工程",val:"1.2" },
							{content:"核加工工程",val:"1.3" },
						]
					},
					{
						title:"4.石油化工工程",
						list:[
							{content:"石油、化工、石化、化纤、医药工程",val:"1.2" },
							{content:"核化工工程",val:"1.6" },
						]
					},
					{
						title:"5.水利电力工程",
						list:[
							{content:"风力发电、其他水利工程",val:"0.8" },
							{content:"火电工程",val:"1.0" },
							{content:"核电常规岛、水电、水库、送变电工程",val:"1.2" },
							{content:"核能工程",val:"1.6" },
						]
					},
					{
						title:"6.交通运输工程",
						list:[
							{content:"机场道路工程",val:"0.8" },
							{content:"公路、城市道路工程",val:"0.9" },
							{content:"机场空管和助航灯光、轻轨工程",val:"1.0" },
							{content:"水运、地铁、桥梁、隧道工程",val:"1.1" },
							{content:"索道工程",val:"1.3" },
						]
					},
					{
						title:"7.建筑市政工程",
						list:[
							{content:"邮政工艺工程",val:"0.8" },
							{content:"建筑、市政、电信工程",val:"1.0" },
							{content:"人防、园林绿化、广电工艺工程",val:"1.1" },
						]
					},
					{
						title:"8.农业林业工程",
						list:[
							{content:"农林工程",val:"0.9" },
							{content:"林业工程",val:"0.8" },
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

<style scoped>
	.content1{
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
	
</style>
