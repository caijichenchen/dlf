<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">设计费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.sjfJi_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">比例表</view>
				<input type="digit" v-model="needVal.sjfJi_blb"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfJi_blb">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="digit" v-model="needVal.sjfJi_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfJi_zytz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="sjfJi_fztz">
					<view class="picker">
						{{sjfJi_fztz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfJi_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.sjfJi_fjtz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfJi_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.sjfJi_fdfd"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sjfJi_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<zytz :showModalName="showModalName" v-on:hideModal="hideModal"></zytz>
		<blb :showModalName="showModalName" v-on:hideModal="hideModal"></blb>
		<fztz :showModalName="showModalName" v-on:hideModal="hideModal"></fztz>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zytz from './sjfJi_zytz.vue'
	import fjtz from './sjfJi_fjtz.vue'
	import blb from './sjfJi_blb.vue'
	import fztz from './sjfJi_fztz.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					sjfJi_gczj: '',
					sjfJi_blb: '100',
					sjfJi_zytz: '1.0',
					sjfJi_fjtz: '1.0',
					sjfJi_fdfd: '80',
					sjfJi_fztz: 'I级',
					sjfJi_discount: '50',
					type: "sjfJi"
				},
				showModalName:null,
				modalData: null,
				sjfJi_fztz: ['I级','II级','III级'],
				index0:'0',
				explain: [
					{
						title:'工程设计收费计费额',
						text:'1）工程设计收费计费额，为经过批准的建设项目初步设计概算中的建筑安装工程费、设备与工器具购置费和联合试转运费之和.（2）工程中有利用原有设备的，以签订工程设计合同时同类设备的当期价格作为工程设计收费的计费额，工程中有缓配设备，但按照合同要求以既配设备进行工程设计并达到设备安装和工艺条件的，以既配设备的当期价格作为工程设计收费的计费额；工程中有引进设备的，按照购进设备的离岸价折换成人民币作为工程设计收费的计费额。'
					},
					{
						title:'浮动幅度',
						text:'国家标准：80%~120%'
					},
					{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zytz,
			fjtz,
			blb,
			fztz
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.sjfJi_fztz = this.sjfJi_fztz[this.index0]
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
