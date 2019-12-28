<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">地质环境条件复杂程度</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
									v-for="(item, index) in tzxsList" 
									:key="index" 
									@tap="assignment" 
									:data-val="item.val"
									:data-key="index"
									>
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.content}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.val}}
							</span>
						</view>
					</view>
					<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>每类5项条件中，有一条符合复杂条件者即划为复杂类型。</view>
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
				modalName:'dzzhGuo_fzcd',
				tzxsList:[
					{content:"1、地质灾害发育强烈 2、地形与地貌类型复杂 3、地质构造复杂，岩性岩相变化大，岩土体工程地质性质不良 4、工程地质、水文地质条件不良 5、破坏地质环境的人类工程活动强烈",val:"复杂"},
					{content:"1、地质灾害发育中等 2、地形较简单，地貌类型单一 3、地质构造较复杂，岩性岩相不稳定，岩土体工程地质性质较差 4、工程地质、水文地质条件较差 5、破坏地质环境的人类工程活动较强烈",val:"中等"},
					{content:"1、地质灾害一般不发育 2、地形简单，地貌类型单一 3、地质构造简单，岩性单一，岩土体工程地质性质良好 4、工程地质、水文地质条件良好 5、破坏地质环境的人类工程活动一般",val:"简单"}
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			
		}
	}
</script>

<style >
	
	
</style>