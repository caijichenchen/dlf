<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市地震安全评价费</text>
		</div>
		
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHu_xzsf">
			<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.dzaqpjfHu_xzsf[pickerIndex.dzaqpjfHu_xzsf]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHu_standard">
			<view class="title">选择标准</view>
				<view class="title">
					{{multiSelector.dzaqpjfHu_standard[pickerIndex.dzaqpjfHu_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1653,multiSelector.dzaqpjfHu_standard[pickerIndex.dzaqpjfHu_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHu_category">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHu_category" :value="pickerIndex.dzaqpjfHu_category"
			 :range="multiSelector.dzaqpjfHu_category">
				<view class="picker">
					{{multiSelector.dzaqpjfHu_category[pickerIndex.dzaqpjfHu_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHu_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHu_pjxm" :value="pickerIndex.dzaqpjfHu_pjxm"
			 :range="multiSelector.dzaqpjfHu_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfHu_pjxm[pickerIndex.dzaqpjfHu_pjxm]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfHu_pjxm">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHu_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHu_gzjb" :value="pickerIndex.dzaqpjfHu_gzjb"
			 :range="multiSelector.dzaqpjfHu_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfHu_gzjb[pickerIndex.dzaqpjfHu_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">工作量</view>
			<input v-model="needVal.dzaqpjfHu_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfHu4" type="defult" v-model="multiSelector.dzaqpjfHu4"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input v-model="needVal.dzaqpjfHu_fdfd" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.dzaqpjfHu_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
		</view>
		<explain></explain>
		<pjxm-hu :showModalName="showModalName" v-on:hideModal="hideModal" :dzaqpjfHu6="multiSelector.dzaqpjfHu6"></pjxm-hu>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-hu.json'
	import pjxmHu from './dzaqpjfHu_pjxm.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dzaqpjfHu_xzsf: '',
					dzaqpjfHu_standard: '',
					dzaqpjfHu_category: '',
					dzaqpjfHu_pjxm: '',
					dzaqpjfHu_gzjb: '',
					dzaqpjfHu_xs: '',
					dzaqpjfHu_gzl: '1',
					dzaqpjfHu_fdfd: '100',
					dzaqpjfHu_discount: '50',
					type: 'dzaqpjfHu'
				},
				multiSelector: {
					dzaqpjfHu_xzsf: [],
					dzaqpjfHu_standard: [],
					dzaqpjfHu_category: [],
					dzaqpjfHu4: '',
					dzaqpjfHu_pjxm: [],//5
					dzaqpjfHu6: '',
					dzaqpjfHu_gzjb: [],//7
					dzaqpjfHu_xs: '',
				},
				showSelector: {
					dzaqpjfHu_xzsf: true,
					dzaqpjfHu_standard: true,
					dzaqpjfHu_category: true,
					dzaqpjfHu4: true,
					dzaqpjfHu_pjxm: true,
					dzaqpjfHu6: false,
					dzaqpjfHu_gzjb: true,
					dzaqpjfHu_xs: false,
				},
				pickerIndex: {
					dzaqpjfHu_xzsf: 0,
					dzaqpjfHu_standard: 0,
					dzaqpjfHu_category: 0,
					dzaqpjfHu_pjxm: 0,
					dzaqpjfHu_gzjb: 0
				},
				showModalName: null,
				datajson:datajson,
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
						"title": "浮动幅度",
						"text": "上下浮动幅度为10%"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			pjxmHu
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
