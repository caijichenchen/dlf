<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">北京市造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfJing1[pickerIndex.zjzxfJing1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJing_standard" :value="pickerIndex.zjzxfJing_standard"
			 :range="multiSelector.zjzxfJing_standard">
				<view class="title">
					{{multiSelector.zjzxfJing_standard[pickerIndex.zjzxfJing_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(105,multiSelector.zjzxfJing_standard[pickerIndex.zjzxfJing_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJing_category" :value="pickerIndex.zjzxfJing_category"
			 :range="multiSelector.zjzxfJing_category">
				<view class="picker">
					{{multiSelector.zjzxfJing_category[pickerIndex.zjzxfJing_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing5 ">
			<view class="title">{{multiSelector.zjzxfJing5}}</view>
			<input type="digit" v-model="needVal.zjzxfJing_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfJing_sdeTitle">{{multiSelector.zjzxfJing_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfJing_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing8 ">
			<view class="title">{{multiSelector.zjzxfJing8}}</view>
			<input type="digit" v-model="needVal.zjzxfJing_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJing10 ">
			<view class="title">{{multiSelector.zjzxfJing10}}</view>
			<input type="digit" v-model="needVal.zjzxfJing_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfJing_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-jing.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[String,Number],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					zjzxfJing_standard: '',
					zjzxfJing_graded: '',
					zjzxfJing_category: '',
					zjzxfJing_ztz: '',
					zjzxfJing_fl: '',
					zjzxfJing_sdeTitle: '',
					zjzxfJing_sde: '',
					zjzxfJing_hzhjcgb: '',
					zjzxfJing_sffl: '',
					zjzxfJing_discount: '90',
					type: 'zjzxfJing'
				},
				multiSelector: {
					zjzxfJing1: [],
					zjzxfJing_standard: [],
					zjzxfJing_graded: [],
					zjzxfJing_category: [],
					zjzxfJing5: '',
					zjzxfJing_fl: '',
					zjzxfJing_sdeTitle: '',
					zjzxfJing8: '',
					zjzxfJing_hzhjcgb: '',
					zjzxfJing10: '',
					zjzxfJing_sffl: '',
				},
				pickerIndex: {
					zjzxfJing1: 0,
					zjzxfJing_standard: 0,
					zjzxfJing_category: 0,
				},
				showSelector: {
					zjzxfJing1: true,
					zjzxfJing_standard: true,
					zjzxfJing_graded: false,
					zjzxfJing_category: true,
					zjzxfJing5: true,
					zjzxfJing_fl: false,
					zjzxfJing_sdeTitle: true,
					zjzxfJing8: true,
					zjzxfJing_hzhjcgb: false,
					zjzxfJing10: true,
					zjzxfJing_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxjing1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxjing2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxjing3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-jing.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(value){
				this.needVal.zjzxfJing_ztz = value
			}
		}
	}
</script>

<style>
</style>
