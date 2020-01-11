<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">项目代建服务取费专业调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
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
				modalName:'xmdjfXiang_zytz',
				dataList:[
					{
						title:"一、交通运输工程 ",
						list:[
							{content:"民用机场工程",val:"1.1" },
							{content:"铁路、公路、城市道路、轻轨工程",val:"1.1" },
							{content:"水运、地铁、桥梁、隧道、索道工程",val:"1.2" },
						]
					},
					{
						title:"二、建筑市政工程 ",
						list:[
							{content:"园林绿化工程",val:"0.9" },
							{content:"建筑、人防、市政公用工程",val:"1.0" },
							{content:"邮政、电信、广播电视工程",val:"1.0" },
						]
					},
					{
						title:" 三、水利工程 ",
						list:[
							{content:"水库工程",val:"" },
							{content:"其他水利工程",val:"1.0" },
						]
					},
					{
						title:"四、能源工程 ",
						list:[
							{content:"风力发电",val:"1.0" },
							{content:"火电工程、送变电工程",val:"1.1" },
							{content:"水电、核电工程",val:"1.2" },
						]
					},
					{
						title:"五、农业林业工程 ",
						list:[
							{content:"农业工程",val:"1.0" },
							{content:"林业工程",val:"1.0" },
						]
					},
				]
			}
		},
		
	}
</script>

<style>
	.dlfxs{
		width: 90%;
	}
	text{
		border-radius: 25upx;
	}
	
</style>
