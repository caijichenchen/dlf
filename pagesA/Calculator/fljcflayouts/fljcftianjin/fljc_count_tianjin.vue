<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">天津市防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin1">
				<view class="title">省份</view>
					<view class="picker">
						{{multiSelector.fljcfTianjin1[pickerIndex.fljcfTianjin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_standard">
				<view class="title">选择标准</view>
					<view class="picker">
						{{multiSelector.fljcfTianjin_standard[pickerIndex.fljcfTianjin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1536,multiSelector.fljcfTianjin_standard[pickerIndex.fljcfTianjin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfTianjin_category" :value="pickerIndex.fljcfTianjin_category"
				 :range="multiSelector.fljcfTianjin_category">
					<view class="picker">
						{{multiSelector.fljcfTianjin_category[pickerIndex.fljcfTianjin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfTianjin_sfxm" :value="pickerIndex.fljcfTianjin_sfxm"
				 :range="multiSelector.fljcfTianjin_sfxm">
					<view class="picker">
						{{multiSelector.fljcfTianjin_sfxm[pickerIndex.fljcfTianjin_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfTianjin_jtfl" :value="pickerIndex.fljcfTianjin_jtfl"
				 :range="multiSelector.fljcfTianjin_jtfl">
					<view class="picker">
						{{multiSelector.fljcfTianjin_jtfl[pickerIndex.fljcfTianjin_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_gclmc || showSelector.fljcfTianjin_dw">
				<view class="title" v-model="needVal.fljcfTianjin_gclmc">{{multiSelector.fljcfTianjin_gclmc}}</view>
				<input v-model="needVal.fljcfTianjin_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfTianjin_dw" type="defult" v-model="needVal.fljcfTianjin_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfTianjin_gdname || showSelector.fljcfTianjin11">
				<picker class="select" @change="PickerChange" data-name="fljcfTianjin_gdname" :value="pickerIndex.fljcfTianjin_gdname"
				 :range="multiSelector.fljcfTianjin_gdname">
					<view class="picker">
						{{multiSelector.fljcfTianjin_gdname[pickerIndex.fljcfTianjin_gdname]}}
					</view>
				</picker>
				<input v-model="needVal.fljcfTianjin_zzgd" /></input>
				<uni-tag :text="multiSelector.fljcfTianjin11" type="defult" v-model="multiSelector.fljcfTianjin11"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfTianjin_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-tianjin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfTianjin_standard: '',
					fljcfTianjin_category: '',
					fljcfTianjin_sfxm: '',
					fljcfTianjin_jtfl: '',
					fljcfTianjin_gclmc: '',
					fljcfTianjin_gcl: '',
					fljcfTianjin_dw: '',
					fljcfTianjin_jj: '',
					fljcfTianjin_gdname: '',
					fljcfTianjin_zzgd: '',
					fljcfTianjin_gdxs: '',
					fljcfTianjin_discount: '50',
					type: 'fljcfTianjin'
				},
				multiSelector: {
					fljcfTianjin1: [],
					fljcfTianjin_standard: [],
					fljcfTianjin_category: [],
					fljcfTianjin_sfxm: [],
					fljcfTianjin_jtfl: [],//6
					fljcfTianjin_gclmc: '',//5
					fljcfTianjin_dw: '',//4
					fljcfTianjin_jj: '',//7
					fljcfTianjin_gdname: [],
					fljcfTianjin_gdxs: '',
					fljcfTianjin11: '',
				},
				showSelector: {
					fljcfTianjin1: true,
					fljcfTianjin_standard: true,
					fljcfTianjin_category: true,
					fljcfTianjin_sfxm: true,
					fljcfTianjin_jtfl: true,
					fljcfTianjin_gclmc: false,
					fljcfTianjin_dw: false,
					fljcfTianjin_jj: false,
					fljcfTianjin_gdname: false,
					fljcfTianjin_gdxs: false,
					fljcfTianjin11: false,
				},
				pickerIndex: {
					fljcfTianjin1: 0,
					fljcfTianjin_standard: 0,
					fljcfTianjin_category: 0,
					fljcfTianjin_sfxm: 0,
					fljcfTianjin_jtfl: 0,
					fljcfTianjin_gdname: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljctianjin0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljctianjin1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljctianjin2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljctianjin3",
						"title": "楼层",
						"text": "楼层6层以上每层加3%;构筑物20米以上每米加收2%"
					},
					{
						"id": "fljctianjin4",
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
