<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfMeng1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfMeng1[pickerIndex.fljcfMeng1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMeng_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfMeng_standard[pickerIndex.fljcfMeng_standard]}}
					</view>
				<button type="primary" size="mini" @tap="checkDeatil(1542,multiSelector.fljcfMeng_standard[pickerIndex.fljcfMeng_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMeng_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfMeng_sfxm" :value="pickerIndex.fljcfMeng_sfxm"
				 :range="multiSelector.fljcfMeng_sfxm">
					<view class="picker">
						{{multiSelector.fljcfMeng_sfxm[pickerIndex.fljcfMeng_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMeng_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfMeng_jtfl" :value="pickerIndex.fljcfMeng_jtfl"
				 :range="multiSelector.fljcfMeng_jtfl">
					<view class="picker">
						{{multiSelector.fljcfMeng_jtfl[pickerIndex.fljcfMeng_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMeng_gclmc || showSelector.fljcfMeng_dw">
				<view class="title" v-model="needVal.fljcfMeng_gclmc">{{multiSelector.fljcfMeng_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfMeng_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfMeng_dw" type="defult" v-model="needVal.fljcfMeng_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfMeng_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-meng.json'
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
					fljcfMeng_standard: '',
					fljcfMeng_sfxm: '',
					fljcfMeng_jtfl: '',
					fljcfMeng_gclmc: '',
					fljcfMeng_gcl: '',
					fljcfMeng_dw: '',
					fljcfMeng_jj: '',
					fljcfMeng_discount: '50',
					type: 'fljcfMeng'
				},
				multiSelector: {
					fljcfMeng1: [],
					fljcfMeng_standard: [],
					fljcfMeng_sfxm: [],
					fljcfMeng_jtfl: [],//6
					fljcfMeng_gclmc: '',//5
					fljcfMeng_dw: '',//4
					fljcfMeng_jj: '',//7
				},
				showSelector: {
					fljcfMeng1: true,
					fljcfMeng_standard: true,
					fljcfMeng_sfxm: true,
					fljcfMeng_jtfl: true,
					fljcfMeng_gclmc: false,
					fljcfMeng_dw: false,
					fljcfMeng_jj: false,
				},
				pickerIndex: {
					fljcfMeng1: 0,
					fljcfMeng_standard: 0,
					fljcfMeng_sfxm: 0,
					fljcfMeng_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcmeng1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcmeng2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcmeng3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-meng.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>
</style>
