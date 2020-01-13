<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfSu1[pickerIndex.zjzxfSu1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfSu_standard" :value="pickerIndex.zjzxfSu_standard"
			 :range="multiSelector.zjzxfSu_standard">
				<view class="picker">
					{{multiSelector.zjzxfSu_standard[pickerIndex.zjzxfSu_standard]}}
				</view>
				</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(115,multiSelector.zjzxfSu_standard[pickerIndex.zjzxfSu_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfSu_category" :value="pickerIndex.zjzxfSu_category"
			 :range="multiSelector.zjzxfSu_category">
				<view class="picker">
					{{multiSelector.zjzxfSu_category[pickerIndex.zjzxfSu_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu5 ">
			<view class="title">{{multiSelector.zjzxfSu5}}</view>
			<input v-model="needVal.zjzxfSu_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfSu_sdeTitle">{{multiSelector.zjzxfSu_sdeTitle}}</view>
			<input v-model="needVal.zjzxfSu_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu8 ">
			<view class="title">{{multiSelector.zjzxfSu8}}</view>
			<input v-model="needVal.zjzxfSu_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu10 ">
			<view class="title">{{multiSelector.zjzxfSu10}}</view>
			<input v-model="needVal.zjzxfSu_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfSu12 || showSelector.zjzxfSu_zytzxs ">
			<view class="title">{{multiSelector.zjzxfSu12}}</view>
			<input v-model="needVal.zjzxfSu_zytzxs" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfSu_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfSu_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-su :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfSu13="multiSelector.zjzxfSu13"></tzxs-su>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/zjzxfs/zjzxfs-su.json'
	import tzxsSu from './zjzxfSu_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfSu_standard: '',
					zjzxfSu_graded: '',
					zjzxfSu_category: '',
					zjzxfSu_ztz: '',
					zjzxfSu_fl: '',
					zjzxfSu_sdeTitle: '',
					zjzxfSu_sde: '',
					zjzxfSu_hzhjcgb: '',
					zjzxfSu_sffl: '',
					zjzxfSu_zytzxs: '',
					zjzxfSu_discount: '90',
					type: 'zjzxfSu'
				},
				multiSelector: {
					zjzxfSu1: [],
					zjzxfSu_standard: [],
					zjzxfSu_graded: [],
					zjzxfSu_category: [],
					zjzxfSu5: '',
					zjzxfSu_fl: '',
					zjzxfSu_sdeTitle: '',
					zjzxfSu8: '',
					zjzxfSu_hzhjcgb: '',
					zjzxfSu10: '',
					zjzxfSu_sffl: '',
					zjzxfSu12: '',
					zjzxfSu13: '',
					zjzxfSu_zytzxs: ''
				},
				pickerIndex: {
					zjzxfSu1: 0,
					zjzxfSu_standard: 0,
					zjzxfSu_category: 0,
				},
				showSelector: {
					zjzxfSu1: true,
					zjzxfSu_standard: true,
					zjzxfSu_graded: false,
					zjzxfSu_category: true,
					zjzxfSu5: true,
					zjzxfSu_fl: false,
					zjzxfSu_sdeTitle: true,
					zjzxfSu8: true,
					zjzxfSu_hzhjcgb: false,
					zjzxfSu10: true,
					zjzxfSu_sffl: false,
					zjzxfSu12: true,
					zjzxfSu13: false,
					zjzxfSu_zytzxs: true
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxsu1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxsu2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxsu3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			tzxsSu
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
