<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">南宁市监理收费附加调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in fjcdList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{item.xs}}
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
			modalName: 'jlfNanning_fjtz',
			fjxs: '',
			fjcdList: [
				{value:"建设单位如果将保修阶段的监理相关服务连同工程监理一并委托给监理单位的，则应增加工程监理费的5％作为保修阶段监理服务的工程监理费用",xs:"1.05"},
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>


</style>
