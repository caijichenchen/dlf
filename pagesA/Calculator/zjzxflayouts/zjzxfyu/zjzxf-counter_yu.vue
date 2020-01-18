<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河南省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfYu1[pickerIndex.zjzxfYu1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfYu_standard" :value="pickerIndex.zjzxfYu_standard"
			 :range="multiSelector.zjzxfYu_standard">
				<view class="picker">
					{{multiSelector.zjzxfYu_standard[pickerIndex.zjzxfYu_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(111,multiSelector.zjzxfGui_standard[pickerIndex.zjzxfGui_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfYu_category" :value="pickerIndex.zjzxfYu_category"
			 :range="multiSelector.zjzxfYu_category">
				<view class="picker">
					{{multiSelector.zjzxfYu_category[pickerIndex.zjzxfYu_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu5 ">
			<view class="title">{{multiSelector.zjzxfYu5}}</view>
			<input v-model="needVal.zjzxfYu_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu7 ">
			<view class="title">{{multiSelector.zjzxfYu7}}</view>
			<input v-model="needVal.zjzxfYu_jbfl" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfYu_sdeTitle">{{multiSelector.zjzxfYu_sdeTitle}}</view>
			<input v-model="needVal.zjzxfYu_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu10 ">
			<view class="title">{{multiSelector.zjzxfYu10}}</view>
			<input v-model="needVal.zjzxfYu_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYu12 ">
			<view class="title">{{multiSelector.zjzxfYu12}}</view>
			<input v-model="needVal.zjzxfYu_sffl" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfYu_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-yu.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfYu_standard: '',
					zjzxfYu_graded: '',
					zjzxfYu_category: '',
					zjzxfYu_ztz: '',
					zjzxfYu_fl: '',
					zjzxfYu_jbfl:'',
					zjzxfYu_sdeTitle: '',
					zjzxfYu_sde: '',
					zjzxfYu_hzhjcgb: '',
					zjzxfYu_sffl: '',
					zjzxfYu_discount: '90',
					type: 'zjzxfYu'
				},
				multiSelector: {
					zjzxfYu1: [],
					zjzxfYu_standard: [],
					zjzxfYu_graded: [],
					zjzxfYu_category: [],
					zjzxfYu5: '',
					zjzxfYu_fl: '',
					zjzxfYu7: '',
					zjzxfYu_jbfl: '',
					zjzxfYu_sdeTitle: '',
					zjzxfYu10: '',
					zjzxfYu_hzhjcgb: '',
					zjzxfYu12: '',
					zjzxfYu_sffl: '',
				},
				pickerIndex: {
					zjzxfYu1: 0,
					zjzxfYu_standard: 0,
					zjzxfYu_category: 0,
				},
				showSelector: {
					zjzxfYu1: true,
					zjzxfYu_standard: true,
					zjzxfYu_graded: false,
					zjzxfYu_category: true,
					zjzxfYu5: true,
					zjzxfYu_fl: false,
					zjzxfYu7: false,
					zjzxfYu_jbfl: false,
					zjzxfYu_sdeTitle: true,
					zjzxfYu10: true,
					zjzxfYu_hzhjcgb: false,
					zjzxfYu12: true,
					zjzxfYu_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxyu1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxyu2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxyu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-yu.json',
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
