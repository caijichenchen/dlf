<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfWan1[pickerIndex.zjzxfWan1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfWan_standard[pickerIndex.zjzxfWan_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(905,multiSelector.zjzxfWan_standard[pickerIndex.zjzxfWan_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfWan_category" :value="pickerIndex.zjzxfWan_category"
			 :range="multiSelector.zjzxfWan_category">
				<view class="picker">
					{{multiSelector.zjzxfWan_category[pickerIndex.zjzxfWan_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan5 ">
			<view class="title">{{multiSelector.zjzxfWan5}}</view>
			<input v-model="needVal.zjzxfWan_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfWan_sdeTitle">{{multiSelector.zjzxfWan_sdeTitle}}</view>
			<input v-model="needVal.zjzxfWan_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan8 ">
			<view class="title">{{multiSelector.zjzxfWan8}}</view>
			<input v-model="needVal.zjzxfWan_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfWan10 ">
			<view class="title">{{multiSelector.zjzxfWan10}}</view>
			<input v-model="needVal.zjzxfWan_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfWan_discount" /></input>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-wan.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfWan_standard: '',
					zjzxfWan_graded: '',
					zjzxfWan_category: '',
					zjzxfWan_ztz: '',
					zjzxfWan_fl: '',
					zjzxfWan_sdeTitle: '',
					zjzxfWan_sde: '',
					zjzxfWan_hzhjcgb: '',
					zjzxfWan_sffl: '',
					zjzxfWan_discount: '90',
					type: 'zjzxfWan'
				},
				multiSelector: {
					zjzxfWan1: [],
					zjzxfWan_standard: [],
					zjzxfWan_graded: [],
					zjzxfWan_category: [],
					zjzxfWan5: '',
					zjzxfWan_fl: '',
					zjzxfWan_sdeTitle: '',
					zjzxfWan8: '',
					zjzxfWan_hzhjcgb: '',
					zjzxfWan10: '',
					zjzxfWan_sffl: '',
				},
				pickerIndex: {
					zjzxfWan1: 0,
					zjzxfWan_standard: 0,
					zjzxfWan_category: 0,
				},
				showSelector: {
					zjzxfWan1: true,
					zjzxfWan_standard: true,
					zjzxfWan_graded: false,
					zjzxfWan_category: true,
					zjzxfWan5: true,
					zjzxfWan_fl: false,
					zjzxfWan_sdeTitle: true,
					zjzxfWan8: true,
					zjzxfWan_hzhjcgb: false,
					zjzxfWan10: true,
					zjzxfWan_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxwan1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxwan2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxwan3",
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
