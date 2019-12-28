<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">行业调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1">
				<view  class="dlf-group" style="height: 490upx;">
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
			modalName: 'hjyxpjZang_hytzxs',
			fjxs: '',
			fjxsList: [
				{value:" 水利.水电.交通.矿产.黄金.铁道.管线运输.区域.印染.城镇环境基础设施.建材",xs:"1.3"},
				{value:" 化工.冶金.有色.旅游.纺织.轻工.医药.食品.民航",xs:"1.2"},
				{value:" 林业.畜牧.渔业.农业.市政.烟草",xs:"1.1"},
				{value:" 邮电.广播电视.机械.电子.勘探.社会服务.火电",xs:"1.0"},
				{value:" 粮食.建筑.信息产业.仓储",xs:"0.8"},
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
