<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfQiong_xzsf">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfQiong_xzsf[pickerIndex.fljcfQiong_xzsf]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfQiong_xzbz">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfQiong_xzbz[pickerIndex.fljcfQiong_xzbz]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(272,multiSelector.fljcfQiong_xzbz[pickerIndex.fljcfQiong_xzbz])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfQiong_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfQiong_sfxm" :value="pickerIndex.fljcfQiong_sfxm"
				 :range="multiSelector.fljcfQiong_sfxm">
					<view class="picker">
						{{multiSelector.fljcfQiong_sfxm[pickerIndex.fljcfQiong_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfQiong_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfQiong_jtfl" :value="pickerIndex.fljcfQiong_jtfl"
				 :range="multiSelector.fljcfQiong_jtfl">
					<view class="picker">
						{{multiSelector.fljcfQiong_jtfl[pickerIndex.fljcfQiong_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfQiong_gclmc || showSelector.fljcfQiong_dw">
				<view class="title" v-model="needVal.fljcfQiong_gclmc">{{multiSelector.fljcfQiong_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfQiong_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfQiong_dw" type="defult" v-model="needVal.fljcfQiong_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfQiong_dzzk" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-qiong.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfQiong_xzsf: '',
					fljcfQiong_xzbz: '',
					fljcfQiong_sfxm: '',
					fljcfQiong_jtfl: '',
					fljcfQiong_gclmc: '',
					fljcfQiong_gcl: '',
					fljcfQiong_dw: '',
					fljcfQiong_sfbz: '',
					fljcfQiong_dzzk: '50',
					type: 'fljcfQiong'
				},
				multiSelector: {
					fljcfQiong_xzsf: [],
					fljcfQiong_xzbz: [],
					fljcfQiong_sfxm: [],
					fljcfQiong_dw: '',//4
					fljcfQiong_gclmc: '',//5
					fljcfQiong_jtfl: [],//6
					fljcfQiong_sfbz: '',//7
				},
				showSelector: {
					fljcfQiong_xzsf: true,
					fljcfQiong_xzbz: true,
					fljcfQiong_sfxm: true,
					fljcfQiong_dw: false,
					fljcfQiong_gclmc: false,
					fljcfQiong_jtfl: true,
					fljcfQiong_sfbz: false,
				},
				pickerIndex: {
					fljcfQiong_xzsf: 0,
					fljcfQiong_xzbz: 0,
					fljcfQiong_sfxm: 0,
					fljcfQiong_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcqiong1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcqiong2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcqiong3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-qiong.json',
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
