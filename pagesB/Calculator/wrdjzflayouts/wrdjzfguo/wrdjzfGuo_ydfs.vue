<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">用岛方式</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						{{ v.show }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script> 
import { uniCollapse, uniCollapseItem } from '@dcloudio/uni-ui';
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
			modalName: 'wrdjzfGuo_ydfs',
			fzcd: '',
			fzcdList: [
				{
					name: '原生利用方式',
					data: [{ show: '底工程、特殊用海导的填海造地用海;城镇建设填海是指除工业、交通运输、渔业基础设施等填海以外的其他填海造地用海' }]
				},
				{
					name: '轻度利用方式',
					data: [
						{ show: '造成海岛自然岸线，表面积岛体和植被等要素发生改变，且变化率最高的指标符合以下任- 条件的用岛行为: 1)改变海岛自然岸线属性≤10%;2)改变海岛表面积≤10%;3)改变海岛岛体体积≤10%;4)破坏海岛植被≤10%' },
					]
				},
				{
					name: '中度利用方式',
					data: [
						{ show: '造成海岛自然岸线表面积、岛体和植被等要索发生改变，且变化率最高的指标符合以下任一条件的用岛行为: 1)改变海岛自然岸线属性> 10%且<30%;2)改变海岛表面积>10%且<30%;3)改变海岛岛体体积>10%且<30%;4)破坏海岛植被> 10%且<30%' },
					]
				},
				{
					name: '重度利用方式',
					data: [{ show: '造成海岛自然岸线、表面积、岛体和植被等要素发生改变,且变化率最高的指标符合以下任一条件的用岛行为: 1)改变海岛自然岸线属性≥30%且<65%;2)改变岛体表面积≥30%且<65%;3)改变海岛岛体体积≥30%且<65%;4)破坏海岛植被≥30%且<65%' }]
				},
				{
					name: '极度利用方式',
					data: [
						{ show: '造成海岛自然岸线、表面积岛体和植被等要素发生改变,且变化率最高的指标符合以下任一.条件的用岛行为: 1)改变海岛自然岸线属性≥65%;2)改变岛体表面积≥65%;3)改变海岛岛体体积≥65%;4)破坏海岛植被≥65%' },
					]
				},
				{
					name: '可再生能源用岛',
					data: [
						{ show: '用于风能、太阳能、海洋能、温差能等可再生能源设施建设的经营性用岛' },
					]
				},
				{
					name: '填海连岛与造成岛体消失的用岛',
					data: [
						{ show: '填海连岛与造成岛体消失的用岛' },
					]
				},
			]
		};
	},
	methods: {
	},
	components: {
		uniCollapse,
		uniCollapseItem,
	},
};
</script>

<style>

</style>
