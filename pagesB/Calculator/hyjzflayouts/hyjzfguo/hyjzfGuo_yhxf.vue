<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">用海方式细分</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" style="border-bottom: 2rpx solid #00a0e0;">
					<view class="ml-2 my-1" style="white-space: normal;">{{ item.name }}</view>
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
			modalName: 'hyjzfGuo_yhxf',
			fzcd: '',
			fzcdList: [
				{
					name: '填海造地用海:指筑堤围割海咸填成土地:并形成有效岸线的用海',
				},
				{
					name: '构筑物用海:指采用透水或非透水等方式构筑海上各类设施的用海'
				},
				{
					name: '围海用海:指通过筑堤或其他手段,以完全或不完全闭合形式围割海域进行海洋开发活动的用海',
				},
				{
					name: '开放式用海:指不进行填海造地，围海或设构筑物，直接利用海域进行开发活动的用海 ',
				},
				{
					name: '其他用海:指上述用海方式之外的用海 ',
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
