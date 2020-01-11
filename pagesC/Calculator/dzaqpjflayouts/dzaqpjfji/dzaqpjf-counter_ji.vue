<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省地震安全评价费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJi_xzsf">
			<view class="title">选择省份</view>
				<view class="title m-left" v-model="needVal.dzaqpjfJi_xzsf">
					{{multiSelector.dzaqpjfJi_xzsf[pickerIndex.dzaqpjfJi_xzsf]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJi_standard">
			<view class="title">选择标准</view>
				<view class="title" v-model="needVal.dzaqpjfJi_standard">
					{{multiSelector.dzaqpjfJi_standard[pickerIndex.dzaqpjfJi_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1599,multiSelector.dzaqpjfJi_standard[pickerIndex.dzaqpjfJi_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJi_category">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJi_category" :value="pickerIndex.dzaqpjfJi_category"
			 :range="multiSelector.dzaqpjfJi_category">
				<view class="picker">
					{{multiSelector.dzaqpjfJi_category[pickerIndex.dzaqpjfJi_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJi_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJi_pjxm" :value="pickerIndex.dzaqpjfJi_pjxm"
			 :range="multiSelector.dzaqpjfJi_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfJi_pjxm[pickerIndex.dzaqpjfJi_pjxm]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfJi_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfJi_gzjb" :value="pickerIndex.dzaqpjfJi_gzjb"
			 :range="multiSelector.dzaqpjfJi_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfJi_gzjb[pickerIndex.dzaqpjfJi_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">工作量</view>
			<input v-model="needVal.dzaqpjfJi_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfJi5" type="defult" v-model="multiSelector.dzaqpjfJi5"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.dzaqpjfJi_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-ji.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dzaqpjfJi_xzsf: '',
					dzaqpjfJi_standard: '',
					dzaqpjfJi_category: '',
					dzaqpjfJi_pjxm: '',
					dzaqpjfJi_gzjb: '',
					dzaqpjfJi_xs: '',
					dzaqpjfJi_gzl: '1',
					dzaqpjfJi_discount: '50',
					type: 'dzaqpjfJi'
				},
				multiSelector: {
					dzaqpjfJi_xzsf: [],
					dzaqpjfJi_standard: [],
					dzaqpjfJi_category: [],
					dzaqpjfJi_pjxm: [],//5
					dzaqpjfJi5: '',
					dzaqpjfJi_gzjb: [],//7
					dzaqpjfJi_xs: '',
				},
				showSelector: {
					dzaqpjfJi_xzsf: true,
					dzaqpjfJi_standard: true,
					dzaqpjfJi_category: true,
					dzaqpjfJi_pjxm: true,
					dzaqpjfJi5: true,
					dzaqpjfJi_gzjb: true,
					dzaqpjfJi_xs: false,
				},
				pickerIndex: {
					dzaqpjfJi_xzsf: 0,
					dzaqpjfJi_standard: 0,
					dzaqpjfJi_category: 0,
					dzaqpjfJi_pjxm: 0,
					dzaqpjfJi_gzjb: 0
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
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
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
