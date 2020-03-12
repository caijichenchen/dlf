<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfMeng1[pickerIndex.zjzxfMeng1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfMeng_standard" :value="pickerIndex.zjzxfMeng_standard"
			 :range="multiSelector.zjzxfMeng_standard">
				<view class="picker">
					{{multiSelector.zjzxfMeng_standard[pickerIndex.zjzxfMeng_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1489,multiSelector.zjzxfMeng_standard[pickerIndex.zjzxfMeng_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfMeng_category" :value="pickerIndex.zjzxfMeng_category"
			 :range="multiSelector.zjzxfMeng_category">
				<view class="picker">
					{{multiSelector.zjzxfMeng_category[pickerIndex.zjzxfMeng_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng5 ">
			<view class="title">{{multiSelector.zjzxfMeng5}}</view>
			<input type="digit" v-model="needVal.zjzxfMeng_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfMeng_sdeTitle">{{multiSelector.zjzxfMeng_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfMeng_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng8 ">
			<view class="title">{{multiSelector.zjzxfMeng8}}</view>
			<input type="digit" v-model="needVal.zjzxfMeng_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMeng10 ">
			<view class="title">{{multiSelector.zjzxfMeng10}}</view>
			<input type="digit" v-model="needVal.zjzxfMeng_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfMeng_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-meng.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfMeng_standard: '',
					zjzxfMeng_graded: '',
					zjzxfMeng_category: '',
					zjzxfMeng_ztz: '',
					zjzxfMeng_fl: '',
					zjzxfMeng_sdeTitle: '',
					zjzxfMeng_sde: '',
					zjzxfMeng_hzhjcgb: '',
					zjzxfMeng_sffl: '',
					zjzxfMeng_discount: '90',
					type: 'zjzxfMeng'
				},
				multiSelector: {
					zjzxfMeng1: [],
					zjzxfMeng_standard: [],
					zjzxfMeng_graded: [],
					zjzxfMeng_category: [],
					zjzxfMeng5: '',
					zjzxfMeng_fl: '',
					zjzxfMeng_sdeTitle: '',
					zjzxfMeng8: '',
					zjzxfMeng_hzhjcgb: '',
					zjzxfMeng10: '',
					zjzxfMeng_sffl: '',
				},
				pickerIndex: {
					zjzxfMeng1: 0,
					zjzxfMeng_standard: 0,
					zjzxfMeng_category: 0,
				},
				showSelector: {
					zjzxfMeng1: true,
					zjzxfMeng_standard: true,
					zjzxfMeng_graded: false,
					zjzxfMeng_category: true,
					zjzxfMeng5: true,
					zjzxfMeng_fl: false,
					zjzxfMeng_sdeTitle: true,
					zjzxfMeng8: true,
					zjzxfMeng_hzhjcgb: false,
					zjzxfMeng10: true,
					zjzxfMeng_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxmeng1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxmeng2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxmeng3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-meng.json',
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
