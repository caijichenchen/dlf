<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理费优质服务系数表</view>
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
								 @tap="assignment" :data-val="v.val" class="w-100 wupx font p-2 border-bottom border-blue lt mb-1">
									<view class="dlfxs lt">{{v.content}}</view>
									<text class="bg-blue p-1 rt bradius">{{v.val}}</text> </p>
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
				modalName:'jlfJilin_yzfwxs',
				dataList:[
					{
						title:"安会文明奖",
						list:[
							{content:"市级",val:"1.05" },
							{content:"省级",val:"1.1" },
							{content:"国级",val:"1.2" },
						]
					},
					{
						title:"工程质量奖",
						list:[
							{content:"市级",val:"1.1" },
							{content:"省级",val:"1.2" },
							{content:"国级",val:"1.3" },
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