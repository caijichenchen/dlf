<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">招标代理费计算类别</view>
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
			modalName: 'zbdlfSu_category',
			fzcd: '',
			fzcdList: [
				{
					name: '工程招标',
					data: [{ show: '工程招标：各类土木工程、建筑工程、设备安装、管道线路敷设、装饰装修等建设以及附带服务的工程招标代理服务收费。' }]
				},
				{
					name: '货物招标',
					data: [
						{ show: '货物招标：原材料、产品、设备和固态、液态或气态物体和电力等货物及其附带服务的货物招标代理服务收费。' },
					]
				},
				{
					name: '服务招标',
					data: [
						{ show: '服务招标：工程勘察、设计、咨询、监理，矿业权、土地使用权出让、转让和保险等工程和货物以外的服务招标代理服务收费。' },
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
