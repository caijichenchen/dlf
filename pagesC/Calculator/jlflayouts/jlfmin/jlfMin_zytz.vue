<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理收费专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="lt">
							<view class="white-space text-left" >
								<p  v-for="(v,k) in item.list" :key="k"
								 @tap="assignment" :data-val="v.val" class="wupx font p-2 border-bottom border-blue lt mb-1">
									<view class="dlfxs lt">{{v.content}}</view>
									<text class="bg-blue p-1 rt bradius">{{v.val}}</text> </p>
							</view>
						</view>
					</uni-collapse-item>
						<view class="lt font p-2 text-left" style="white-space: pre-wrap;">
							<view>注:</view>
								<view>1.其他不具备本表特征的工程项目，工程难度系数按 1.00 计算；</view>
								<view>2.当工程特征适用两个及以上难度系数时，取其中最大值。</view>
						</view>
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
				modalName:'jlfMin_zytz',
				dataList:[
					{
						title:"1.矿山采选工程",
						list:[
							{content:"黑色、有色、黄金、化学、非金属及其他矿采选工程 ",val:"0.90" },
							{content:"选煤及其他煤炭工程",val:"1.0" },
							{content:"矿井工程、铀矿采选工程",val:"1.10" },
						]
					},
					{
						title:"2.加工冶炼工程",
						list:[
							{content:"冶炼工程",val:"0.9" },
							{content:"船舶水工工程",val:"1.0" },
							{content:"各类加工工程",val:"1.0" },
							{content:"核加工工程",val:"1.2" },
						]
					},
					{
						title:"3.石油化工工程",
						list:[
							{content:"石油化工",val:"0.9" },
							{content:"化工、石化、化纤、医药工程",val:"1.0" },
							{content:"核化工工程",val:"1.2" },
						]
					},
					{
						title:"4.水利电力工程",
						list:[
							{content:"风力发电、其他水利工程",val:"0.9" },
							{content:"火电工程、送变电工程",val:"1.0" },
							{content:"核能、水电、水库工程",val:"1.2" },
						]
					},
					{
						title:"5.交通运输工程",
						list:[
							{content:"机场道路、助航灯光工程",val:"0.9" },
							{content:"铁路、公路、城市道路、轻轨及机场空管工程",val:"1.0" },
							{content:"水运、地铁、桥梁、隧道、索道工程",val:"1.1" },
						]
					},
					{
						title:"6.建筑市政工程",
						list:[
							{content:"园林绿化工程",val:"0.8" },
							{content:"建筑、人防、市政公用工程",val:"1.0" },
							{content:"邮电、电信、广播电视工程",val:"1.0" },
						]
					},
					{
						title:"7.农业林业工程",
						list:[
							{content:"农林工程",val:"0.9" },
							{content:"林业工程",val:"0.9" },
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

<style >
	
	
</style>