<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">设计收费专业调整系数</view>
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
			modalName: 'sjfGui_zytz',
			fjxs: '',
			fjcdList: [
				{value:"邮政工艺工程",xs:"0.8"},
				{value:"建筑、市政、电信工程",xs:"1.0"},
				{value:"人防、园林绿化、广电工艺工程",xs:"1.1"},
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
