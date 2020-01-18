<template>
	<!-- 设计费 复杂调整 模态框 -->
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">铁路设计费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1" v-if="index == 0">
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
			</view>
			<view class="padding-xl border border-blue m-1" v-else>
				<view class="dlf-group lt">
					<view class="w-100 dlf-li font lt border-b" 
					v-for="(item, index) in fjtzList" :key="index" @tap="assignment" :data-val="item.xs">
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
		}, // 弹框可见标志
		index: {
			type:Number,
			default: 0
		}
	},
	data() {
		return {
			modalName: 'tlsjGuo_fjtz',
			CustomBar:this.CustomBar,
			fjxs: '',
			fjcdList: [
				{value:"项目不符合下列任何一项的情况，附加调整默认的为1.0",xs:"1.0"},
				{value:"5.新建单线、双线、增建二线、既有线改造，同时进行电气化设计且有一个设计人设计的，设计收费=相应的线路设计收费+相应对的电气化设计收费×0.8",xs:"0.8"},
				{value:"6.既有铁路现状电气化设计（包括电气化设计及引起的土建改造）且由一个设计人设计的，设计收费＝相应的线路设计收费×0.6＋相应的电气化设计收费×0.8",xs:"0.6"},
				{value:"7-1.时速160～200km的客运专线（双线）设计,按照新建单线电气化铁路设计收费乘以1.3的系数计算收费 ",xs:"1.3"},
				{value:"7-2.时速160～200km的客运专线（双线）设计,电气化部分单独委托设计的，按照双线铁路电气化工程设计收费基价乘以1.1的系数计算收费",xs:"1.1"},
				{value:"8.新建、改建铁路引起支线、专用线改建部分，按照相应线路设计收费乘以0.6的系数计算收费",xs:"0.6"},
				{value:"9.线路设计长度＜30km，碴场专用线设计＜5km的，按照相应线路设计收费乘以1.5的系数计算收费",xs:"1.5"},
				{value:"10.单独委托新建双线及增建二线铁路通信信号设计的,按照单线铁路通信信号工程设计收费基价乘以1.5的系数计算收费",xs:"1.5"},
				{value:"11.单独委托线路通信信号设计的，其线路设计收费乘以0.92的系数计算收费",xs:"0.92"},
				{value:"12.铁路工程简化设计阶段的，大中型建设项目乘以0.85的系数计算设计收费，小型建设项目按照总则1.0.8规定的计费额，乘以2.5% 的收费率计算收费",xs:"0.85"},
				{value:"13.青海、新疆地区铁路设计，乘以1.1的系数计算收费。自然条件特别恶劣地区的设计，由发包人和设计人协商确定收费",xs:"1.1"},
			],
			fjtzList: [
				{
					value:'默认附加调整默认的为1.0',
					xs:'1.0'
				},
				{
					value:'铁路枢纽、单独委托特大桥或者长隧道设计的，按照相应方法计算收费，其中双线特大桥、长隧道按照本相应方法再乘以0.8的系数计算收费',
					xs:'0.8'
				}
			]
		};
	},
	methods: {
		
	},
	

};
</script>

<style>
</style>
