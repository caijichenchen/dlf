<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山东省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfLu1[pickerIndex.zjzxfLu1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfLu_standard" :value="pickerIndex.zjzxfLu_standard"
			 :range="multiSelector.zjzxfLu_standard">
				<view class="picker">
					{{multiSelector.zjzxfLu_standard[pickerIndex.zjzxfLu_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1488,multiSelector.zjzxfLu_standard[pickerIndex.zjzxfLu_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfLu_category" :value="pickerIndex.zjzxfLu_category"
			 :range="multiSelector.zjzxfLu_category">
				<view class="picker">
					{{multiSelector.zjzxfLu_category[pickerIndex.zjzxfLu_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu5 ">
			<view class="title">{{multiSelector.zjzxfLu5}}</view>
			<input type="digit" v-model="needVal.zjzxfLu_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfLu_sdeTitle">{{multiSelector.zjzxfLu_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfLu_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu8 ">
			<view class="title">{{multiSelector.zjzxfLu8}}</view>
			<input type="digit" v-model="needVal.zjzxfLu_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLu10 ">
			<view class="title">{{multiSelector.zjzxfLu10}}</view>
			<input type="digit" v-model="needVal.zjzxfLu_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfLu_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-lu.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfLu_standard: '',
					zjzxfLu_graded: '',
					zjzxfLu_category: '',
					zjzxfLu_ztz: '',
					zjzxfLu_fl: '',
					zjzxfLu_sdeTitle: '',
					zjzxfLu_sde: '',
					zjzxfLu_hzhjcgb: '',
					zjzxfLu_sffl: '',
					zjzxfLu_discount: '90',
					type: 'zjzxfLu'
				},
				multiSelector: {
					zjzxfLu1: [],
					zjzxfLu_standard: [],
					zjzxfLu_graded: [],
					zjzxfLu_category: [],
					zjzxfLu5: '',
					zjzxfLu_fl: '',
					zjzxfLu_sdeTitle: '',
					zjzxfLu8: '',
					zjzxfLu_hzhjcgb: '',
					zjzxfLu10: '',
					zjzxfLu_sffl: '',
				},
				pickerIndex: {
					zjzxfLu1: 0,
					zjzxfLu_standard: 0,
					zjzxfLu_category: 0,
				},
				showSelector: {
					zjzxfLu1: true,
					zjzxfLu_standard: true,
					zjzxfLu_graded: false,
					zjzxfLu_category: true,
					zjzxfLu5: true,
					zjzxfLu_fl: false,
					zjzxfLu_sdeTitle: true,
					zjzxfLu8: true,
					zjzxfLu_hzhjcgb: false,
					zjzxfLu10: true,
					zjzxfLu_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxlu1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxlu2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxlu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-lu.json',
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
