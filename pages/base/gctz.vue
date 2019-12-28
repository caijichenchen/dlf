<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">{{title}}高程调整系数</view>
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
						<view class="enter-box">
							<view class="contentself">4001m以上自定义</view>
							<input type="text" class="enter" v-model="gctzData">
							<button  @tap="assignment" :data-val="gctzData">确认</button>
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
	import {modalMixin} from "./modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
			title: {
				type: String,
				default: null
			},
			modalName: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				tzxsList:[
					{content:"2000米以下",val:"1.0"},
					{content:"2000~3000米",val:"1.1"},
					{content:"3001~3500米",val:"1.2"},
					{content:"3501~4000米",val:"1.3"}
				],
				gctzData: 1.4
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
	.enter-box {
		display: flex;
		flex-direction: row;
	}
	.contentself {
		width: 50%;
		height: 48upx;
		border: 1px solid #ccc;
		vertical-align: middle;
		text-align: center;
		border-right: none;
		background-color: #eee;
		font-size: 0.7rem;
		color: #555;
		border-radius: 4upx;
	}
	.enter {
		width: 50%;
		height: 48upx;
		border: 1px solid #ccc;
		border-radius: 8upx;
	}
</style>