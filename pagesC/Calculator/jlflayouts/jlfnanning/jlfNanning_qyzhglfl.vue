<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">南宁市项目监理机构人员基本费用表(2016-2017年度)</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in fjcdList" :key="index" @tap="assignment" :data-val="item.xs">
						<view class="lt" style="width: 87%; white-space: pre-wrap;">
							{{item.value}}
						</view>
						<span class="spbtn text-white px-1 bg-blue rt" >
							{{item.xs}}
						</span>
					</view>
				</view>
				<!-- <view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
						<view>附加调整系数为两个或两个以上的, 附加调整系数相加。</view>
				</view> -->
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
			modalName: 'jlfNanning_qyzhglfl',
			fjxs: '',
			fjcdList: [
				{value:"综合资质企业40%-45%",xs:"42.5"},
				{value:"甲级资质企业35%-40%",xs:"37.5"},
				{value:"乙级资质企业30%-35%",xs:"32.5"},
				{value:"丙资质企业25%-30%，企业综合管理费根据项目大小、工程复杂程度和工程地离市区距离等取值)",xs:"32.5"},
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>
</style>
