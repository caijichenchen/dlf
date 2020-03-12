<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">建筑幕墙和门窗检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong_xzsf">
				<view class="title">选择省份</view>
					<view class="title">
						{{multiSelector.jzmqmcjcfQiong_xzsf[pickerIndex.jzmqmcjcfQiong_xzsf]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong_xzbz">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jzmqmcjcfQiong_xzbz">
						{{multiSelector.jzmqmcjcfQiong_xzbz[pickerIndex.jzmqmcjcfQiong_xzbz]}}
					</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong_jsxm">
				<view class="title">计算项目</view>
				<picker class="select" @change="PickerChange" data-name="jzmqmcjcfQiong_jsxm" :value="pickerIndex.jzmqmcjcfQiong_jsxm"
				 :range="multiSelector.jzmqmcjcfQiong_jsxm">
					<view class="picker">
						{{multiSelector.jzmqmcjcfQiong_jsxm[pickerIndex.jzmqmcjcfQiong_jsxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jzmqmcjcfQiong_jsxm">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong_xflx">
				<view class="title">细分类型</view>
				<picker class="select" @change="PickerChange" data-name="jzmqmcjcfQiong_xflx" :value="pickerIndex.jzmqmcjcfQiong_xflx"
				 :range="multiSelector.jzmqmcjcfQiong_xflx">
					<view class="picker">
						{{multiSelector.jzmqmcjcfQiong_xflx[pickerIndex.jzmqmcjcfQiong_xflx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong_dw">
				<view class="title">工程量</view>
				<input type="digit" v-model="needVal.jzmqmcjcfQiong_gzl" /></input>
				<uni-tag :text="multiSelector.jzmqmcjcfQiong_dw" type="defult" v-model="needVal.jzmqmcjcfQiong_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzmqmcjcfQiong8">
				<view class="title">天数</view>
				<input type="digit" v-model="needVal.jzmqmcjcfQiong_dayCount"/></input>
				<uni-tag :text="multiSelector.jzmqmcjcfQiong8" type="defult" v-model="multiSelector.jzmqmcjcfQiong8"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jzmqmcjcfQiong_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<jsxm-qiong :showModalName="showModalName" v-on:hideModal="hideModal" :jzmqmcjcfQiong4="multiSelector.jzmqmcjcfQiong4"></jsxm-qiong>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/jzmqmcjcs.json'
	import jsxmQiong  from './jzmqmcjcfQiong_jsxm.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/jzmqmcjcs.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jzmqmcjcfQiong_xzsf: '',
					jzmqmcjcfQiong_xzbz: '',
					jzmqmcjcfQiong_jsxm: '',
					jzmqmcjcfQiong_xflx: '',
					jzmqmcjcfQiong_gzl: '',
					jzmqmcjcfQiong_dw: '',
					jzmqmcjcfQiong_sf: '',
					jzmqmcjcfQiong_dayCount: '',
					jzmqmcjcfQiong_dzzk: '50',
					jzmqmcjcfQiong_nums: '',
					type: 'jzmqmcjcfQiong'
				},
				multiSelector: {
					jzmqmcjcfQiong_xzsf: [],
					jzmqmcjcfQiong_xzbz: [],
					jzmqmcjcfQiong_jsxm: [],
					jzmqmcjcfQiong4: '',
					jzmqmcjcfQiong_xflx: [],//5
					jzmqmcjcfQiong_dw: '',
					jzmqmcjcfQiong_sf: '',
					jzmqmcjcfQiong8: '',
				},
				pickerIndex: {
					jzmqmcjcfQiong_xzsf: 0,
					jzmqmcjcfQiong_xzbz: 0,
					jzmqmcjcfQiong_jsxm: 0,
					jzmqmcjcfQiong_xflx: 0,
				},
				showSelector: {
					jzmqmcjcfQiong_xzsf: true,
					jzmqmcjcfQiong_xzbz: true,
					jzmqmcjcfQiong_jsxm: true,
					jzmqmcjcfQiong4: false,
					jzmqmcjcfQiong_xflx: true,
					jzmqmcjcfQiong_dw: true,
					jzmqmcjcfQiong_sf: false,
					jzmqmcjcfQiong8: false,
				},
				datajson:'',
				showModalName:null,
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
						"title": "细分类型",
						"text": "查看具体类型"
					},
					{
						"id": "4",
						"title": "天数",
						"text": "输入天数"
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
			jsxmQiong
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
