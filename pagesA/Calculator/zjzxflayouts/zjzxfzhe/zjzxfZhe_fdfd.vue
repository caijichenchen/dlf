<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">造价咨询费浮动幅度</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.value}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.xs}}
							</span>
						</view>
					</view>
				</view>
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
				modalName:'zjzxfZhe_fdfd',
				tzxsList: [
					{value:"1、单独委托的装饰、安装、园林绿化及仿古建筑工程的基本费率可在上述基准收费标准的基础上上浮20%",xs:"120"},
					{value:"2、工程量清单编制或清单审核-根据设计图纸独立编制的按100%收费",xs:"100"},
					{value:"3、工程量清单编制或清单审核-独立编制并编制审核对照表的按110%收费",xs:"110"},
					{value:"4、工程量清单编制或清单审核-一般性重点审核按照40%收费",xs:"40"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>