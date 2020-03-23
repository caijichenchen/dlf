<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfHu1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfHu1[pickerIndex.zjzxfHu1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHu_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfHu_standard" :value="pickerIndex.zjzxfHu_standard"
			 :range="multiSelector.zjzxfHu_standard">
				<view class="picker">
					{{multiSelector.zjzxfHu_standard[pickerIndex.zjzxfHu_standard]}}
				</view>
				</picker>
			<!-- <button class="m-r" type="primary" size="mini" @tap="checkDeatil(1485,multiSelector.zjzxfGan_standard[pickerIndex.zjzxfGan_standard])">点击查看</button> -->
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHu_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfHu_category" :value="pickerIndex.zjzxfHu_category"
			 :range="multiSelector.zjzxfHu_category">
				<view class="picker">
					{{multiSelector.zjzxfHu_category[pickerIndex.zjzxfHu_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHu5 ">
			<view class="title">{{multiSelector.zjzxfHu5}}</view>
			<input type="digit" v-model="needVal.zjzxfHu_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfHu_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-hu.json'
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
					zjzxfHu_standard: '',
					zjzxfHu_graded: '',
					zjzxfHu_category: '',
					zjzxfHu_ztz: '',
					zjzxfHu_fl: '',
					zjzxfHu_discount: '90',
					type: 'zjzxfHu'
				},
				multiSelector: {
					zjzxfHu1: [],
					zjzxfHu_standard: [],
					zjzxfHu_graded: [],
					zjzxfHu_category: [],
					zjzxfHu5: '',
					zjzxfHu_fl: '',
				},
				pickerIndex: {
					zjzxfHu1: 0,
					zjzxfHu_standard: 0,
					zjzxfHu_category: 0,
				},
				showSelector: {
					zjzxfHu1: true,
					zjzxfHu_standard: true,
					zjzxfHu_graded: false,
					zjzxfHu_category: true,
					zjzxfHu5: true,
					zjzxfHu_fl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxhu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-hu.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfHu_ztz = val
			}
		}
	}
</script>

<style>
</style>
