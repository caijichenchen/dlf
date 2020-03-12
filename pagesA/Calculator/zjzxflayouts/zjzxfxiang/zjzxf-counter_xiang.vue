<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省造价咨询费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfXiang1[pickerIndex.zjzxfXiang1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfXiang_standard" :value="pickerIndex.zjzxfXiang_standard"
			 :range="multiSelector.zjzxfXiang_standard">
				<view class="picker">
					{{multiSelector.zjzxfXiang_standard[pickerIndex.zjzxfXiang_standard]}}
				</view>
				</picker>
			<button class="m-r" type="primary" size="mini"@tap="checkDeatil(143,multiSelector.zjzxfXiang_standard[pickerIndex.zjzxfXiang_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang3 || showSelector.zjzxfXiang_xzbf">
			<view class="title">{{multiSelector.zjzxfXiang3}}</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfXiang_xzbf" :value="pickerIndex.zjzxfXiang_xzbf"
			 :range="multiSelector.zjzxfXiang_xzbf">
				<view class="picker">
					{{multiSelector.zjzxfXiang_xzbf[pickerIndex.zjzxfXiang_xzbf]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfXiang_category" :value="pickerIndex.zjzxfXiang_category"
			 :range="multiSelector.zjzxfXiang_category">
				<view class="picker">
					{{multiSelector.zjzxfXiang_category[pickerIndex.zjzxfXiang_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang7 ">
			<view class="title">{{multiSelector.zjzxfXiang7}}</view>
			<input type="digit" v-model="needVal.zjzxfXiang_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang9 || showSelector.zjzxfXiang_kxgzfw">
			<view class="title">{{multiSelector.zjzxfXiang9}}</view>
			<input type="digit" v-model="needVal.zjzxfXiang_kxgzfw" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfXiang11">
			<view class="title">{{multiSelector.zjzxfXiang11}}</view>
			<input type="digit" v-model="needVal.zjzxfXiang_zytzxs" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfXiang_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.zjzxfXiang_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-xiang :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfXiang12="multiSelector.zjzxfXiang12"></tzxs-xiang>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/zjzxfs/zjzxfs-xiang.json'
	import tzxsXiang from './zjzxfXiang_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfXiang_standard: '',
					zjzxfXiang_xzbf: '',
					zjzxfXiang_category: '',
					zjzxfXiang_graded: '',
					zjzxfXiang_ztz: '',
					zjzxfXiang_fl: '',
					zjzxfXiang_kxgzfw: '',
					zjzxfXiang_zytzxs: '',
					zjzxfXiang_discount: '90',
					type: 'zjzxfXiang'
				},
				multiSelector: {
					zjzxfXiang1: [],
					zjzxfXiang_standard: [],
					zjzxfXiang3: '',
					zjzxfXiang_xzbf: [],
					zjzxfXiang_graded: '',
					zjzxfXiang_category: [],
					zjzxfXiang7: '',
					zjzxfXiang_fl: '',
					zjzxfXiang9: '',
					zjzxfXiang_kxgzfw: '',
					zjzxfXiang11: '',
					zjzxfXiang12: '',
					zjzxfXiang_zytzxs: ''
				},
				pickerIndex: {
					zjzxfXiang1: 0,
					zjzxfXiang_standard: 0,
					zjzxfXiang_xzbf: 0,
					zjzxfXiang_category: 0,
				},
				showSelector: {
					zjzxfXiang1: true,
					zjzxfXiang_standard: true,
					zjzxfXiang3: true,
					zjzxfXiang_xzbf: true,
					zjzxfXiang_graded: false,
					zjzxfXiang_category: true,
					zjzxfXiang7: true,
					zjzxfXiang_fl: false,
					zjzxfXiang9: false,
					zjzxfXiang_kxgzfw: false,
					zjzxfXiang11: true,
					zjzxfXiang12: false,
					zjzxfXiang_zytzxs: true
				},
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "zjzxxiang3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zjzxfs/zjzxfs-xiang.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsXiang
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
