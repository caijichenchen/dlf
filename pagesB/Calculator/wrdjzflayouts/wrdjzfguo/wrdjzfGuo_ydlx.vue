<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">用海方式细分</view>
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
			modalName: 'wrdjzfGuo_ydlx',
			fzcd: '',
			fzcdList: [
				{
					name: '旅游娱乐用岛',
					data: [{ show: '用于游览、观光、娱乐、康体等旅游娱乐活动及相关设施建设的用岛' }]
				},
				{
					name: '交通运输用岛',
					data: [
						{ show: '用于港口码头 、路桥 、隧道 、机场 等交通运输设施及其附属设施建设的用岛' },
					]
				},
				{
					name: '工业仓储用岛',
					data: [
						{ show: '用于工业生产 、工业仓储 、等的用岛,包括船舶工业、电力工业等、盐业等' },
					]
				},
				{
					name: '渔业用岛',
					data: [{ show: '用于渔业生产活动及其附属设施建设的用岛' }]
				},
				{
					name: '农林牧业用岛',
					data: [
						{ show: '用于农、林、木业生产活动的用岛' },
					]
				},
				{
					name: '可再生能源用岛',
					data: [
						{ show: '用于风能、太阳能、海洋能、温差能等可再生能源设施建设的经营性用岛' },
					]
				},
				{
					name: '城乡建设用岛',
					data: [
						{ show: '用于城乡基础设施及配套设施等建设的用岛' },
					]
				},
			]
		};
	},
	methods: {
		changeval(e) {
			this.$emit('changepicker',e.currentTarget.dataset.key)
			this.modalName = null
		}
	},
	components: {
		uniCollapse,
		uniCollapseItem,
	},
};
</script>

<style>

</style>
