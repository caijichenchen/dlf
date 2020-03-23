<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江西省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfGan1[pickerIndex.zjzxfGan1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfGan_standard" :value="pickerIndex.zjzxfGan_standard"
			 :range="multiSelector.zjzxfGan_standard">
				<view class="picker">
					{{multiSelector.zjzxfGan_standard[pickerIndex.zjzxfGan_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(126,multiSelector.zjzxfGan_standard[pickerIndex.zjzxfGan_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfGan_category" :value="pickerIndex.zjzxfGan_category"
			 :range="multiSelector.zjzxfGan_category">
				<view class="picker">
					{{multiSelector.zjzxfGan_category[pickerIndex.zjzxfGan_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan5 ">
			<view class="title">{{multiSelector.zjzxfGan5}}</view>
			<input type="digit" v-model="needVal.zjzxfGan_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfGan_sdeTitle">{{multiSelector.zjzxfGan_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfGan_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan8 ">
			<view class="title">{{multiSelector.zjzxfGan8}}</view>
			<input type="digit" v-model="needVal.zjzxfGan_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGan10 ">
			<view class="title">{{multiSelector.zjzxfGan10}}</view>
			<input type="digit" v-model="needVal.zjzxfGan_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfGan_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-gan.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					zjzxfGan_standard: '',
					zjzxfGan_graded: '',
					zjzxfGan_category: '',
					zjzxfGan_ztz: '',
					zjzxfGan_fl: '',
					zjzxfGan_sdeTitle: '',
					zjzxfGan_sde: '',
					zjzxfGan_hzhjcgb: '',
					zjzxfGan_sffl: '',
					zjzxfGan_discount: '90',
					type: 'zjzxfGan'
				},
				multiSelector: {
					zjzxfGan1: [],
					zjzxfGan_standard: [],
					zjzxfGan_graded: [],
					zjzxfGan_category: [],
					zjzxfGan5: '',
					zjzxfGan_fl: '',
					zjzxfGan_sdeTitle: '',
					zjzxfGan8: '',
					zjzxfGan_hzhjcgb: '',
					zjzxfGan10: '',
					zjzxfGan_sffl: '',
				},
				pickerIndex: {
					zjzxfGan1: 0,
					zjzxfGan_standard: 0,
					zjzxfGan_category: 0,
				},
				showSelector: {
					zjzxfGan1: true,
					zjzxfGan_standard: true,
					zjzxfGan_graded: false,
					zjzxfGan_category: true,
					zjzxfGan5: true,
					zjzxfGan_fl: false,
					zjzxfGan_sdeTitle: true,
					zjzxfGan8: true,
					zjzxfGan_hzhjcgb: false,
					zjzxfGan10: true,
					zjzxfGan_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxgan1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxgan2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxgan3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-gan.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfGan_ztz = val
			}
		}
	}
</script>

<style>
</style>
