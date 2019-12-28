<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工监理服务收费的计费额</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<view class="p-0 white-space mx-3 text-left font-md">1.计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置费和联合试运转费之和。</view>
				<view class="p-0 white-space mx-3 text-left font-md">2.建设单位如有必要将施工阶段某一部分工程（如基础工程、人防工程、精装饰工程、燃气工程、消防工程等）的工程监理业务单独委托给监理单位，则应以该分部工程的概算造价作为计费额计算相应监理服务费.</view>
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
				modalName:'jlfXiang_jfe'
			}
		}
		
	}
</script>

<style>
</style>