<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">工程保险费比例系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 87upx;">
					<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs"> 
						<view style="width: 540upx;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="text-blue lt">
							{{item.xs}}
						</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { modalMixin } from '@/common/base/modalMixin';
export default {
	mixins: [modalMixin],
	props: {
		showModalName: {
			type: String,
			default: null
		} // 弹框可见标志
	},
	data() {
		return {
			modalName: 'gcbxfGuo_blxs',
			fjxs: '',
			fjxsList: [
				{value:" 保险费费率取值范围:0.3％～0.6%",xs:"0.0045"},
			]
		};
	},
	methods: {
		clickFjxs(e) {
			//点击隐藏
			console.log(e);
		}
	},
	

};
</script>

<style>

</style>
