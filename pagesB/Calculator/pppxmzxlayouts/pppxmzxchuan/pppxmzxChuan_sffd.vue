<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''" >
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">中设协字[2016]89号工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
									v-for="(item, index) in fjxsList" 
									:key="index" 
									@tap="assignment" 
									:data-val="item.xs"
									:data-key="index"
									>
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
			modalName: 'pppxmzxChuan_sffd',
			fjxs: '',
			fjxsList: [
				{value:" 项目PPP咨询服务期限为八个月，超时服务费在合同中另行明确，原则上不超过合同价的20%",xs:"20"},
				{value:" 需向省部及国家争取资金的，要求另做申报材料的，增加附加系数10%，且不高于5万元",xs:"10"},
			]
		};
	},
	methods: {
	},
	

};
</script>

<style>

</style>
