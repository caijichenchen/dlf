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
					<view class="w-100 dlf-li font lt">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{dataList[isactive].content}}
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
				modalName:'dzzhGuo_gcgmpgcdmj',
				isactive: 0,
				show:true,
				dataList: [
					{
						title: '线性工程',
						content: '评估长度L，单位：km;  (1)、L≤30，K＝1.0;  (2)、L＞30；K＝1+（L-30）/50'
					},
					{
						title: '矿山工程',
						content: '评估面积S，单位：km2； (1)、S≤5，K＝1.0； (2)、 S＞5；K＝1+（S-5）/10'
					},
					{
						title: '水利水电工程',
						content: '评估面积S，单位：km2； (1)、S≤15，K＝1.0；    (2)、 S＞15；K＝1+（S-15）/30'
					},
					{
						title: '工业与民用建筑工程',
						content: '评估面积S，单位：km2； (1)、 S≤1，K＝1.0；  (2)、S＞1，K＝1+（S-1）/2'
					}
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(index){
				if(this.isactive == index){
					return
				}
				this.isactive = index
				this.show=!this.show
			}
		},
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
		width: 20%;
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