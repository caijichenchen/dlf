<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfLiao1[pickerIndex.zjzxfLiao1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfLiao_standard" :value="pickerIndex.zjzxfLiao_standard"
			 :range="multiSelector.zjzxfLiao_standard">
				<view class="picker">
					{{multiSelector.zjzxfLiao_standard[pickerIndex.zjzxfLiao_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1487,multiSelector.zjzxfLiao_standard[pickerIndex.zjzxfLiao_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfLiao_category" :value="pickerIndex.zjzxfLiao_category"
			 :range="multiSelector.zjzxfLiao_category">
				<view class="picker">
					{{multiSelector.zjzxfLiao_category[pickerIndex.zjzxfLiao_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao5 ">
			<view class="title">{{multiSelector.zjzxfLiao5}}</view>
			<input v-model="needVal.zjzxfLiao_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfLiao_sdeTitle">{{multiSelector.zjzxfLiao_sdeTitle}}</view>
			<input v-model="needVal.zjzxfLiao_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao8 ">
			<view class="title">{{multiSelector.zjzxfLiao8}}</view>
			<input v-model="needVal.zjzxfLiao_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfLiao10 ">
			<view class="title">{{multiSelector.zjzxfLiao10}}</view>
			<input v-model="needVal.zjzxfLiao_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfLiao_discount" /></input>
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
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-liao.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfLiao_standard: '',
					zjzxfLiao_graded: '',
					zjzxfLiao_category: '',
					zjzxfLiao_ztz: '',
					zjzxfLiao_fl: '',
					zjzxfLiao_sdeTitle: '',
					zjzxfLiao_sde: '',
					zjzxfLiao_hzhjcgb: '',
					zjzxfLiao_sffl: '',
					zjzxfLiao_discount: '90',
					type: 'zjzxfLiao'
				},
				multiSelector: {
					zjzxfLiao1: [],
					zjzxfLiao_standard: [],
					zjzxfLiao_graded: [],
					zjzxfLiao_category: [],
					zjzxfLiao5: '',
					zjzxfLiao_fl: '',
					zjzxfLiao_sdeTitle: '',
					zjzxfLiao8: '',
					zjzxfLiao_hzhjcgb: '',
					zjzxfLiao10: '',
					zjzxfLiao_sffl: '',
				},
				pickerIndex: {
					zjzxfLiao1: 0,
					zjzxfLiao_standard: 0,
					zjzxfLiao_category: 0,
				},
				showSelector: {
					zjzxfLiao1: true,
					zjzxfLiao_standard: true,
					zjzxfLiao_graded: false,
					zjzxfLiao_category: true,
					zjzxfLiao5: true,
					zjzxfLiao_fl: false,
					zjzxfLiao_sdeTitle: true,
					zjzxfLiao8: true,
					zjzxfLiao_hzhjcgb: false,
					zjzxfLiao10: true,
					zjzxfLiao_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxliao1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxliao2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxliao3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
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
