<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">福建省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfMin1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfMin1[pickerIndex.zjzxfMin1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMin_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfMin_standard[pickerIndex.zjzxfMin_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1420,multiSelector.zjzxfMin_standard[pickerIndex.zjzxfMin_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMin_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfMin_category" :value="pickerIndex.zjzxfMin_category"
			 :range="multiSelector.zjzxfMin_category">
				<view class="picker">
					{{multiSelector.zjzxfMin_category[pickerIndex.zjzxfMin_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfMin5 ">
			<view class="title">{{multiSelector.zjzxfMin5}}</view>
			<input v-model="needVal.zjzxfMin_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfMin_discount" /></input>
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
	// import datajson from '@/common/json/zjzxfs/zjzxfs-min.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfMin_standard: '',
					zjzxfMin_graded: '',
					zjzxfMin_category: '',
					zjzxfMin_ztz: '',
					zjzxfMin_fl: '',
					zjzxfMin_discount: '90',
					type: 'zjzxfMin'
				},
				multiSelector: {
					zjzxfMin1: [],
					zjzxfMin_standard: [],
					zjzxfMin_graded: [],
					zjzxfMin_category: [],
					zjzxfMin5: '',
					zjzxfMin_fl: '',
				},
				pickerIndex: {
					zjzxfMin1: 0,
					zjzxfMin_standard: 0,
					zjzxfMin_category: 0,
				},
				showSelector: {
					zjzxfMin1: true,
					zjzxfMin_standard: true,
					zjzxfMin_graded: false,
					zjzxfMin_category: true,
					zjzxfMin5: true,
					zjzxfMin_fl: false,
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxmin3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-min.json',
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
