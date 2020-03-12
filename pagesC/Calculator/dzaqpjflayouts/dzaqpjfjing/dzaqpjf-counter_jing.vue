<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">北京市地震安全评价费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJing_xzsf">
			<view class="title">选择省份</view>
				<view class="picker m-left">
					{{multiSelector.dzaqpjfJing_xzsf[pickerIndex.dzaqpjfJing_xzsf]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJing_standard">
			<view class="title">选择标准</view>
				<view class="picker">
					{{multiSelector.dzaqpjfJing_standard[pickerIndex.dzaqpjfJing_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1590,multiSelector.dzaqpjfJing_standard[pickerIndex.dzaqpjfJing_standard])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJing_category">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJing_category" :value="pickerIndex.dzaqpjfJing_category"
			 :range="multiSelector.dzaqpjfJing_category">
				<view class="picker">
					{{multiSelector.dzaqpjfJing_category[pickerIndex.dzaqpjfJing_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJing_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJing_pjxm" :value="pickerIndex.dzaqpjfJing_pjxm"
			 :range="multiSelector.dzaqpjfJing_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfJing_pjxm[pickerIndex.dzaqpjfJing_pjxm]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfJing_pjxm">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJing_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJing_gzjb" :value="pickerIndex.dzaqpjfJing_gzjb"
			 :range="multiSelector.dzaqpjfJing_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfJing_gzjb[pickerIndex.dzaqpjfJing_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">工作量</view>
			<input type="digit" v-model="needVal.dzaqpjfJing_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfJing4" type="defult" v-model="multiSelector.dzaqpjfJing4"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.dzaqpjfJing_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<explain></explain>
		<pjxm-jing :showModalName="showModalName" v-on:hideModal="hideModal" :dzaqpjfJing6="multiSelector.dzaqpjfJing6"></pjxm-jing>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-jing.json'
	import pjxmJing from './dzaqpjfJing_pjxm.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/dzaqpjfs/dzaqpjfs-jing.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					dzaqpjfJing_xzsf: '',
					dzaqpjfJing_standard: '',
					dzaqpjfJing_category: '',
					dzaqpjfJing_pjxm: '',
					dzaqpjfJing_gzjb: '',
					dzaqpjfJing_xs: '',
					dzaqpjfJing_gzl: '1',
					dzaqpjfJing_discount: '50',
					type: 'dzaqpjfJing'
				},
				multiSelector: {
					dzaqpjfJing_xzsf: [],
					dzaqpjfJing_standard: [],
					dzaqpjfJing_category: [],
					dzaqpjfJing4: '',
					dzaqpjfJing_pjxm: [],//5
					dzaqpjfJing6: '',
					dzaqpjfJing_gzjb: [],//7
					dzaqpjfJing_xs: '',
				},
				showSelector: {
					dzaqpjfJing_xzsf: true,
					dzaqpjfJing_standard: true,
					dzaqpjfJing_category: true,
					dzaqpjfJing4: true,
					dzaqpjfJing_pjxm: true,
					dzaqpjfJing6: false,
					dzaqpjfJing_gzjb: true,
					dzaqpjfJing_xs: false,
				},
				pickerIndex: {
					dzaqpjfJing_xzsf: 0,
					dzaqpjfJing_standard: 0,
					dzaqpjfJing_category: 0,
					dzaqpjfJing_pjxm: 0,
					dzaqpjfJing_gzjb: 0
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "工作级别",
						"text": "一般分为一到四级"
					},
					{
						"id": "2",
						"title": "工作量",
						"text": "输入工作量"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			pjxmJing
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
