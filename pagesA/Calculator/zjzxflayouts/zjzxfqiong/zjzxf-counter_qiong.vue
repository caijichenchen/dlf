<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfQiong1[pickerIndex.zjzxfQiong1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfQiong_standard" :value="pickerIndex.zjzxfQiong_standard"
			 :range="multiSelector.zjzxfQiong_standard">
				<view class="title">
					{{multiSelector.zjzxfQiong_standard[pickerIndex.zjzxfQiong_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1421,multiSelector.zjzxfQiong_standard[pickerIndex.zjzxfQiong_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfQiong_category" :value="pickerIndex.zjzxfQiong_category"
			 :range="multiSelector.zjzxfQiong_category">
				<view class="picker">
					{{multiSelector.zjzxfQiong_category[pickerIndex.zjzxfQiong_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong5 ">
			<view class="title">{{multiSelector.zjzxfQiong5}}</view>
			<input v-model="needVal.zjzxfQiong_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfQiong_sdeTitle">{{multiSelector.zjzxfQiong_sdeTitle}}</view>
			<input v-model="needVal.zjzxfQiong_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong8 ">
			<view class="title">{{multiSelector.zjzxfQiong8}}</view>
			<input v-model="needVal.zjzxfQiong_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQiong10 ">
			<view class="title">{{multiSelector.zjzxfQiong10}}</view>
			<input v-model="needVal.zjzxfQiong_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfQiong_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-qiong.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfQiong_standard: '',
					zjzxfQiong_graded: '',
					zjzxfQiong_category: '',
					zjzxfQiong_ztz: '',
					zjzxfQiong_fl: '',
					zjzxfQiong_sdeTitle: '',
					zjzxfQiong_sde: '',
					zjzxfQiong_hzhjcgb: '',
					zjzxfQiong_sffl: '',
					zjzxfQiong_discount: '90',
					type: 'zjzxfQiong'
				},
				multiSelector: {
					zjzxfQiong1: [],
					zjzxfQiong_standard: [],
					zjzxfQiong_graded: [],
					zjzxfQiong_category: [],
					zjzxfQiong5: '',
					zjzxfQiong_fl: '',
					zjzxfQiong_sdeTitle: '',
					zjzxfQiong8: '',
					zjzxfQiong_hzhjcgb: '',
					zjzxfQiong10: '',
					zjzxfQiong_sffl: '',
				},
				pickerIndex: {
					zjzxfQiong1: 0,
					zjzxfQiong_standard: 0,
					zjzxfQiong_category: 0,
				},
				showSelector: {
					zjzxfQiong1: true,
					zjzxfQiong_standard: true,
					zjzxfQiong_graded: false,
					zjzxfQiong_category: true,
					zjzxfQiong5: true,
					zjzxfQiong_fl: false,
					zjzxfQiong_sdeTitle: true,
					zjzxfQiong8: true,
					zjzxfQiong_hzhjcgb: false,
					zjzxfQiong10: true,
					zjzxfQiong_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxqiong1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxqiong2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxqiong3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
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
