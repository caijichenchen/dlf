<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">吉林省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfJilin1[pickerIndex.zjzxfJilin1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJilin_standard" :value="pickerIndex.zjzxfJilin_standard"
			 :range="multiSelector.zjzxfJilin_standard">
				<view class="picker">
					{{multiSelector.zjzxfJilin_standard[pickerIndex.zjzxfJilin_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(114,multiSelector.zjzxfJilin_standard[pickerIndex.zjzxfJilin_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJilin_category" :value="pickerIndex.zjzxfJilin_category"
			 :range="multiSelector.zjzxfJilin_category">
				<view class="picker">
					{{multiSelector.zjzxfJilin_category[pickerIndex.zjzxfJilin_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin5 ">
			<view class="title">{{multiSelector.zjzxfJilin5}}</view>
			<input v-model="needVal.zjzxfJilin_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfJilin_sdeTitle">{{multiSelector.zjzxfJilin_sdeTitle}}</view>
			<input v-model="needVal.zjzxfJilin_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin8 ">
			<view class="title">{{multiSelector.zjzxfJilin8}}</view>
			<input v-model="needVal.zjzxfJilin_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJilin10 ">
			<view class="title">{{multiSelector.zjzxfJilin10}}</view>
			<input v-model="needVal.zjzxfJilin_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfJilin_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-jilin.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfJilin_standard: '',
					zjzxfJilin_graded: '',
					zjzxfJilin_category: '',
					zjzxfJilin_ztz: '',
					zjzxfJilin_fl: '',
					zjzxfJilin_sdeTitle: '',
					zjzxfJilin_sde: '',
					zjzxfJilin_hzhjcgb: '',
					zjzxfJilin_sffl: '',
					zjzxfJilin_discount: '90',
					type: 'zjzxfJilin'
				},
				multiSelector: {
					zjzxfJilin1: [],
					zjzxfJilin_standard: [],
					zjzxfJilin_graded: [],
					zjzxfJilin_category: [],
					zjzxfJilin5: '',
					zjzxfJilin_fl: '',
					zjzxfJilin_sdeTitle: '',
					zjzxfJilin8: '',
					zjzxfJilin_hzhjcgb: '',
					zjzxfJilin10: '',
					zjzxfJilin_sffl: '',
				},
				pickerIndex: {
					zjzxfJilin1: 0,
					zjzxfJilin_standard: 0,
					zjzxfJilin_category: 0,
				},
				showSelector: {
					zjzxfJilin1: true,
					zjzxfJilin_standard: true,
					zjzxfJilin_graded: false,
					zjzxfJilin_category: true,
					zjzxfJilin5: true,
					zjzxfJilin_fl: false,
					zjzxfJilin_sdeTitle: true,
					zjzxfJilin8: true,
					zjzxfJilin_hzhjcgb: false,
					zjzxfJilin10: true,
					zjzxfJilin_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxjilin1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxjilin2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxjilin3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-jilin.json',
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
