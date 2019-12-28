<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">选择分类</view>
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
					<!-- <view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>附加调整系数为两个或两个以上的, 附加调整系数相加。</view>
					</view> -->
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
				modalName:'ybfGuo_category',
				tzxsList:[
					{content:"预备费包括基本预备费和价差预备费两部分",val:"预备费"},
					{content:"基本预备费:指在设计概算中难以预科的工程和费用，其中包括实行按施工图预算加系数包干的预算包干费用，其用途如下:一、在进行初步设计、技术设计、施工图设计和施工过程中，在批准的建设投资范围内所增加的工程和费用。二、由于一般自然灾害所造成的损失和预防自然灾害所采取的措施费用。三、在上级主管部门组织竣工验收时，验收委员会(或小组)为鉴定工程质量，必须开挖和修复隐蔽工程的费用。",val:"基本预备费"},
					{content:"价差预备费:指项目建设期间由于价格可能发生上涨而预留的费用",val:"价差预备费"}
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