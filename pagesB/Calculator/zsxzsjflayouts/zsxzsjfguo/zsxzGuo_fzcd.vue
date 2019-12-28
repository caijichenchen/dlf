<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">中设协字[2016]89号工程复杂程度</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl border border-blue m-1">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" >
					<view class="ml-2 my-1 text-blue">{{ item.name }}</view>
					<view class="dlf-li ml-2 font" v-for="(v, index) in item.data" :key="index">
						<!-- <text style="word-break: break-all;">{{index+1}}:{{v.show}}</text> -->
						{{ index + 1 }}:{{ v.show }}
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
			modalName: 'zsxzGuo_fzcd',
			fzcd: '',
			fzcdList: [
				{
					name: '简单',
					data: [
						{ show: '6层及以下一般标准居住建筑工程（不含底商等其它功能）;' },
						{ show: '小型公共建筑工程小型公共建筑工程小型公共建筑工程小型公共建筑工程小型公共建筑工程小型公共建筑工程;' },
						{ show: '高度≤24米的公共建筑工程;' },
						{ show: '小型仓储建筑工程;' },
						{ show: '简单的设备用房及其他配套用房工程;' },
						{ show: '简单的建筑环境设计及室外工程;' },
						{ show: '相当于一星级饭店及以下标准的室内装修工程。' }
					]
				},
				{
					name:"一般",
					data:[
						{show:"7-18层一般标准的居住建筑工程及居住区建筑工程;"},
						{show:"中型公共建筑工程;"},
						{show:"功能和技术要求较复杂的小型公共建筑工程;"},
						{show:"24米＜高度≤50米的公共建筑工程;"},
						{show:"大中型仓储建筑工程;"},
						{show:"建筑面积≤1万平方米的附建地下工程;"},
						{show:"一般标准的建筑环境设计和室外工程;"},
						{show:"相当于二、三星级饭店标准的室内装修工程;"}
					]
				},
				{
					name:"复杂",
					data:[
						{show:"18层以上100米以下居住区建筑工程；"},
						{show:"别墅类、花园洋房等高标准居住建筑工程或综合功能的居住建筑工程;"},
						{show:"大型公共建筑工程;"},
						{show:"功能和技术要求复杂的中小型公共建筑工程;"},
						{show:"50米<高度≤100米的公共建筑工程；2万平方米<单体建筑面积≤8万平方米的公共建筑工程;"},
						{show:" 1万平方米＜建筑面积≤5万平方米的附建地下工程;"},
						{show:"高标准的建筑环境设计和室外工程;"},
					]
				},
				{
					name:"特别复杂",
					data:[
						{show:"高度﹥100米的超高层公共建筑和居住区建筑工程;"},
						{show:"超大型公共建筑工程;"},
						{show:"适用于国际性活动的大型公共建筑工程;"},
						{show:"功能和技术要求复杂的中小型公共建筑工程;"},
						{show:"功能和技术要求特别复杂的公共建筑工程;"},
						{show:" 工艺复杂或800床以上的医疗建筑工程，1600座以上剧院或包含两个及以上不同类型观演厅的综合文化建筑工程，5万平方米以上会议中心、航站楼、客运站，6000座以上体育馆，30000座以上体育场，超过五星级标准的酒店或度假村等公共建筑工程;"},
						{show:"抗震设防有特殊要求的建筑工程（隔震垫、阻尼器、消能装置等）；结构超限的建筑工程;"},
						{show:"超过五星级饭店室内装修、特殊声学装修"},
						{show:"建筑面积＞5万平方米的附建地下工程;"},
					]
				}
			]
		};
	},
	methods: {
		
	}
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
	/* width: 640upx; */
	/* height: 40upx; */
	line-height: 40upx;
	padding: 5upx 0; 
	 /* word-wrap:break-word; word-break:break-all; */
	white-space: pre-line;
	

	
}
</style>
