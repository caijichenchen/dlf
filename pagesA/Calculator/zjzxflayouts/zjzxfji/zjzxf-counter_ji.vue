<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfJi1[pickerIndex.zjzxfJi1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfJi_standard[pickerIndex.zjzxfJi_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(959,multiSelector.zjzxfJi_standard[pickerIndex.zjzxfJi_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJi_category" :value="pickerIndex.zjzxfJi_category"
			 :range="multiSelector.zjzxfJi_category">
				<view class="picker">
					{{multiSelector.zjzxfJi_category[pickerIndex.zjzxfJi_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi5 ">
			<view class="title">{{multiSelector.zjzxfJi5}}</view>
			<input type="digit" v-model="needVal.zjzxfJi_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfJi_sdeTitle">{{multiSelector.zjzxfJi_sdeTitle}}</view>
			<input type="digit" v-model="needVal.zjzxfJi_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi8 ">
			<view class="title">{{multiSelector.zjzxfJi8}}</view>
			<input type="digit" v-model="needVal.zjzxfJi_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJi10 ">
			<view class="title">{{multiSelector.zjzxfJi10}}</view>
			<input type="digit" v-model="needVal.zjzxfJi_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">专业调整系数</view>
			<input type="digit" v-model="needVal.zjzxfJi_zytzxs" /></input>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfJi_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfJi_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
		<tzxsJi :showModalName="showModalName" v-on:hideModal="hideModal"></tzxsJi>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/zjzxfs/zjzxfs-ji.json'
	import tzxsJi from './zjzxfJi_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfJi_standard: '',
					zjzxfJi_graded: '',
					zjzxfJi_category: '',
					zjzxfJi_ztz: '',
					zjzxfJi_fl: '',
					zjzxfJi_sdeTitle: '',
					zjzxfJi_sde: '',
					zjzxfJi_hzhjcgb: '',
					zjzxfJi_sffl: '',
					zjzxfJi_zytzxs: '1',
					zjzxfJi_discount: '90',
					type: 'zjzxfJi'
				},
				multiSelector: {
					zjzxfJi1: [],
					zjzxfJi_standard: [],
					zjzxfJi_graded: [],
					zjzxfJi_category: [],
					zjzxfJi5: '',
					zjzxfJi_fl: '',
					zjzxfJi_sdeTitle: '',
					zjzxfJi8: '',
					zjzxfJi_hzhjcgb: '',
					zjzxfJi10: '',
					zjzxfJi_sffl: '',
				},
				pickerIndex: {
					zjzxfJi1: 0,
					zjzxfJi_standard: 0,
					zjzxfJi_category: 0,
				},
				showSelector: {
					zjzxfJi1: true,
					zjzxfJi_standard: true,
					zjzxfJi_graded: false,
					zjzxfJi_category: true,
					zjzxfJi5: true,
					zjzxfJi_fl: false,
					zjzxfJi_sdeTitle: true,
					zjzxfJi8: true,
					zjzxfJi_hzhjcgb: false,
					zjzxfJi10: true,
					zjzxfJi_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxji1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxji2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxji3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-ji.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsJi
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
