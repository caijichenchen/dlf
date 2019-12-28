<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">甘肃省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfLong1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfLong1[pickerIndex.fljcfLong1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLong_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfLong_standard[pickerIndex.fljcfLong_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(1531,multiSelector.fljcfLong_standard[pickerIndex.fljcfLong_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLong_category">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLong_category" :value="pickerIndex.fljcfLong_category"
				 :range="multiSelector.fljcfLong_category">
					<view class="picker">
						{{multiSelector.fljcfLong_category[pickerIndex.fljcfLong_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLong_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLong_sfxm" :value="pickerIndex.fljcfLong_sfxm"
				 :range="multiSelector.fljcfLong_sfxm">
					<view class="picker">
						{{multiSelector.fljcfLong_sfxm[pickerIndex.fljcfLong_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLong_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfLong_jtfl" :value="pickerIndex.fljcfLong_jtfl"
				 :range="multiSelector.fljcfLong_jtfl">
					<view class="picker">
						{{multiSelector.fljcfLong_jtfl[pickerIndex.fljcfLong_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfLong_gclmc || showSelector.fljcfLong_dw">
				<view class="title" v-model="needVal.fljcfLong_gclmc">{{multiSelector.fljcfLong_gclmc}}</view>
				<input v-model="needVal.fljcfLong_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfLong_dw" type="defult" v-model="needVal.fljcfLong_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfLong_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-long.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfLong_standard: '',
					fljcfLong_category: '',
					fljcfLong_sfxm: '',
					fljcfLong_jtfl: '',
					fljcfLong_gclmc: '',
					fljcfLong_gcl: '',
					fljcfLong_dw: '',
					fljcfLong_jj: '',
					fljcfLong_discount: '50',
					type:'fljcfLong'
				},
				multiSelector: {
					fljcfLong1: [],
					fljcfLong_standard: [],
					fljcfLong_category: [],
					fljcfLong_sfxm: [],
					fljcfLong_jtfl: [],//6
					fljcfLong_gclmc: '',//5
					fljcfLong_dw: '',//4
					fljcfLong_jj: '',//7
				},
				showSelector: {
					fljcfLong1: true,
					fljcfLong_standard: true,
					fljcfLong_category: true,
					fljcfLong_sfxm: true,
					fljcfLong_jtfl: true,
					fljcfLong_gclmc: false,
					fljcfLong_dw: false,
					fljcfLong_jj: false,
				},
				pickerIndex: {
					fljcfLong1: 0,
					fljcfLong_standard: 0,
					fljcfLong_category: 0,
					fljcfLong_sfxm: 0,
					fljcfLong_jtfl: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljclong0",
						"title": "类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljclong1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljclong2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljclong3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
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
