<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">新疆造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfXin1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfXin1[pickerIndex.zjzxfXin1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXin_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfXin_standard" :value="pickerIndex.zjzxfXin_standard"
			 :range="multiSelector.zjzxfXin_standard">
				<view class="picker">
					{{multiSelector.zjzxfXin_standard[pickerIndex.zjzxfXin_standard]}}
				</view>
				</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1493,multiSelector.zjzxfXin_standard[pickerIndex.zjzxfXin_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXin_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfXin_category" :value="pickerIndex.zjzxfXin_category"
			 :range="multiSelector.zjzxfXin_category">
				<view class="picker">
					{{multiSelector.zjzxfXin_category[pickerIndex.zjzxfXin_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXin5 ">
			<view class="title">{{multiSelector.zjzxfXin5}}</view>
			<input v-model="needVal.zjzxfXin_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfXin_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-xin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfXin_standard: '',
					zjzxfXin_graded: '',
					zjzxfXin_category: '',
					zjzxfXin_ztz: '',
					zjzxfXin_fl: '',
					zjzxfXin_discount: '90',
					type: 'zjzxfXin'
				},
				multiSelector: {
					zjzxfXin1: [],
					zjzxfXin_standard: [],
					zjzxfXin_graded: [],
					zjzxfXin_category: [],
					zjzxfXin5: '',
					zjzxfXin_fl: '',
				},
				pickerIndex: {
					zjzxfXin1: 0,
					zjzxfXin_standard: 0,
					zjzxfXin_category: 0,
				},
				showSelector: {
					zjzxfXin1: true,
					zjzxfXin_standard: true,
					zjzxfXin_graded: false,
					zjzxfXin_category: true,
					zjzxfXin5: true,
					zjzxfXin_fl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxxin3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-xin.json',
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
