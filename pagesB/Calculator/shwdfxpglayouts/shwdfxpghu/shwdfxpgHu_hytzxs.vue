<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" @touchmove.stop.prevent="moveHandle">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">行业调整系数 </view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt border-b" 
									v-for="(item, index) in fjxsList" 
									:key="index" 
									@tap="assignment" 
									:data-val="item.xs"
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
			modalName: 'shwdfxpgHu_hytzxs',
			fjxs: '',
			fjxsList: [
				{value:" 环境设施、能源",xs:"1.2"},
				{value:" 工业、社会事业、交通运输、农业、其他",xs:"1.0"},
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
