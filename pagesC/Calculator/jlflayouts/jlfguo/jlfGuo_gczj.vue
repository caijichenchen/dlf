<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工监理服务收费的计费额</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class=" py-3">
				<view class="p-0 white-space mx-2 text-left font-md">（1） 施工监理服务收费以建设项目工程概算投资额分档定额计费方式收费的，其计费额为工程概算中的建筑安装工程费、设备购置费和联合试运转费之和，即工程概算投资额。对设备购置费和联合试运转费占工程概算投资额40%以上的工程项目，其建筑安装工程费全部计入计费额，设备购置费和联合试运转费按40%的比例计入计费额。但其计费额不应小于建筑安装工程费与其相同且设备购置费和联合试运转费等于工程概算投资额40%的工程项目的计费额。</view>
				<view class="p-0 white-space mx-2 text-left font-md">（2）工程中有利用原有设备并进行安装调试服务的，以签订工程监理合同时同类设备的当期价格作为施工监理服务收费的计费额；工程中有缓配设备的，应扣除签订工程监理合同时同类设备的当期价格作为施工监理服务收费的计费额；工程中有引进设备的，按照购进设备的离岸价格折换成人民币作为施工监理服务收费的计费额。</view>
				<view class="p-0 white-space mx-2 text-left font-md">（3）施工监理服务收费以建筑安装工程费分档定额计费方式收费的，其计费额为工程概算中的建筑安装工程费。</view>
				<view class="p-0 white-space mx-2 text-left font-md">（4）作为施工监理服务收费计费额的建设项目工程概算投资额或建筑安装工程费均指每个监理合同中约定的工程项目范围的投资额。</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data(){
			return {
				modalName:'jlfGuo_gczj'
			}
		}
		
	}
</script>

<style>
</style>