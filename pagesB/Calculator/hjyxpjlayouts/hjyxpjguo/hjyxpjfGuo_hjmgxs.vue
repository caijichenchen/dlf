<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">环境影响敏感程度调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in fjxsList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
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
			modalName: 'hjyxpjGuo_hjmgcdtz',
			fjxs: '',
			fjxsList: [
				{value:" 敏感 ",xs:"1.2"},
				{value:" 一般 ",xs:"0.8"},
			]
		};
	},
	methods: {
	},
	

};
</script>

<style>

</style>
