<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">陕西省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfShan1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfShan1[pickerIndex.fljcfShan1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfShan_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfShan_standard[pickerIndex.fljcfShan_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1544,multiSelector.fljcfShan_standard[pickerIndex.fljcfShan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfShan_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfShan_category" :value="pickerIndex.fljcfShan_category"
				 :range="multiSelector.fljcfShan_category">
					<view class="picker">
						{{multiSelector.fljcfShan_category[pickerIndex.fljcfShan_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfShan_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfShan_sfxm" :value="pickerIndex.fljcfShan_sfxm"
				 :range="multiSelector.fljcfShan_sfxm">
					<view class="picker">
						{{multiSelector.fljcfShan_sfxm[pickerIndex.fljcfShan_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfShan_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfShan_jtfl" :value="pickerIndex.fljcfShan_jtfl"
				 :range="multiSelector.fljcfShan_jtfl">
					<view class="picker">
						{{multiSelector.fljcfShan_jtfl[pickerIndex.fljcfShan_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfShan_gclmc || showSelector.fljcfShan_dw">
				<view class="title" v-model="needVal.fljcfShan_gclmc">{{multiSelector.fljcfShan_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfShan_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfShan_dw" type="defult" v-model="needVal.fljcfShan_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfShan_discount" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-shan.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfShan_standard: '',
					fljcfShan_category: '',
					fljcfShan_sfxm: '',
					fljcfShan_jtfl: '',
					fljcfShan_jj: '',
					fljcfShan_gclmc: '',
					fljcfShan_gcl: '',
					fljcfShan_dw: '',
					fljcfShan_discount: '50',
					type: 'fljcfShan'
				},
				multiSelector: {
					fljcfShan1: [],
					fljcfShan_standard: [],
					fljcfShan_category: [],
					fljcfShan_sfxm: [],
					fljcfShan_jtfl: [],//6
					fljcfShan_jj: '',//7
					fljcfShan_gclmc: '',//5
					fljcfShan_dw: '',//4
				},
				showSelector: {
					fljcfShan1: true,
					fljcfShan_standard: true,
					fljcfShan_category: true,
					fljcfShan_sfxm: true,
					fljcfShan_jtfl: true,
					fljcfShan_jj: false,
					fljcfShan_gclmc: false,
					fljcfShan_dw: false,
				},
				pickerIndex: {
					fljcfShan1: 0,
					fljcfShan_standard: 0,
					fljcfShan_category: 0,
					fljcfShan_sfxm: 0,
					fljcfShan_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcshan0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcshan1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcshan2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcshan3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-shan.json',
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
