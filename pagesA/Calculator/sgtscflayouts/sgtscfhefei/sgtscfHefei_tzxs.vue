<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工图审查费调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
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
	</view>
</template>

<script>
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'sgtscfHefei_tzxs',
				tzxsList: [
					{value:"施工图审查费调整系数默认为1",xs:"1"},
					{value:"整幢建筑物设计重复使用图，施工图审查服务费按本通知规定收费标准的50%收取",xs:"0.5"},
					{value:"施工图审查过程中如发现问题须进行设计整改的，再次送审不得另行收费，三次及以上整改的，施工图审查服务费按本通知规定收费标准的10%收取",xs:"0.1"},
					{value:"复查费用收取标准按本通知规定的50%执行",xs:"0.5"},
					{value:"对工程重新进行抗震、建抗节能、消防等修改的施工图审查,或对已使用的建抗物根据回家规定进行抗震加固、节能等改造的施工图审查均按上表审查费的30%40计费",xs:"0.35"},
					{value:"工业项目按50%收取,经济适用住房、农村学校的危改房工程按50%收取",xs:"0.5"},
				]
			}
		},
	}
</script>

<style >
	
	
</style>