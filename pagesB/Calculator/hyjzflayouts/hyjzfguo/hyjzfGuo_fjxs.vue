<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">附加系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
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
				modalName:'hyjzfGuo_fjxs',
				tzxsList: [
					{value:"1.离大陆岸线最近距离2千米以上且最小水深大于5米(理论最低潮面)的离岸式填海，按照征收标准的80%征收;",xs:"0.8"},
					{value:"2.填海造地用海占用大陆自然岸线的，占用自然岸线的该宗填海按照征收标准的120%征收;",xs:"1.2"},
					{value:"3.建设人工鱼礁的透水构筑物用海，按照征收标准的80%征收;",xs:"0.8"},
					{value:"4.地方人民政府管辖海域以外的项目用海执行国家标准,海域等别按照毗邻最近行政区的等别确定。养殖用海标准按照毗邻最近行政区征收标准征收。",xs:"1.0"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		}
	}
</script>

<style >
	
	
</style>