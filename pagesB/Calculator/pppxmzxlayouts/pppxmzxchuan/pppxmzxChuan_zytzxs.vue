<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">ppp项目咨询服务收费计算器专业调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 424upx;">
					<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in fjxsList" :key="index"  @tap="assignment" :data-val="item.xs"> 
						<view style="width: 595upx;white-space: pre-wrap;float: left;">
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
			modalName: 'pppxmzxChuan_zytzxs',
			fjxs: '',
			fjxsList: [
				{value:" 专业领域数量1",xs:"1"},
				{value:" 专业领域数量2",xs:"1.4"},
				{value:" 专业领域数量3",xs:"1.6"},
				{value:" 专业领域数量4",xs:"1.8"},
				{value:" 专业领域数量5个及以上",xs:"2"},
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
