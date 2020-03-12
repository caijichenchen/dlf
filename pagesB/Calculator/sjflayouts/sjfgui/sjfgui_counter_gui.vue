<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西工程勘察设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="picker m-left" v-model="needVal.sjfGui_standard">
						桂建标[2018]37号
					</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.sjfGui_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="digit" v-model="needVal.sjfGui_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfGui_zytz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="sjfGui_fzcd">
					<view class="picker">
						{{sjfGui_fzcd[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfGui_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.sjfGui_fjtz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfGui_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sjfGui_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>

		<!-- <sjf-gui-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-blb> -->
		<sjf-gui-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-fztz>
		<!-- <sjf-gui-gczj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-gczj> -->
		<sjf-gui-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-zytz>
		<sjf-gui-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-fjtz>
		<!-- <sjf-gui-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sjf-gui-zytz> -->
		<!-- 设计费 打折折扣 -->
		<explain></explain>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import sjfGuiFztz from "./sjfGui_fzcd.vue"
	import sjfGuiZytz from "./sjfGui_zytz.vue"
	import sjfGuiFjtz from "./sjfGui_fjtz.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					sjfGui_discount: "100",
					sjfGui_fjtz: "0",
					sjfGui_fzcd: "简单",
					sjfGui_gczj: "",
					sjfGui_standard: "桂建标[2018]37号",
					sjfGui_zytz: "1.0",
					type: "sjfGui"
				},
				showModalName: null,
				sjfGui_fzcd: ['简单', '一般', '复杂','特别复杂'],
				index0:'0',
				explain: [
					{
						title:'广西工程设计收费计费额',
						text:'（1）工程设计收费计费额，为经过批准的建设项目初步设计概算中的建筑安装工程费、设备与工器具购置费和联合试转运费之和。（2）工程中有利用原有设备的，以签订工程设计合同时同类设备的当期价格作为工程设计收费的计费额，工程中有缓配设备，但按照合同要求以既配设备进行工程设计并达到设备安装和工艺条件的，以既配设备的当期价格作为工程设计收费的计费额；工程中有引进设备的，按照购进设备的离岸价折换成人民币作为工程设计收费的计费额。'
					},
					{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情不同，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			sjfGuiFztz,
			sjfGuiFjtz,
			sjfGuiZytz,
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.sjfGui_fzcd = this.sjfGui_fzcd[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>
</style>
