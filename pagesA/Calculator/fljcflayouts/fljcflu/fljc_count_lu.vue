<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山东省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfLu1">
				<view class="title">省份</view>
					<view class="picker">
						{{multiSelector.fljcfLu1[pickerIndex.fljcfLu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLu_standard">
				<view class="title">选择标准</view>
					<view class="picker">
						{{multiSelector.fljcfLu_standard[pickerIndex.fljcfLu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1540,multiSelector.fljcfLu_standard[pickerIndex.fljcfLu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLu_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLu_category" :value="pickerIndex.fljcfLu_category"
				 :range="multiSelector.fljcfLu_category">
					<view class="picker">
						{{multiSelector.fljcfLu_category[pickerIndex.fljcfLu_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLu_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLu_sfxm" :value="pickerIndex.fljcfLu_sfxm"
				 :range="multiSelector.fljcfLu_sfxm">
					<view class="picker">
						{{multiSelector.fljcfLu_sfxm[pickerIndex.fljcfLu_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLu_jfmj">
				<view class="title">机房面积</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLu_jfmj" :value="pickerIndex.fljcfLu_jfmj"
				 :range="multiSelector.fljcfLu_jfmj">
					<view class="picker">
						{{multiSelector.fljcfLu_jfmj[pickerIndex.fljcfLu_jfmj]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLu_dw">
				<view class="title" v-model="needVal.fljcfLu_gclmc">工程量</view>
				<input type="digit" v-model="needVal.fljcfLu_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfLu_dw" type="defult" v-model="needVal.fljcfLu_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfLu_discount" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-lu.json'
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
					fljcfLu_standard: '',
					fljcfLu_category: '',
					fljcfLu_sfxm: '',
					fljcfLu_jfmj: '',
					fljcfLu_gclmc: '',
					fljcfLu_gcl: '',
					fljcfLu_dw: '',
					fljcfLu_jj: '',
					fljcfLu_discount: '50',
					type: 'fljcfLu'
				},
				multiSelector: {
					fljcfLu1: [],
					fljcfLu_standard: [],
					fljcfLu_category: [],
					fljcfLu_sfxm: [],
					fljcfLu_jfmj: [],//6
					fljcfLu_dw: '',//4
					fljcfLu_jj: '',//7
				},
				showSelector: {
					fljcfLu1: true,
					fljcfLu_standard: true,
					fljcfLu_category: true,
					fljcfLu_sfxm: true,
					fljcfLu_jfmj: true,
					fljcfLu_dw: false,
					fljcfLu_jj: false,
				},
				pickerIndex: {
					fljcfLu1: 0,
					fljcfLu_standard: 0,
					fljcfLu_category: 0,
					fljcfLu_sfxm: 0,
					fljcfLu_jfmj: 0
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "fljclu0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljclu1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljclu2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljclu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-lu.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>
</style>
