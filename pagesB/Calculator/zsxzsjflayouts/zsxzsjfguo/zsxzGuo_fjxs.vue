<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">中设协字[2016]89号工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<!-- <view class="dlf-group" v-for="(item, index) in fjxsList" :key="index" @tap="clickFjxs(index)">
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						<text style="word-break: break-all;">{{index+1}}:{{v.show}}</text>
						{{ index + 1 }}:{{ v.show }}
					</view>
				</view> -->
				<view  class="dlf-group">
					<view class="w-100 dlf-li font lt" 
					v-for="(item, index) in fjxsList" :key="index" >
						<view style="width: 595upx;white-space: pre-wrap;float: left;">
							{{item.value}}
						</view>
						<span class="text-blue lt">
							{{item.xs}}
						</span>
					</view>
				</view>
				<view class="my-2 ml-1 font text-left" style="white-space: pre-wrap;">
					注: 超大型建筑工程指80001平方米以上的单体建筑，大型建筑工程指20001-80000平方米的单体建筑，中型指5001-20000平方米的单体建筑，小型指5000&nbsp;平方米以下的单体建筑
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
			modalName: 'zsxzGuo_fjxs',
			fjxs: '',
			fjxsList: [
				{value:" 项目不符合下列任何一项的情况，附加系数默认的为0 ",xs:"0"},
				{value:"  1.总体设计 ",xs:"0.1"},
				{value:" 2.设计总包服务、主体设计协调 附加调整系数为0.1~0.2 ",xs:"0.15"},
				{value:"  3-1.绿色建筑设计一星",xs:"0.05"},
				{value:"  3-2.绿色建筑设计二星",xs:"0.15"},
				{value:"  3-3.绿色建筑设计三星",xs:"0.30"},
				{value:"  4.BIM技术设计 附加调整系数为0.2~0.5",xs:"0.35"},
				{value:"  5.被动式节能设计 附加调整系数为0.1~0.3",xs:"0.2"},
				{value:"  6.预制装配式设计 附加调整系数为0.1~0.3",xs:"0.2"},
				{value:"  7.建筑智能化设计 附加调整系数为0.1~0.35",xs:"0.225"},
				{value:"  8.编制施工招标技术文件",xs:"0.1"},
				{value:"  9.编制工程量清单 附加调整系数为0.06~0.1",xs:"0.08"},
				{value:"  10.编制施工图预算",xs:"0.1"},
				{value:"  11.建设过程第三方设计咨询 附加调整系数为0.1~0.3",xs:"0.2"},
				{value:"  12.编制竣工图",xs:"0.1"},
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
	padding: 10upx 0; 
	 /* word-wrap:break-word; word-break:break-all; */
	white-space: pre-line;
	border-bottom: 1upx solid #00a0ea;

	
}
</style>
