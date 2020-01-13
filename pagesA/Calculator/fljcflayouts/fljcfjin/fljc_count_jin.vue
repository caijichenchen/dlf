<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfJin1">
				<view class="title">省份</view>
					<view class="picker">
						{{multiSelector.fljcfJin1[pickerIndex.fljcfJin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJin_standard">
				<view class="title">选择标准</view>
					<view class="picker">
						{{multiSelector.fljcfJin_standard[pickerIndex.fljcfJin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1537,multiSelector.fljcfJin_standard[pickerIndex.fljcfJin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJin_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfJin_sfxm" :value="pickerIndex.fljcfJin_sfxm"
				 :range="multiSelector.fljcfJin_sfxm">
					<view class="picker">
						{{multiSelector.fljcfJin_sfxm[pickerIndex.fljcfJin_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJin_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfJin_jtfl" :value="pickerIndex.fljcfJin_jtfl"
				 :range="multiSelector.fljcfJin_jtfl">
					<view class="picker">
						{{multiSelector.fljcfJin_jtfl[pickerIndex.fljcfJin_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJin_gclmc || showSelector.fljcfJin_dw">
				<view class="title">{{multiSelector.fljcfJin_gclmc}}</view>
				<input v-model="needVal.fljcfJin_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfJin_dw" type="defult" v-model="needVal.fljcfJin_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJin9">
				<view class="title">{{multiSelector.fljcfJin9}}</view>
				<input v-model="needVal.fljcfJin_zzgd" /></input>
				<uni-tag text="米" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfJin_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-jin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfJin_standard: '',
					fljcfJin_sfxm: '',
					fljcfJin_jtfl: '',
					fljcfJin_gclmc: '',
					fljcfJin_gcl: '',
					fljcfJin_dw: '',
					fljcfJin_jj: '',
					fljcfJin_graded: '',
					fljcfJin_zzgd: '',
					fljcfJin_discount: '50',
					type: 'fljcfJin'
				},
				multiSelector: {
					fljcfJin1: [],
					fljcfJin_standard: [],
					fljcfJin_sfxm: [],
					fljcfJin_jtfl: [],//6
					fljcfJin_gclmc: '',//5
					fljcfJin_dw: '',//4
					fljcfJin_jj: '',//7
					fljcfJin_graded: '',
					fljcfJin9: '',
				},
				showSelector: {
					fljcfJin1: true,
					fljcfJin_standard: true,
					fljcfJin_sfxm: true,
					fljcfJin_jtfl: true,
					fljcfJin_gclmc: false,
					fljcfJin_dw: false,
					fljcfJin_jj: false,
					fljcfJin_graded: false,
					fljcfJin9: false,
				},
				pickerIndex: {
					fljcfJin1: 0,
					fljcfJin_standard: 0,
					fljcfJin_sfxm: 0,
					fljcfJin_jtfl: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "zjzxjin1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "zjzxjin2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "zjzxjin3",
						"title": "构筑物高度",
						"text": "构筑物以20米为基准高度,每超高5米加收10元"
					},
					{
						"id": "zjzxjin4",
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
