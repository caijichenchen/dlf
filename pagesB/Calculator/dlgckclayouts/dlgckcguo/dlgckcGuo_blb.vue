<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-勘察复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="title-box">
				<view class="title"
						v-for="(item,index) in dataList"
						:key="index"
						:class="isactive === index ? 'active' : ''"
						@click="addClass(index)"
				>
					<view style="font-size: 0.5rem; color: #666;">{{item.title}}</view>
				</view>
			</view>
			<view class="lt">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt"
							v-for="(i,k) in dataList[isactive].itemlist"
							:key="k"
							@tap="assignment"
							:data-val="i.val"
					>
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{i.content}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{i.val}}
						</span>
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
				modalName:'dlgckcGuo_blb',
				isactive: 0,
				dataList: [
					{
						title: '火电工程',
						itemlist: [
							{
								content:'机组容量≥300MW，比例(%)',
								val:'15',
							},
							{
								content:'机组容量≤300MW，比例(%)',
								val:'17',
							},
						]
					},
					{
						title: '变电工程',
						itemlist: [
							{
								content:'电压等级≥300kv，比例(%)',
								val:'20',
							},
							{
								content:'电压等级<300kv，比例(%)',
								val:'23',
							},
						]
					},
					{
						title: '送电工程',
						itemlist: [
							{
								content:'电压等级≥300kv，比例(%)',
								val:'17',
							},
							{
								content:' 二阶段勘察(初步设计阶段勘察)',
								val:'40',
								introduction:'收集资料、调查情况、选定路由、疑点坑探等'
							},
							{
								content:'电压等级<300kv，比例(%)',
								val:'20',
							}
						]
					}
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(index) {
				this.isactive = index
			}
		}
	}
</script>

<style scoped>
	.title-box {
		width: 100%;
		height: 2.5rem;
		display: flex;
		padding-left: 0.3rem;
	}
	.title {
		width: 30%;
		height: 100%;
		line-height: 2.5rem;
		margin-right: 1rem;
		border: 2upx solid #3788e4;
		border-bottom: none;
		border-radius: 6upx;
		word-break:break-all
	}
	.active {
		background: #3788e4;
		color: #fff;
	}
	
</style>