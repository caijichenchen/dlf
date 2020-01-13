<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">宁夏造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfNing1[pickerIndex.zjzxfNing1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfNing_standard" :value="pickerIndex.zjzxfNing_standard"
			 :range="multiSelector.zjzxfNing_standard">
				<view class="picker">
					{{multiSelector.zjzxfNing_standard[pickerIndex.zjzxfNing_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1554,multiSelector.zjzxfNing_standard[pickerIndex.zjzxfNing_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfNing_category" :value="pickerIndex.zjzxfNing_category"
			 :range="multiSelector.zjzxfNing_category">
				<view class="picker">
					{{multiSelector.zjzxfNing_category[pickerIndex.zjzxfNing_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing5 ">
			<view class="title">{{multiSelector.zjzxfNing5}}</view>
			<input v-model="needVal.zjzxfNing_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfNing_sdeTitle">{{multiSelector.zjzxfNing_sdeTitle}}</view>
			<input v-model="needVal.zjzxfNing_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing8 ">
			<view class="title">{{multiSelector.zjzxfNing8}}</view>
			<input v-model="needVal.zjzxfNing_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfNing10 ">
			<view class="title">{{multiSelector.zjzxfNing10}}</view>
			<input v-model="needVal.zjzxfNing_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfNing_discount" /></input>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-ning.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfNing_standard: '',
					zjzxfNing_graded: '',
					zjzxfNing_category: '',
					zjzxfNing_ztz: '',
					zjzxfNing_fl: '',
					zjzxfNing_sdeTitle: '',
					zjzxfNing_sde: '',
					zjzxfNing_hzhjcgb: '',
					zjzxfNing_sffl: '',
					zjzxfNing_discount: '90',
					type: 'zjzxfNing'
				},
				multiSelector: {
					zjzxfNing1: [],
					zjzxfNing_standard: [],
					zjzxfNing_graded: [],
					zjzxfNing_category: [],
					zjzxfNing5: '',
					zjzxfNing_fl: '',
					zjzxfNing_sdeTitle: '',
					zjzxfNing8: '',
					zjzxfNing_hzhjcgb: '',
					zjzxfNing10: '',
					zjzxfNing_sffl: '',
				},
				pickerIndex: {
					zjzxfNing1: 0,
					zjzxfNing_standard: 0,
					zjzxfNing_category: 0,
				},
				showSelector: {
					zjzxfNing1: true,
					zjzxfNing_standard: true,
					zjzxfNing_graded: false,
					zjzxfNing_category: true,
					zjzxfNing5: true,
					zjzxfNing_fl: false,
					zjzxfNing_sdeTitle: true,
					zjzxfNing8: true,
					zjzxfNing_hzhjcgb: false,
					zjzxfNing10: true,
					zjzxfNing_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxming1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxming2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxming3",
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
