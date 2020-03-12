<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfHei1[pickerIndex.zjzxfHei1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfHei_standard[pickerIndex.zjzxfHei_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(112,multiSelector.zjzxfHei_standard[pickerIndex.zjzxfHei_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfHei_category" :value="pickerIndex.zjzxfHei_category"
			 :range="multiSelector.zjzxfHei_category">
				<view class="picker">
					{{multiSelector.zjzxfHei_category[pickerIndex.zjzxfHei_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei5 ">
			<view class="title">{{multiSelector.zjzxfHei5}}</view>
			<input type="digit" v-model="needVal.zjzxfHei_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfHei_sdeTitle">{{multiSelector.zjzxfHei_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfHei_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei8 ">
			<view class="title">{{multiSelector.zjzxfHei8}}</view>
			<input type="digit" v-model="needVal.zjzxfHei_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfHei10 ">
			<view class="title">{{multiSelector.zjzxfHei10}}</view>
			<input type="digit" v-model="needVal.zjzxfHei_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfHei_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-hei.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfHei_standard: '',
					zjzxfHei_graded: '',
					zjzxfHei_category: '',
					zjzxfHei_ztz: '',
					zjzxfHei_fl: '',
					zjzxfHei_sdeTitle: '',
					zjzxfHei_sde: '',
					zjzxfHei_hzhjcgb: '',
					zjzxfHei_sffl: '',
					zjzxfHei_discount: '90',
					type: 'zjzxfHei'
				},
				multiSelector: {
					zjzxfHei1: [],
					zjzxfHei_standard: [],
					zjzxfHei_graded: [],
					zjzxfHei_category: [],
					zjzxfHei5: '',
					zjzxfHei_fl: '',
					zjzxfHei_sdeTitle: '',
					zjzxfHei8: '',
					zjzxfHei_hzhjcgb: '',
					zjzxfHei10: '',
					zjzxfHei_sffl: '',
				},
				pickerIndex: {
					zjzxfHei1: 0,
					zjzxfHei_standard: 0,
					zjzxfHei_category: 0,
				},
				showSelector: {
					zjzxfHei1: true,
					zjzxfHei_standard: true,
					zjzxfHei_graded: false,
					zjzxfHei_category: true,
					zjzxfHei5: true,
					zjzxfHei_fl: false,
					zjzxfHei_sdeTitle: true,
					zjzxfHei8: true,
					zjzxfHei_hzhjcgb: false,
					zjzxfHei10: true,
					zjzxfHei_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxhei1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxhei2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxhei3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-hei.json',
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
