<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">山西省监理收费附加调整系数</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt" 
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
			modalName: 'jlfJin_fjtz',
			fjxs: '',
			fjcdList: [
				{value:"单独委托工程质量控铜和履行建设工程安全生产管理法定职责的,监理服务费不宜低于按本计费规则计算的监理服务总费用",xs:"0.8"},
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>

.dlf-group {
	width: 100%;
	font-size: 30upx;
	text-align: left;
	border-left: 1upx solid #00a0e0;
	border-right: 1upx solid #00a0e0;
	border-top: 1upx solid #00a0e0;
}
.dlf-group .dlf-li {
	line-height: 45upx;
	padding: 10upx; 
	white-space: pre-line;
	border-bottom: 1upx solid #00a0ea;
}
.spbtn{
	display: inline-block;
	border-radius: 15upx;
}
</style>
