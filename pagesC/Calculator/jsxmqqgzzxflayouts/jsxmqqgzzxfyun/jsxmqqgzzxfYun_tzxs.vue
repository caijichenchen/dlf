<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">行业调整系数</view>
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
			modalName: 'jsxmqqgzzxfYun_tzxs',
			fjxs: '',
			fjxsList: [
				{value:" 1．石化、化工、钢铁 ",xs:"1.3"},
				{value:" 2．石油、天然气、水利、水电、交通(水运)、 化纤 ",xs:"1.2"},
				{value:" 3．有色、黄金、纺织、轻工、邮电、广播、  电视、 医药、煤炭、火电(含核电)、 机械 (含船舶、航空、航天、兵器)",xs:"1.0"},
				{value:" 4．林业、商业、粮食、建筑 ",xs:"0.8"},
				{value:" 5．建材、交通(公路)、铁道、市政公用工程",xs:"0.7"},
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
