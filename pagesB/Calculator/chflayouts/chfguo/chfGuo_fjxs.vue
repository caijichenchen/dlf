<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">测绘费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
						   v-for="(item,index) in contentList" :key="index" @tap="assignment" :data-val="valList[index]">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{valList[index]}}
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
			chfGuo6: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				modalName:'chfGuo_fjxs',
			}
		},
		computed: {
			dataComputed: function() {
				return this.chfGuo6.split("&&&")
			},
			contentList: function() {
				return this.dataComputed[0].split("|")
			},
			valList: function() {
				return this.dataComputed[1].split("|")
			}
		}
	}
</script>

<style >
	
	
</style>