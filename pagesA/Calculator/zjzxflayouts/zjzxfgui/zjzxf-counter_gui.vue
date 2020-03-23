<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfGui1[pickerIndex.zjzxfGui1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfGui_standard" :value="pickerIndex.zjzxfGui_standard"
			 :range="multiSelector.zjzxfGui_standard">
				<view class="picker">
					{{multiSelector.zjzxfGui_standard[pickerIndex.zjzxfGui_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(108,multiSelector.zjzxfGui_standard[pickerIndex.zjzxfGui_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfGui_category" :value="pickerIndex.zjzxfGui_category"
			 :range="multiSelector.zjzxfGui_category">
				<view class="picker">
					{{multiSelector.zjzxfGui_category[pickerIndex.zjzxfGui_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui5 ">
			<view class="title">{{multiSelector.zjzxfGui5}}</view>
			<input type="digit" v-model="needVal.zjzxfGui_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfGui_sdeTitle">{{multiSelector.zjzxfGui_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfGui_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui8 ">
			<view class="title">{{multiSelector.zjzxfGui8}}</view>
			<input type="digit" v-model="needVal.zjzxfGui_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGui10 ">
			<view class="title">{{multiSelector.zjzxfGui10}}</view>
			<input type="digit" v-model="needVal.zjzxfGui_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfGui_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-gui.json'
	
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
					zjzxfGui_standard: '',
					zjzxfGui_graded: '',
					zjzxfGui_category: '',
					zjzxfGui_ztz: '',
					zjzxfGui_fl: '',
					zjzxfGui_sdeTitle: '',
					zjzxfGui_sde: '',
					zjzxfGui_hzhjcgb: '',
					zjzxfGui_sffl: '',
					zjzxfGui_discount: '90',
					type: 'zjzxfGui'
				},
				multiSelector: {
					zjzxfGui1: [],
					zjzxfGui_standard: [],
					zjzxfGui_graded: [],
					zjzxfGui_category: [],
					zjzxfGui5: '',
					zjzxfGui_fl: '',
					zjzxfGui_sdeTitle: '',
					zjzxfGui8: '',
					zjzxfGui_hzhjcgb: '',
					zjzxfGui10: '',
					zjzxfGui_sffl: '',
				},
				pickerIndex: {
					zjzxfGui1: 0,
					zjzxfGui_standard: 0,
					zjzxfGui_category: 0,
				},
				showSelector: {
					zjzxfGui1: true,
					zjzxfGui_standard: true,
					zjzxfGui_graded: false,
					zjzxfGui_category: true,
					zjzxfGui5: true,
					zjzxfGui_fl: false,
					zjzxfGui_sdeTitle: true,
					zjzxfGui8: true,
					zjzxfGui_hzhjcgb: false,
					zjzxfGui10: true,
					zjzxfGui_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxfgui1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxfgui2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxfgui3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-gui.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfGui_ztz = val
			}
		}
	}
</script>

<style>
</style>
