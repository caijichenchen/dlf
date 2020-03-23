<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">地震安全评价费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong_xzsf">
			<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.dzaqpjfQiong_xzsf[pickerIndex.dzaqpjfQiong_xzsf]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong_xzbz">
			<view class="title">选择标准</view>
				<view class="picker">
					{{multiSelector.dzaqpjfQiong_xzbz[pickerIndex.dzaqpjfQiong_xzbz]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong_pjfl">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQiong_pjfl" :value="pickerIndex.dzaqpjfQiong_pjfl"
			 :range="multiSelector.dzaqpjfQiong_pjfl">
				<view class="picker">
					{{multiSelector.dzaqpjfQiong_pjfl[pickerIndex.dzaqpjfQiong_pjfl]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfQiong_pjfl">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQiong_pjxm" :value="pickerIndex.dzaqpjfQiong_pjxm"
			 :range="multiSelector.dzaqpjfQiong_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfQiong_pjxm[pickerIndex.dzaqpjfQiong_pjxm]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfQiong_pjxm">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQiong_gzjb" :value="pickerIndex.dzaqpjfQiong_gzjb"
			 :range="multiSelector.dzaqpjfQiong_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfQiong_gzjb[pickerIndex.dzaqpjfQiong_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong6 || showSelector.dzaqpjfQiong7">
			<view class="title">{{multiSelector.dzaqpjfQiong6}}</view>
			<input type="digit" v-model="needVal.dzaqpjfQiong_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfQiong7" type="defult" v-model="multiSelector.dzaqpjfQiong7"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQiong12 || showSelector.dzaqpjfQiong11">
			<view class="title">{{multiSelector.dzaqpjfQiong12}}</view>
			<input type="digit" v-model="needVal.dzaqpjfQiong_comment" /></input>
			<uni-tag :text="multiSelector.dzaqpjfQiong11" type="defult" v-model="multiSelector.dzaqpjfQiong11"></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.dzaqpjfQiong_dzzk" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
		</view>
		<explain></explain>
		<pjxm-qiong :showModalName="showModalName" v-on:hideModal="hideModal" :dzaqpjfQiong8="multiSelector.dzaqpjfQiong8"></pjxm-qiong>
		<pjfl-qiong :showModalName="showModalName" v-on:hideModal="hideModal" :dzaqpjfQiong4="multiSelector.dzaqpjfQiong4"></pjfl-qiong>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-qiong.json'
	import pjxmQiong from './dzaqpjfQiong_pjxm.vue'
	import pjflQiong from './dzaqpjfQiong_pjfl.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/dzaqpjfs/dzaqpjfs-qiong.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					dzaqpjfQiong_xzsf: '',
					dzaqpjfQiong_xzbz: '',
					dzaqpjfQiong_pjfl: '',
					dzaqpjfQiong_pjxm: '',
					dzaqpjfQiong_gzjb: '',
					dzaqpjfQiong_xs: '',
					dzaqpjfQiong_gzl: '1',
					dzaqpjfQiong_comment: '',
					dzaqpjfQiong_dzzk: '50',
					dzaqpjfQiong_nums: '',
					type: 'dzaqpjfQiong'
				},
				multiSelector: {
					dzaqpjfQiong_xzsf: [],
					dzaqpjfQiong_xzbz: [],
					dzaqpjfQiong_pjfl: [],
					dzaqpjfQiong4: '',
					dzaqpjfQiong_pjxm: [],//5
					dzaqpjfQiong6: '',
					dzaqpjfQiong7: '',
					dzaqpjfQiong8: '',
					dzaqpjfQiong_gzjb: [],//9
					dzaqpjfQiong_xs: '',//10
					dzaqpjfQiong11: '',
					dzaqpjfQiong12: '',
				},
				showSelector: {
					dzaqpjfQiong_xzsf: true,
					dzaqpjfQiong_xzbz: true,
					dzaqpjfQiong_pjfl: true,
					dzaqpjfQiong4: false,
					dzaqpjfQiong_pjxm: true,
					dzaqpjfQiong6: true,
					dzaqpjfQiong7: true,
					dzaqpjfQiong8: false,
					dzaqpjfQiong_gzjb: true,
					dzaqpjfQiong_xs: false,
					dzaqpjfQiong11: false,
					dzaqpjfQiong12: false,
				},
				pickerIndex: {
					dzaqpjfQiong_xzsf: 0,
					dzaqpjfQiong_xzbz: 0,
					dzaqpjfQiong_pjfl: 0,
					dzaqpjfQiong_pjxm: 0,
					dzaqpjfQiong_gzjb: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "选择省份",
						"text": "请选择省份"
					},
					{
						"id": "2",
						"title": "选择标准",
						"text": "选择对应标准说明"
					},
					{
						"id": "3",
						"title": "工作级别",
						"text": "一般分为一到四级"
					},
					{
						"id": "4",
						"title": "工作量",
						"text": "输入工作量"
					},
					{
						"id": "5",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			pjflQiong,
			pjxmQiong
		},
	}
</script>

<style>
</style>
