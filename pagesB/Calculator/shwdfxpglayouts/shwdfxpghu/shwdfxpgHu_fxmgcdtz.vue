<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">ppp项目咨询服务收费计算器收费浮动 </view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 436upx;">
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
			modalName: 'shwdfxpgHu_fxmgcdtz',
			fjxs: '',
			fjxsList: [
				{value:" 项目规划方案或环境影响评价公示后，项目前期已发生群众 集体上访等群体性事件的项目",xs:"1.2"},
				{value:" 项目规划方案或环境影响评价尚未公示，项目社会稳定风险 尚不确定的项目",xs:"1.0"},
				{value:" 项目规划方案或环境影响评价已公示，未发现重大社会稳定 风险隐患的项目",xs:"0.8"},
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
