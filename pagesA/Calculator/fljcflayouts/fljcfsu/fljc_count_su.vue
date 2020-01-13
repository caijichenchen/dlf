<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfSu1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfSu1[pickerIndex.fljcfSu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfSu_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfSu_standard[pickerIndex.fljcfSu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1545,multiSelector.fljcfSu_standard[pickerIndex.fljcfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfSu_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfSu_sfxm" :value="pickerIndex.fljcfSu_sfxm"
				 :range="multiSelector.fljcfSu_sfxm">
					<view class="picker">
						{{multiSelector.fljcfSu_sfxm[pickerIndex.fljcfSu_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfSu_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfSu_jtfl" :value="pickerIndex.fljcfSu_jtfl"
				 :range="multiSelector.fljcfSu_jtfl">
					<view class="picker">
						{{multiSelector.fljcfSu_jtfl[pickerIndex.fljcfSu_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfSu_gclmc || showSelector.fljcfSu_dw">
				<view class="title" v-model="needVal.fljcfSu_gclmc">{{multiSelector.fljcfSu_gclmc}}</view>
				<input v-model="needVal.fljcfSu_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfSu_dw" type="defult" v-model="needVal.fljcfSu_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfSu8">
				<view class="title">{{multiSelector.fljcfSu8}}</view>
				<input v-model="needVal.fljcfSu_zzgd" /></input>
				<uni-tag text="米" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfSu_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-su.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfSu_standard: '',
					fljcfSu_sfxm: '',
					fljcfSu_jtfl: '',
					fljcfSu_jj: '',
					fljcfSu_gclmc: '',
					fljcfSu_gcl: '',
					fljcfSu_dw: '',
					fljcfSu_zzgd: '',
					fljcfSu_discount: '50',
					type: 'fljcfSu'
				},
				multiSelector: {
					fljcfSu1: [],
					fljcfSu_standard: [],
					fljcfSu_sfxm: [],
					fljcfSu_jtfl: [],//6
					fljcfSu_dw: '',//4
					fljcfSu_gclmc: '',//5
					fljcfSu_jj: '',//7
					fljcfSu8: '',
				},
				showSelector: {
					fljcfSu1: true,
					fljcfSu_standard: true,
					fljcfSu_sfxm: true,
					fljcfSu_jtfl: true,
					fljcfSu_dw: false,
					fljcfSu_gclmc: false,
					fljcfSu_jj: false,
					fljcfSu8: false,
				},
				pickerIndex: {
					fljcfSu1: 0,
					fljcfSu_standard: 0,
					fljcfSu_sfxm: 0,
					fljcfSu_jtfl: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljcsu1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcsu2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcsu3",
						"title": "检测点高度",
						"text": "防雷装置高度超过20米的,每增加1米每检测点加收1元"
					},
					{
						"id": "fljcsu4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
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
