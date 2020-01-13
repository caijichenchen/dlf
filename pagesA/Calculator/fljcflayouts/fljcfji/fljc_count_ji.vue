<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfJi1">
				<view class="title">省份</view>
				<view class="title m-left">
					{{multiSelector.fljcfJi1[pickerIndex.fljcfJi1]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJi_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfJi_standard[pickerIndex.fljcfJi_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1535,multiSelector.fljcfJi_standard[pickerIndex.fljcfJi_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJi_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfJi_sfxm" :value="pickerIndex.fljcfJi_sfxm"
				 :range="multiSelector.fljcfJi_sfxm">
					<view class="picker">
						{{multiSelector.fljcfJi_sfxm[pickerIndex.fljcfJi_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJi_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfJi_jtfl" :value="pickerIndex.fljcfJi_jtfl"
				 :range="multiSelector.fljcfJi_jtfl">
					<view class="picker">
						{{multiSelector.fljcfJi_jtfl[pickerIndex.fljcfJi_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJi_dw">
				<view class="title" v-model="needVal.fljcfJi_gclmc">工程量</view>
				<input v-model="needVal.fljcfJi_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfJi_dw" type="defult" v-model="needVal.fljcfJi_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="pickerIndex.fljcfJi_jtfl >= 1">
				<view class="title">建筑物层数</view>
				<input v-model="needVal.fljcfJi_jzcs" /></input>
				<uni-tag text="层" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfJi_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-ji.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfJi_standard: '',
					fljcfJi_sfxm: '',
					fljcfJi_jtfl: '',
					fljcfJi_gclmc: '',
					fljcfJi_gcl: '',
					fljcfJi_dw: '',
					fljcfJi_jj: '',
					fljcfJi_jzcs: '',
					fljcfJi_fl: '',
					fljcfJi_discount: '50',
					type: 'fljcfJi'
				},
				multiSelector: {
					fljcfJi1: [],
					fljcfJi_standard: [],
					fljcfJi_sfxm: [],
					fljcfJi_jtfl: [],//6
					
					fljcfJi_dw: '',//4
					fljcfJi_jj: '',//7
					fljcfJi_fl: '',
				},
				showSelector: {
					fljcfJi1: true,
					fljcfJi_standard: true,
					fljcfJi_sfxm: true,
					fljcfJi_jtfl: true,
					
					fljcfJi_dw: false,
					fljcfJi_jj: false,
					fljcfJi_fl: false
				},
				pickerIndex: {
					fljcfJi1: 0,
					fljcfJi_standard: 0,
					fljcfJi_sfxm: 0,
					fljcfJi_jtfl: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljcji1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcji2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcji4",
						"title": "建筑物层数",
						"text": "6层以上每层增加30元"
					},
					{
						"id": "fljcji3",
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
