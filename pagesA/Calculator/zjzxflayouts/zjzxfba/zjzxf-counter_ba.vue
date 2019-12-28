<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfBa1[pickerIndex.zjzxfBa1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfBa_standard[pickerIndex.zjzxfBa_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1063,multiSelector.zjzxfBa_standard[pickerIndex.zjzxfBa_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfBa_category" :value="pickerIndex.zjzxfBa_category"
			 :range="multiSelector.zjzxfBa_category">
				<view class="picker">
					{{multiSelector.zjzxfBa_category[pickerIndex.zjzxfBa_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa5 ">
			<view class="title">{{multiSelector.zjzxfBa5}}</view>
			<input v-model="needVal.zjzxfBa_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfBa_sdeTitle">{{multiSelector.zjzxfBa_sdeTitle}}</view>
			<input v-model="needVal.zjzxfBa_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfBa8 ">
			<view class="title">{{multiSelector.zjzxfBa8}}</view>
			<input v-model="needVal.zjzxfBa_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfBa_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-ba.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfBa_standard: '',
					zjzxfBa_graded: '',
					zjzxfBa_category: '',
					zjzxfBa_ztz: '',
					zjzxfBa_fl: '',
					zjzxfBa_sdeTitle: '',
					zjzxfBa_sde: '',
					zjzxfBa_hzhjcgb: '',
					zjzxfBa_sffl: '',
					zjzxfBa_discount: '90',
					type: 'zjzxfBa'
				},
				multiSelector: {
					zjzxfBa1: [],
					zjzxfBa_standard: [],
					zjzxfBa_graded: [],
					zjzxfBa_category: [],
					zjzxfBa5: '',
					zjzxfBa_fl: '',
					zjzxfBa_sdeTitle: '',
					zjzxfBa8: '',
					zjzxfBa_hzhjcgb: '',
					zjzxfBa_sffl: '',
				},
				pickerIndex: {
					zjzxfBa1: 0,
					zjzxfBa_standard: 0,
					zjzxfBa_category: 0,
				},
				showSelector: {
					zjzxfBa1: true,
					zjzxfBa_standard: true,
					zjzxfBa_graded: false,
					zjzxfBa_category: true,
					zjzxfBa5: true,
					zjzxfBa_fl: false,
					zjzxfBa_sdeTitle: true,
					zjzxfBa8: true,
					zjzxfBa_hzhjcgb: false,
					zjzxfBa_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxba1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxba3",
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
