<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">环境影响行业调整系数</view>
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
			modalName: 'hjyxpjGuo_hytzxs',
			fjxs: '',
			fjxsList: [
				{value:" 化工、冶金、有色、黄金、煤炭、矿产、纺织、化纤、轻工、医药、区域 ",xs:"1.2"},
				{value:" 石化、石油天然气、水利、水电、旅游 ",xs:"1.1"},
				{value:" 林业、畜牧、渔业、农业、交通、铁道、民航、管线运输、建材、市政、烟草、兵器",xs:"1"},
				{value:" 邮电、广播电视、航空、机械、船舶、航天、电子、勘探、社会服务、火电",xs:"0.8"},
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

