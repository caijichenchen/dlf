<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">贵州省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfQian1[pickerIndex.zjzxfQian1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfQian_standard[pickerIndex.zjzxfQian_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(109,multiSelector.zjzxfQian_standard[pickerIndex.zjzxfQian_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfQian_category" :value="pickerIndex.zjzxfQian_category"
			 :range="multiSelector.zjzxfQian_category">
				<view class="picker">
					{{multiSelector.zjzxfQian_category[pickerIndex.zjzxfQian_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian5 ">
			<view class="title">{{multiSelector.zjzxfQian5}}</view>
			<input v-model="needVal.zjzxfQian_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfQian_sdeTitle">{{multiSelector.zjzxfQian_sdeTitle}}</view>
			<input v-model="needVal.zjzxfQian_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian8 ">
			<view class="title">{{multiSelector.zjzxfQian8}}</view>
			<input v-model="needVal.zjzxfQian_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQian10 ">
			<view class="title">{{multiSelector.zjzxfQian10}}</view>
			<input v-model="needVal.zjzxfQian_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfQian_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-qian.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfQian_standard: '',
					zjzxfQian_graded: '',
					zjzxfQian_category: '',
					zjzxfQian_ztz: '',
					zjzxfQian_fl: '',
					zjzxfQian_sdeTitle: '',
					zjzxfQian_sde: '',
					zjzxfQian_hzhjcgb: '',
					zjzxfQian_sffl: '',
					zjzxfQian_discount: '90',
					type: 'zjzxfQian'
				},
				multiSelector: {
					zjzxfQian1: [],
					zjzxfQian_standard: [],
					zjzxfQian_graded: [],
					zjzxfQian_category: [],
					zjzxfQian5: '',
					zjzxfQian_fl: '',
					zjzxfQian_sdeTitle: '',
					zjzxfQian8: '',
					zjzxfQian_hzhjcgb: '',
					zjzxfQian10: '',
					zjzxfQian_sffl: '',
				},
				pickerIndex: {
					zjzxfQian1: 0,
					zjzxfQian_standard: 0,
					zjzxfQian_category: 0,
				},
				showSelector: {
					zjzxfQian1: true,
					zjzxfQian_standard: true,
					zjzxfQian_graded: false,
					zjzxfQian_category: true,
					zjzxfQian5: true,
					zjzxfQian_fl: false,
					zjzxfQian_sdeTitle: true,
					zjzxfQian8: true,
					zjzxfQian_hzhjcgb: false,
					zjzxfQian10: true,
					zjzxfQian_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxqian1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxqian2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxqian3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-qian.json',
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
