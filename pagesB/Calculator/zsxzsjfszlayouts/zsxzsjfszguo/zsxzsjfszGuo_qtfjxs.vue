<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程设计其他服务成本附加系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
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
				<view class="lt font p-1 text-left" style="white-space: pre-wrap;">
					<view>注:</view>
						<view>1.总体设计”指初步设计之前，一些项目需要分步建设，发包人要求编制的总体设计（总体规划设计）。一般建设项目的总平面布置或总图设计不属于总体设计范畴。</view>
						<view>2．“设计总包服务”指设计人承担全部（含分包）设计管理责任，“主体设计协调”指建设项目由两个或者两个以上设计人承担时，发包人确定其中一个设计人承担主体设计协调服务，对设计的合理性和整体性负责。</view>
						<view>3.“设计总包服务”指设计人承担全部（含分包）设计管理责任，“主体设计协调”指建设项目由两个或者两个以上设计人承担时，发包人确定其中一个设计人承担主体设计协调服务，对设计的合理性和整体性负责。</view>
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
			modalName: 'zsxzsjfszGuo_fwxs',
			fjxs: '',
			fjcdList: [
				{value:"项目不符合下列任何一项的情况，附加调整系数默认的为0 ",xs:"0"},
				{value:"1.总体设计 ",xs:"0.075"},
				{value:"2.设计总包服务、主体设计协调 ",xs:"0.075"},
				{value:"3-1.利用设计成果 ",xs:"0.15"},
				{value:"3-2.利用BIM完成设计 ",xs:"0.075"},
				{value:"4.消防性能化设计 ",xs:"0.02"},
				{value:"5.绿色建筑（公共交通） ",xs:"0.02"},
				{value:"6.编制施工图预算 ",xs:"0.1"},
				{value:"7.编制竣工图 ",xs:"0.08"},
				{value:"8.单独编制工程设计方案 ",xs:"0.3"},
				{value:"9.1国内（设备）",xs:"0.12"},
				{value:"9.2国内（土建）",xs:"0.08"},
				{value:"9.3国际（设备）",xs:"0.08"},
				{value:"9.4国际（设备）",xs:"0.08"},
				{value:"9.5.控制价（含工程量清单） ",xs:"0.15"},
				{value:"9.6.控制价（在工程量清单基础上 ",xs:"0.08"},
				{value:"9.7.工程量清单 ",xs:"0.1"},
				{value:"10.建设过程第三方设计咨询 ",xs:"0.225"},
				{value:"11.复核设计 ",xs:"0.175"},
				{value:"12.新技术、新工艺 ",xs:"0.15"},
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
