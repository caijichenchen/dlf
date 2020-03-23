<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖北造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfE1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfE1[pickerIndex.zjzxfE1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfE_standard" :value="pickerIndex.zjzxfE_standard"
			 :range="multiSelector.zjzxfE_standard">
				<view class="picker">
					{{multiSelector.zjzxfE_standard[pickerIndex.zjzxfE_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(113,multiSelector.zjzxfE_standard[pickerIndex.zjzxfE_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfE_category" :value="pickerIndex.zjzxfE_category"
			 :range="multiSelector.zjzxfE_category">
				<view class="picker">
					{{multiSelector.zjzxfE_category[pickerIndex.zjzxfE_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE5 ">
			<view class="title">{{multiSelector.zjzxfE5}}</view>
			<input type="digit" v-model="needVal.zjzxfE_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfE_sdeTitle">{{multiSelector.zjzxfE_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfE_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE8 ">
			<view class="title">{{multiSelector.zjzxfE8}}</view>
			<input type="digit" v-model="needVal.zjzxfE_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfE10 ">
			<view class="title">{{multiSelector.zjzxfE10}}</view>
			<input type="digit" v-model="needVal.zjzxfE_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfE_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-e.json'
	
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
					zjzxfE_standard: '',
					zjzxfE_graded: '',
					zjzxfE_category: '',
					zjzxfE_ztz: '',
					zjzxfE_fl: '',
					zjzxfE_sdeTitle: '',
					zjzxfE_sde: '',
					zjzxfE_hzhjcgb: '',
					zjzxfE_sffl: '',
					zjzxfE_discount: '90',
					type: 'zjzxfE'
				},
				multiSelector: {
					zjzxfE1: [],
					zjzxfE_standard: [],
					zjzxfE_graded: [],
					zjzxfE_category: [],
					zjzxfE5: '',
					zjzxfE_fl: '',
					zjzxfE_sdeTitle: '',
					zjzxfE8: '',
					zjzxfE_hzhjcgb: '',
					zjzxfE10: '',
					zjzxfE_sffl: '',
				},
				pickerIndex: {
					zjzxfE1: 0,
					zjzxfE_standard: 0,
					zjzxfE_category: 0,
				},
				showSelector: {
					zjzxfE1: true,
					zjzxfE_standard: true,
					zjzxfE_graded: false,
					zjzxfE_category: true,
					zjzxfE5: true,
					zjzxfE_fl: false,
					zjzxfE_sdeTitle: true,
					zjzxfE8: true,
					zjzxfE_hzhjcgb: false,
					zjzxfE10: true,
					zjzxfE_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxe1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxe2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxe3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-e.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfE_ztz = val
			}
		}
	}
</script>

<style>
</style>
