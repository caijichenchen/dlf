<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">甘肃省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfLong1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfLong1[pickerIndex.zjzxfLong1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLong_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfLong_standard[pickerIndex.zjzxfLong_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(106,multiSelector.zjzxfLong_standard[pickerIndex.zjzxfLong_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLong_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfLong_category" :value="pickerIndex.zjzxfLong_category"
			 :range="multiSelector.zjzxfLong_category">
				<view class="picker">
					{{multiSelector.zjzxfLong_category[pickerIndex.zjzxfLong_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLong5 ">
			<view class="title">{{multiSelector.zjzxfLong5}}</view>
			<input type="digit" v-model="needVal.zjzxfLong_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfLong_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-ba.json'
	
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
					zjzxfLong_standard: '',
					zjzxfLong_graded: '',
					zjzxfLong_category: '',
					zjzxfLong_ztz: '',
					zjzxfLong_fl: '',
					zjzxfLong_discount: '90',
					type: 'zjzxfLong'
				},
				multiSelector: {
					zjzxfLong1: [],
					zjzxfLong_standard: [],
					zjzxfLong_graded: [],
					zjzxfLong_category: [],
					zjzxfLong5: '',
					zjzxfLong_fl: '',
				},
				pickerIndex: {
					zjzxfLong1: 0,
					zjzxfLong_standard: 0,
					zjzxfLong_category: 0,
				},
				showSelector: {
					zjzxfLong1: true,
					zjzxfLong_standard: true,
					zjzxfLong_graded: false,
					zjzxfLong_category: true,
					zjzxfLong5: true,
					zjzxfLong_fl: false
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxba3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-long.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfLong_ztz = val
			}
		}
	}
</script>

<style>
</style>
