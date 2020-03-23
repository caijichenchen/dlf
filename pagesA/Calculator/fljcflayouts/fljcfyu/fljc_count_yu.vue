<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河南省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfYu1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfYu1[pickerIndex.fljcfYu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYu_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfYu_standard[pickerIndex.fljcfYu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1549,multiSelector.fljcfYu_standard[pickerIndex.fljcfYu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYu_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYu_sfxm" :value="pickerIndex.fljcfYu_sfxm"
				 :range="multiSelector.fljcfYu_sfxm">
					<view class="picker">
						{{multiSelector.fljcfYu_sfxm[pickerIndex.fljcfYu_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYu_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYu_jtfl" :value="pickerIndex.fljcfYu_jtfl"
				 :range="multiSelector.fljcfYu_jtfl">
					<view class="picker">
						{{multiSelector.fljcfYu_jtfl[pickerIndex.fljcfYu_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYu_gclmc || showSelector.fljcfYu_dw">
				<view class="title" v-model="needVal.fljcfYu_gclmc">{{multiSelector.fljcfYu_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfYu_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfYu_dw" type="defult" v-model="needVal.fljcfYu_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfYu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击选择</button>
			</view>
		</form>
		<explain></explain>
		<tzxs-wan :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-wan>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/fljcfs/fljcfs-yu.json'
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
					fljcfYu_standard: '',
					fljcfYu_sfxm: '',
					fljcfYu_jtfl: '',
					fljcfYu_jj: '',
					fljcfYu_gclmc: '',
					fljcfYu_gcl: '',
					fljcfYu_dw: '',
					fljcfYu_discount: '50',
					type: 'fljcfYu'
				},
				multiSelector: {
					fljcfYu1: [],
					fljcfYu_standard: [],
					fljcfYu_sfxm: [],
					fljcfYu_dw: '',//4
					fljcfYu_gclmc: '',//5
					fljcfYu_jtfl: [],//6
					fljcfYu_jj: '',//7
				},
				showSelector: {
					fljcfYu1: true,
					fljcfYu_standard: true,
					fljcfYu_sfxm: true,
					fljcfYu_dw: '',
					fljcfYu_gclmc: '',
					fljcfYu_jtfl: true,
					fljcfYu_jj: false,
				},
				pickerIndex: {
					fljcfYu1: 0,
					fljcfYu_standard: 0,
					fljcfYu_sfxm: 0,
					fljcfYu_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcyu1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcyu2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcyu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-yu.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>
</style>
