<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfGuo1[pickerIndex.zjzxfGuo1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo_standard">
			<view class="title">咨询标准</view>
			<view class="title">
				{{multiSelector.zjzxfGuo_standard[pickerIndex.zjzxfGuo_standard]}}
			</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(110,multiSelector.zjzxfGuo_standard[pickerIndex.zjzxfGuo_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfGuo_category" :value="pickerIndex.zjzxfGuo_category"
			 :range="multiSelector.zjzxfGuo_category">
				<view class="picker">
					{{multiSelector.zjzxfGuo_category[pickerIndex.zjzxfGuo_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo5 ">
			<view class="title">{{multiSelector.zjzxfGuo5}}</view>
			<input type="digit" v-model="needVal.zjzxfGuo_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfGuo_sdeTitle">{{multiSelector.zjzxfGuo_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfGuo_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo8 ">
			<view class="title">{{multiSelector.zjzxfGuo8}}</view>
			<input type="digit" v-model="needVal.zjzxfGuo_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfGuo10 ">
			<view class="title">{{multiSelector.zjzxfGuo10}}</view>
			<input type="digit" v-model="needVal.zjzxfGuo_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfGuo_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-guo.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfGuo_standard: '',
					zjzxfGuo_graded: '',
					zjzxfGuo_category: '',
					zjzxfGuo_ztz: '',
					zjzxfGuo_fl: '',
					zjzxfGuo_sdeTitle: '',
					zjzxfGuo_sde: '',
					zjzxfGuo_hzhjcgb: '',
					zjzxfGuo_sffl: '',
					zjzxfGuo_discount: '90',
					type: 'zjzxfGuo'
				},
				multiSelector: {
					zjzxfGuo1: [],
					zjzxfGuo_standard: [],
					zjzxfGuo_graded: [],
					zjzxfGuo_category: [],
					zjzxfGuo5: '',
					zjzxfGuo_fl: '',
					zjzxfGuo_sdeTitle: '',
					zjzxfGuo8: '',
					zjzxfGuo_hzhjcgb: '',
					zjzxfGuo10: '',
					zjzxfGuo_sffl: '',
				},
				pickerIndex: {
					zjzxfGuo1: 0,
					zjzxfGuo_standard: 0,
					zjzxfGuo_category: 0,
				},
				showSelector: {
					zjzxfGuo1: true,
					zjzxfGuo_standard: true,
					zjzxfGuo_graded: false,
					zjzxfGuo_category: true,
					zjzxfGuo5: true,
					zjzxfGuo_fl: false,
					zjzxfGuo_sdeTitle: true,
					zjzxfGuo8: true,
					zjzxfGuo_hzhjcgb: false,
					zjzxfGuo10: true,
					zjzxfGuo_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxguo1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxguo2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxguo3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-guo.json',
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
