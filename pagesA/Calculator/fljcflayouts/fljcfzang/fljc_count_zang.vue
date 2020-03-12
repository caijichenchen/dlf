<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">西藏防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfZang1">
				<view class="title">省份</view>
				<view class="title m-left">
					{{multiSelector.fljcfZang1[pickerIndex.fljcfZang1]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZang_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfZang_standard[pickerIndex.fljcfZang_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1529,multiSelector.fljcfZang_standard[pickerIndex.fljcfZang_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZang_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfZang_sfxm" :value="pickerIndex.fljcfZang_sfxm"
				 :range="multiSelector.fljcfZang_sfxm">
					<view class="picker">
						{{multiSelector.fljcfZang_sfxm[pickerIndex.fljcfZang_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZang_dw">
				<view class="title">工程量</view>
				<input type="digit" v-model="needVal.fljcfZang_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfZang_dw" type="defult" v-model="needVal.fljcfZang_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfZang_discount" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-zang.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfZang_standard: '',
					fljcfZang_sfxm: '',
					fljcfZang_gcl: '',
					fljcfZang_dw: '',
					fljcfZang_jj: '',
					fljcfZang_discount: '50',
					type: 'fljcfZang'
				},
				multiSelector: {
					fljcfZang1: [],
					fljcfZang_standard: [],
					fljcfZang_sfxm: [],
					fljcfZang_dw: '',//4
					fljcfZang_jj: '',//7
				},
				showSelector: {
					fljcfZang1: true,
					fljcfZang_standard: true,
					fljcfZang_sfxm: true,
					fljcfZang_dw: false,
					fljcfZang_jj: false,
				},
				pickerIndex: {
					fljcfZang1: 0,
					fljcfZang_standard: 0,
					fljcfZang_sfxm: 0,
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljczang1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljczang3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-zang.json',
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
