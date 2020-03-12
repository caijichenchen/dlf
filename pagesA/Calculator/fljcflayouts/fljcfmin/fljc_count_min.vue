<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">福建省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfMin1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfMin1[pickerIndex.fljcfMin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMin_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfMin_standard[pickerIndex.fljcfMin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1541,multiSelector.fljcfMin_standard[pickerIndex.fljcfMin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMin_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfMin_sfxm" :value="pickerIndex.fljcfMin_sfxm"
				 :range="multiSelector.fljcfMin_sfxm">
					<view class="picker">
						{{multiSelector.fljcfMin_sfxm[pickerIndex.fljcfMin_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMin_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfMin_jtfl" :value="pickerIndex.fljcfMin_jtfl"
				 :range="multiSelector.fljcfMin_jtfl">
					<view class="picker">
						{{multiSelector.fljcfMin_jtfl[pickerIndex.fljcfMin_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMin_gclmc || showSelector.fljcfMin_dw">
				<view class="title" v-model="needVal.fljcfMin_gclmc">{{multiSelector.fljcfMin_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfMin_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfMin_dw" type="defult" v-model="needVal.fljcfMin_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfMin8">
				<view class="title">{{multiSelector.fljcfMin8}}</view>
				<input type="digit" v-model="needVal.fljcfMin_zzgd" /></input>
				<uni-tag text="米" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfMin_discount" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-min.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfMin_standard: '',
					fljcfMin_sfxm: '',
					fljcfMin_jtfl: '',
					fljcfMin_jj: '',
					fljcfMin_graded: '',
					fljcfMin_gclmc: '',
					fljcfMin_gcl: '',
					fljcfMin_dw: '',
					fljcfMin_zzgd: '',
					fljcfMin_discount: '50',
					type: 'fljcfMin'
				},
				multiSelector: {
					fljcfMin1: [],
					fljcfMin_standard: [],
					fljcfMin_sfxm: [],
					fljcfMin_dw: '',//4
					fljcfMin_gclmc: '',//5
					fljcfMin_jtfl: [],//6
					fljcfMin_jj: '',//7
					fljcfMin8: '',
					fljcfMin_graded: '',
				},
				showSelector: {
					fljcfMin1: true,
					fljcfMin_standard: true,
					fljcfMin_sfxm: true,
					fljcfMin_dw: false,
					fljcfMin_gclmc: false,
					fljcfMin_jtfl: true,
					fljcfMin_jj: false,
					fljcfMin8: false,
					fljcfMin_graded: false,
				},
				pickerIndex: {
					fljcfMin1: 0,
					fljcfMin_standard: 0,
					fljcfMin_sfxm: 0,
					fljcfMin_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcmin1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcmin2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcmin3",
						"title": "检测点高度",
						"text": "防雷装置高度超过20米的,每增加1米每检测点加收1元"
					},
					{
						"id": "fljcmin4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-min.json',
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
