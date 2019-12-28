<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">工程费用</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl m-1 white-space">
				<view>
					工程费用由建筑工程费、安装工程费和设备购置费三部分组成
				</view>
				<view>1.建筑工程费包括各种房屋和构筑物的建筑工程；各种室外管道铺设工程；总图竖向布置、大型土石方工程等。</view>
				<view>2.安装工程费包括各种机电设备、专用设备、仪器仪表等设备的安装及配线；工艺、供热、供水等各种管道、配件和闸门以及供电外线安装工程。</view>
				<view>3.设备购置费包括需要安装和不需要安装的全部设备购置费、备品备件购置费。</view>
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
			modalName: 'ldaqwspsGuo_gcfy',
			fjxs: '',
			
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
