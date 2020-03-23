<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">天津造价咨询费造价咨询费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfTianjin1[pickerIndex.zjzxfTianjin1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfTianjin_standard" :value="pickerIndex.zjzxfTianjin_standard"
			 :range="multiSelector.zjzxfTianjin_standard">
				<view class="picker">
					{{multiSelector.zjzxfTianjin_standard[pickerIndex.zjzxfTianjin_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(318,multiSelector.zjzxfTianjin_standard[pickerIndex.zjzxfTianjin_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfTianjin_category" :value="pickerIndex.zjzxfTianjin_category"
			 :range="multiSelector.zjzxfTianjin_category">
				<view class="picker">
					{{multiSelector.zjzxfTianjin_category[pickerIndex.zjzxfTianjin_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin5 ">
			<view class="title">{{multiSelector.zjzxfTianjin5}}</view>
			<input type="digit" v-model="needVal.zjzxfTianjin_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfTianjin_sdeTitle">{{multiSelector.zjzxfTianjin_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfTianjin_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin8 ">
			<view class="title">{{multiSelector.zjzxfTianjin8}}</view>
			<input type="digit" v-model="needVal.zjzxfTianjin_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfTianjin10 ">
			<view class="title">{{multiSelector.zjzxfTianjin10}}</view>
			<input type="digit" v-model="needVal.zjzxfTianjin_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfTianjin_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-tianjin.json'
	
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
					zjzxfTianjin_standard: '',
					zjzxfTianjin_graded: '',
					zjzxfTianjin_category: '',
					zjzxfTianjin_ztz: '',
					zjzxfTianjin_fl: '',
					zjzxfTianjin_sdeTitle: '',
					zjzxfTianjin_sde: '',
					zjzxfTianjin_hzhjcgb: '',
					zjzxfTianjin_sffl: '',
					zjzxfTianjin_discount: '90',
					type: 'zjzxfTianjin'
				},
				multiSelector: {
					zjzxfTianjin1: [],
					zjzxfTianjin_standard: [],
					zjzxfTianjin_graded: [],
					zjzxfTianjin_category: [],
					zjzxfTianjin5: '',
					zjzxfTianjin_fl: '',
					zjzxfTianjin_sdeTitle: '',
					zjzxfTianjin8: '',
					zjzxfTianjin_hzhjcgb: '',
					zjzxfTianjin10: '',
					zjzxfTianjin_sffl: '',
				},
				pickerIndex: {
					zjzxfTianjin1: 0,
					zjzxfTianjin_standard: 0,
					zjzxfTianjin_category: 0,
				},
				showSelector: {
					zjzxfTianjin1: true,
					zjzxfTianjin_standard: true,
					zjzxfTianjin_graded: false,
					zjzxfTianjin_category: true,
					zjzxfTianjin5: true,
					zjzxfTianjin_fl: false,
					zjzxfTianjin_sdeTitle: true,
					zjzxfTianjin8: true,
					zjzxfTianjin_hzhjcgb: false,
					zjzxfTianjin10: true,
					zjzxfTianjin_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxtj1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxtj2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxtj3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-tianjin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zjzxfTianjin_ztz = val
			}
		}
	}
</script>

<style>
</style>
