<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">行业调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 607upx;">
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
			modalName: 'hjyxpjZhe_hytzxs',
			fjxs: '',
			fjxsList: [
				{value:" 化工、冶金、有色、黄金、煤炭、矿产、纺织、化纤、轻工、医药、区域",xs:"1.2"},
				{value:" 石化、石油天然气、水利、水电、旅游",xs:"1.1"},
				{value:" 林业、畜牧、渔业、农业、交通、铁道、民航、管线运输、建材、市政烟草、兵器",xs:"1.0"},
				{value:" 邮电、广播电视、航空、机械、船舶、航天、电子、勘探、社会服、火电 ",xs:"0.8"},
				{value:" 粮食、建筑、信息产业、仓储",xs:"0.6"},
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
