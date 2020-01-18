<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">陕西省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfShan1[pickerIndex.zjzxfShan1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfShan_standard" :value="pickerIndex.zjzxfShan_standard"
			 :range="multiSelector.zjzxfShan_standard">
				<view class="picker">
					{{multiSelector.zjzxfShan_standard[pickerIndex.zjzxfShan_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini"@tap="checkDeatil(1492,multiSelector.zjzxfQiong_standard[pickerIndex.zjzxfQiong_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfShan_category" :value="pickerIndex.zjzxfShan_category"
			 :range="multiSelector.zjzxfShan_category">
				<view class="picker">
					{{multiSelector.zjzxfShan_category[pickerIndex.zjzxfShan_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan5 ">
			<view class="title">{{multiSelector.zjzxfShan5}}</view>
			<input v-model="needVal.zjzxfShan_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfShan_sdeTitle">{{multiSelector.zjzxfShan_sdeTitle}}</view>
			<input v-model="needVal.zjzxfShan_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan8 ">
			<view class="title">{{multiSelector.zjzxfShan8}}</view>
			<input v-model="needVal.zjzxfShan_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfShan10 ">
			<view class="title">{{multiSelector.zjzxfShan10}}</view>
			<input v-model="needVal.zjzxfShan_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfShan_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-shan.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfShan_standard: '',
					zjzxfShan_graded: '',
					zjzxfShan_category: '',
					zjzxfShan_ztz: '',
					zjzxfShan_fl: '',
					zjzxfShan_sdeTitle: '',
					zjzxfShan_sde: '',
					zjzxfShan_hzhjcgb: '',
					zjzxfShan_sffl: '',
					zjzxfShan_discount: '90',
					type: 'zjzxfShan'
				},
				multiSelector: {
					zjzxfShan1: [],
					zjzxfShan_standard: [],
					zjzxfShan_graded: [],
					zjzxfShan_category: [],
					zjzxfShan5: '',
					zjzxfShan_fl: '',
					zjzxfShan_sdeTitle: '',
					zjzxfShan8: '',
					zjzxfShan_hzhjcgb: '',
					zjzxfShan10: '',
					zjzxfShan_sffl: '',
				},
				pickerIndex: {
					zjzxfShan1: 0,
					zjzxfShan_standard: 0,
					zjzxfShan_category: 0,
				},
				showSelector: {
					zjzxfShan1: true,
					zjzxfShan_standard: true,
					zjzxfShan_graded: false,
					zjzxfShan_category: true,
					zjzxfShan5: true,
					zjzxfShan_fl: false,
					zjzxfShan_sdeTitle: true,
					zjzxfShan8: true,
					zjzxfShan_hzhjcgb: false,
					zjzxfShan10: true,
					zjzxfShan_sffl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxshan1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxshan2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxshan3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-shan.json',
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
