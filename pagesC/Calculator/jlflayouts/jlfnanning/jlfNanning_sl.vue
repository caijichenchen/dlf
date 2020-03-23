<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">南宁市税金</view>
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
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
						<view>税金应按国家实际规定计取。营业税改增值税后，监理企业增值税率：一般纳税人按6%、小规模纳税人按3%考虑，加上附加税（城建税7%、教育附加费3%、地方教育附加2%、水利建设基金费0.1%)</view>
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
			modalName: 'jlfNanning_sl',
			fjxs: '',
			fjcdList: [
				{value:"一般纳税人",xs:"6.45"},
				{value:"小规模纳税人",xs:"3.36"},
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>
</style>
