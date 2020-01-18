<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">青海造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfQing1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfQing1[pickerIndex.zjzxfQing1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQing_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfQing_standard" :value="pickerIndex.zjzxfQing_standard"
			 :range="multiSelector.zjzxfQing_standard">
				<view class="picker">
					{{multiSelector.zjzxfQing_standard[pickerIndex.zjzxfQing_standard]}}
				</view>
				</picker>
			<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(1491,multiSelector.zjzxfQing_standard[pickerIndex.zjzxfQing_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQing_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfQing_category" :value="pickerIndex.zjzxfQing_category"
			 :range="multiSelector.zjzxfQing_category">
				<view class="picker">
					{{multiSelector.zjzxfQing_category[pickerIndex.zjzxfQing_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQing5 ">
			<view class="title">{{multiSelector.zjzxfQing5}}</view>
			<input v-model="needVal.zjzxfQing_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfQing7 ">
			<view class="title">{{multiSelector.zjzxfQing7}}</view>
			<input v-model="needVal.zjzxfQing_zytzxs" /></input>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfQing_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfQing_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-qing :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfQing8="multiSelector.zjzxfQing8"></tzxs-qing>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/zjzxfs/zjzxfs-qing.json'
	import tzxsQing from './zjzxfQing_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfQing_standard: '',
					zjzxfQing_graded: '',
					zjzxfQing_category: '',
					zjzxfQing_ztz: '',
					zjzxfQing_fl: '',
					zjzxfQing_zytzxs: '1',
					zjzxfQing_discount: '90',
					type: 'zjzxfQing'
				},
				multiSelector: {
					zjzxfQing1: [],
					zjzxfQing_standard: [],
					zjzxfQing_graded: [],
					zjzxfQing_category: [],
					zjzxfQing5: '',
					zjzxfQing_fl: '',
					zjzxfQing7: '',
					zjzxfQing8: ''
				},
				pickerIndex: {
					zjzxfQing1: 0,
					zjzxfQing_standard: 0,
					zjzxfQing_category: 0,
				},
				showSelector: {
					zjzxfQing1: true,
					zjzxfQing_standard: true,
					zjzxfQing_graded: false,
					zjzxfQing_category: true,
					zjzxfQing5: true,
					zjzxfQing_fl: false,
					zjzxfQing7: false,
					zjzxfQing8: false
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxqing3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-qing.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsQing
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
