<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程设计收费专业调整系数</view>
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
				modalName:'zsxzsjfszGuo_zytz',
				dataList:[
					{
						title:"1.道路交通工程",
						list:[
							{content:"1. 城市道路工程 ",val:"1" },
							{content:"2. 桥梁隧道工程",val:"1.1" },
							{content:"3. 公共交通工程",val:"1.1" },
						]
					},
					{
						title:"2.给排水、环境工程",
						list:[
							{content:"1. 给排水、环境工程",val:"1" },
						]
					},
					{
						title:"3.燃气热力工程",
						list:[
							{content:"1. 燃气工程",val:"1.1" },
							{content:"2. 热力工程",val:"1" },
						]
					},
					{
						title:"4.城市轨道交通工程",
						list:[
							{content:"1. 城市轨道交通工程",val:"1.1" },
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
	.bradius{
		border-radius: 20upx;
	}
	
</style>