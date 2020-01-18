<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfHei1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfHei1[pickerIndex.fljcfHei1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfHei_standard[pickerIndex.fljcfHei_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1533,multiSelector.fljcfHei_standard[pickerIndex.fljcfHei_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_sfbz">
				<view class="title">收费标准</view>
				<picker class="select" @change="PickerChange" data-name="fljcfHei_sfbz" :value="pickerIndex.fljcfHei_sfbz"
				 :range="multiSelector.fljcfHei_sfbz">
					<view class="picker">
						{{multiSelector.fljcfHei_sfbz[pickerIndex.fljcfHei_sfbz]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfHei_sfxm" :value="pickerIndex.fljcfHei_sfxm"
				 :range="multiSelector.fljcfHei_sfxm">
					<view class="picker">
						{{multiSelector.fljcfHei_sfxm[pickerIndex.fljcfHei_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_dgfl">
				<view class="title">分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfHei_dgfl" :value="pickerIndex.fljcfHei_dgfl"
				 :range="multiSelector.fljcfHei_dgfl">
					<view class="picker">
						{{multiSelector.fljcfHei_dgfl[pickerIndex.fljcfHei_dgfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_jtfl">
				<view class="title">详细分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfHei_jtfl" :value="pickerIndex.fljcfHei_jtfl"
				 :range="multiSelector.fljcfHei_jtfl">
					<view class="picker">
						{{multiSelector.fljcfHei_jtfl[pickerIndex.fljcfHei_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei_gclmc || showSelector.fljcfHei_dw">
				<view class="title">{{multiSelector.fljcfHei_gclmc}}</view>
				<input v-model="needVal.fljcfHei_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfHei_dw" type="defult" v-model="needVal.fljcfHei_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfHei11">
				<view class="title">{{multiSelector.fljcfHei11}}</view>
				<input v-model="needVal.fljcfHei_zzgd" /></input>
				<uni-tag :text="multiSelector.fljcfHei_gddw" type="defult" v-model="multiSelector.fljcfHei_gddw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfHei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-hei.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfHei_standard: '',
					fljcfHei_sfbz: '',
					fljcfHei_sfxm: '',
					fljcfYue_czcs: '',
					fljcfHei_dgfl: '',
					fljcfHei_jtfl: '',
					fljcfHei_gclmc: '',
					fljcfHei_gcl: '',
					fljcfHei_dw: '',
					fljcfHei_jj: '',
					fljcfHei_graded: '',
					fljcfHei_zzgd: '',
					fljcfHei_discount: '50',
					type: 'fljcfHei'
				},
				multiSelector: {
					fljcfHei1: [],
					fljcfHei_standard: [],
					fljcfHei_sfbz: [],
					fljcfHei_sfxm: [],
					fljcfHei_dgfl: [],//6
					fljcfHei_jtfl: [],
					fljcfHei_gclmc: '',//5
					fljcfHei_dw: '',//4
					fljcfHei_jj: '',//7
					fljcfHei_graded: '',
					fljcfHei11: '',
					fljcfHei_gddw: '',
				},
				showSelector: {
					fljcfHei1: true,
					fljcfHei_standard: true,
					fljcfHei_sfbz: true,
					fljcfHei_sfxm: true,
					fljcfHei_dgfl: true,
					fljcfHei_jtfl: true,
					fljcfHei_gclmc: false,
					fljcfHei_dw: false,
					fljcfHei_jj: false,
					fljcfHei_graded: false,
					fljcfHei11: false,
					fljcfHei_gddw: true,
				},
				pickerIndex: {
					fljcfHei1: 0,
					fljcfHei_standard: 0,
					fljcfHei_sfbz: 0,
					fljcfHei_sfxm: 0,
					fljcfHei_dgfl: 0,
					fljcfHei_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "zjzxhei1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "zjzxhei2",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "zjzxhei3",
						"title": "分类",
						"text": "具体分类"
					},
					{
						"id": "zjzxhei4",
						"title": "详细分类",
						"text": "具体分类"
					},
					{
						"id": "zjzxhei5",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-hei.json',
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
