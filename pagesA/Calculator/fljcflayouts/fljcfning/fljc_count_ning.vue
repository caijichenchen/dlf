<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">宁夏防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfNing1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfNing1[pickerIndex.fljcfNing1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfNing_standard">
				<view class="title">选择标准</view>
				<view class="title">
					{{multiSelector.fljcfNing_standard[pickerIndex.fljcfNing_standard]}}
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1543,multiSelector.fljcfNing_standard[pickerIndex.fljcfNing_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfNing_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfNing_category" :value="pickerIndex.fljcfNing_category"
				 :range="multiSelector.fljcfNing_category">
					<view class="picker">
						{{multiSelector.fljcfNing_category[pickerIndex.fljcfNing_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfNing_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfNing_sfxm" :value="pickerIndex.fljcfNing_sfxm"
				 :range="multiSelector.fljcfNing_sfxm">
					<view class="picker">
						{{multiSelector.fljcfNing_sfxm[pickerIndex.fljcfNing_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfNing_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfNing_jtfl" :value="pickerIndex.fljcfNing_jtfl"
				 :range="multiSelector.fljcfNing_jtfl">
					<view class="picker">
						{{multiSelector.fljcfNing_jtfl[pickerIndex.fljcfNing_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfNing_gclmc || showSelector.fljcfNing_dw">
				<view class="title" v-model="needVal.fljcfNing_gclmc">{{multiSelector.fljcfNing_gclmc}}</view>
				<input type="digit" v-model="needVal.fljcfNing_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfNing_dw" type="defult" v-model="needVal.fljcfNing_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.fljcfNing_discount" /></input>
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
	// import datajson from '@/common/json/fljcfs/fljcfs-ning.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfNing_standard: '',
					fljcfNing_category: '',
					fljcfNing_sfxm: '',
					fljcfNing_jtfl: '',
					fljcfNing_gclmc: '',
					fljcfNing_gcl: '',
					fljcfNing_dw: '',
					fljcfNing_jj: '',
					fljcfNing_discount: '50',
					type: 'fljcfNing'
				},
				multiSelector: {
					fljcfNing1: [],
					fljcfNing_standard: [],
					fljcfNing_category: [],
					fljcfNing_sfxm: [],
					fljcfNing_jtfl: [],//6
					fljcfNing_gclmc: '',//5
					fljcfNing_dw: '',//4
					fljcfNing_jj: '',//7
				},
				showSelector: {
					fljcfNing1: true,
					fljcfNing_standard: true,
					fljcfNing_category: true,
					fljcfNing_sfxm: true,
					fljcfNing_jtfl: true,
					fljcfNing_gclmc: false,
					fljcfNing_dw: false,
					fljcfNing_jj: false,
				},
				pickerIndex: {
					fljcfNing1: 0,
					fljcfNing_standard: 0,
					fljcfNing_category: 0,
					fljcfNing_sfxm: 0,
					fljcfNing_jtfl: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "fljcning0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcning1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcning2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcning3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/fljcfs/fljcfs-ning.json',
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
