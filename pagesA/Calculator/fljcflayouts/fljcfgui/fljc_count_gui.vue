<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfGui1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfGui1[pickerIndex.fljcfGui1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfGui_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfGui_standard[pickerIndex.fljcfGui_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1532,multiSelector.fljcfGui_standard[pickerIndex.fljcfGui_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfGui_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfGui_category" :value="pickerIndex.fljcfGui_category"
				 :range="multiSelector.fljcfGui_category">
					<view class="picker">
						{{multiSelector.fljcfGui_category[pickerIndex.fljcfGui_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfGui_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfGui_sfxm" :value="pickerIndex.fljcfGui_sfxm"
				 :range="multiSelector.fljcfGui_sfxm">
					<view class="picker">
						{{multiSelector.fljcfGui_sfxm[pickerIndex.fljcfGui_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfGui_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfGui_jtfl" :value="pickerIndex.fljcfGui_jtfl"
				 :range="multiSelector.fljcfGui_jtfl">
					<view class="picker">
						{{multiSelector.fljcfGui_jtfl[pickerIndex.fljcfGui_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfGui_gclmc || showSelector.fljcfGui_dw">
				<view class="title">{{multiSelector.fljcfGui_gclmc}}</view>
				<input v-model="needVal.fljcfGui_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfGui_dw" type="defult" v-model="needVal.fljcfGui_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfGui_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/fljcfs/fljcfs-gui.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfGui_standard: '',
					fljcfGui_category: '',
					fljcfGui_sfxm: '',
					fljcfGui_jtfl: '',
					fljcfGui_gclmc: '',
					fljcfGui_gcl: '',
					fljcfGui_dw: '',
					fljcfGui_jj: '',
					fljcfGui_discount: '50',
					type: 'fljcfGui'
				},
				multiSelector: {
					fljcfGui1: [],
					fljcfGui_standard: [],
					fljcfGui_category: [],
					fljcfGui_sfxm: [],
					fljcfGui_gclmc: '',//5
					fljcfGui_dw: '',//4
					fljcfGui_jtfl: [],//6
					fljcfGui_jj: '',//7
				},
				showSelector: {
					fljcfGui1: true,
					fljcfGui_standard: true,
					fljcfGui_category: true,
					fljcfGui_sfxm: true,
					fljcfGui_gclmc: false,
					fljcfGui_dw: false,
					fljcfGui_jtfl: true,
					fljcfGui_jj: false,
				},
				pickerIndex: {
					fljcfGui1: 0,
					fljcfGui_standard: 0,
					fljcfGui_category: 0,
					fljcfGui_sfxm: 0,
					fljcfGui_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcgui0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcgui1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcgui2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcgui3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-gui.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>
</style>
