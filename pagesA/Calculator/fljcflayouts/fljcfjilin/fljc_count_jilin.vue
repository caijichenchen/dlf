<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">吉林省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfJilin1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfJilin1[pickerIndex.fljcfJilin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJilin_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfJilin_standard[pickerIndex.fljcfJilin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1534,multiSelector.fljcfJilin_standard[pickerIndex.fljcfJilin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJilin_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfJilin_sfxm" :value="pickerIndex.fljcfJilin_sfxm"
				 :range="multiSelector.fljcfJilin_sfxm">
					<view class="picker">
						{{multiSelector.fljcfJilin_sfxm[pickerIndex.fljcfJilin_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfJilin_gclmc || showSelector.fljcfJilin_dw">
				<view class="title">{{multiSelector.fljcfJilin_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfJilin_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfJilin_dw" type="defult" v-model="needVal.fljcfJilin_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfJilin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-jilin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			}
		},
		data() {
			return {
				needVal: {
					fljcfJilin_standard: '',
					fljcfJilin_sfxm: '',
					fljcfJilin_jj: '',
					fljcfJilin_gclmc: '',
					fljcfJilin_gcl: '',
					fljcfJilin_dw: '',
					fljcfJilin_discount: '50',
					type: 'fljcfJilin'
				},
				multiSelector: {
					fljcfJilin1: [],
					fljcfJilin_standard: [],
					fljcfJilin_sfxm: [],
					fljcfJilin_dw: '',//4
					fljcfJilin_gclmc: '',//5
					fljcfJilin_jj: '',//7
				},
				showSelector: {
					fljcfJilin1: true,
					fljcfJilin_standard: true,
					fljcfJilin_sfxm: true,
					fljcfJilin_dw: false,
					fljcfJilin_gclmc: false,
					fljcfJilin_jj: false,
				},
				pickerIndex: {
					fljcfJilin1: 0,
					fljcfJilin_standard: 0,
					fljcfJilin_sfxm: 0,
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcjilin1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcjilin2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-jilin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>
</style>
