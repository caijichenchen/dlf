<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">中设协字[2016]89号工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<!-- <view class="dlf-group" v-for="(item, index) in fjcdList" :key="index" @tap="clickFjxs(index)">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						<text style="word-break: break-all;">{{index+1}}:{{v.show}}</text>
						{{ index + 1 }}:{{ v.show }}
					</view>
				</view> -->
				<view  class="dlf-group">
					<view class="w-100 dlf-li font lt" 
					v-for="(item, index) in fjcdList" :key="index" >
						<view style="width: 595upx;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="text-blue lt">
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
			modalName: 'cbsjpsGuo_fjtz',
			fjxs: '',
			fjcdList: [
				{value:" 在评审过程中,初步设计方案有重大调整需要重新评审，评审取费标准在基准取费的基础上按1.1-1.3系数增加计取， ",xs:"1.2"},
			]
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
.dlf-group {
	width: 100%;
	/* padding: 20upx 30upx; */
	font-size: 30upx;
	text-align: left;
	/* margin: 5upx 5upx; */

	border-bottom: 1upx solid #00a0e0;
}
.dlf-group .dlf-li {
	/* width: 600upx; */
	/* height: 40upx; */
	line-height: 40upx;
	padding: 10upx; 
	 /* word-wrap:break-word; word-break:break-all; */
	white-space: pre-line;
	border-bottom: 1upx solid #00a0ea;

	
}
</style>
