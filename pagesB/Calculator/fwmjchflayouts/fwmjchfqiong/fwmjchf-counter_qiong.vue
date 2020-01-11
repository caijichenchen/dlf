<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">房屋面积测绘费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fwmjchfQiong_xzsf">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.fwmjchfQiong_xzsf[pickerIndex.fwmjchfQiong_xzsf]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="title">{{needVal.fwmjchfQiong_xzbz}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fwmjchfQiong_jslx">
				<view class="title">计算类型</view>
				<picker class="select" @change="PickerChange"  data-name="fwmjchfQiong_jslx" :value="pickerIndex.fwmjchfQiong_jslx"
				 :range="multiSelector.fwmjchfQiong_jslx">
					<view class="picker">
						{{multiSelector.fwmjchfQiong_jslx[pickerIndex.fwmjchfQiong_jslx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">测绘工作量</view>
				<input v-model="needVal.fwmjchfQiong_chgzl" /></input>
				<uni-tag :text="multiSelector.fwmjchfQiong_chgzldw" type="defult" v-model="needVal.fwmjchfQiong_chgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fwmjchfQiong_fccl || showSelector.fwmjchfQiong_xzqy">
				<view class="title">{{multiSelector.fwmjchfQiong_fccl}}</view>
				<picker class="select" @change="PickerChange" data-name="fwmjchfQiong_xzqy" :value="pickerIndex.fwmjchfQiong_xzqy"
				 :range="multiSelector.fwmjchfQiong_xzqy">
					<view class="picker">
						{{multiSelector.fwmjchfQiong_xzqy[pickerIndex.fwmjchfQiong_xzqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="fwmjchfQiong_xzqy">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.fwmjchfQiong_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fwmjchfQiong_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
			<explain></explain>
			<fwmjchf-fczl v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :fwmjchfQiong7="multiSelector.fwmjchfQiong7"></fwmjchf-fczl>
		</form>
		
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fwmjchfFczl from "./fwmjchf_fczl.vue"
	import datajson from '@/common/json/fwmjchfs.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fwmjchfQiong_xzsf: '',
					fwmjchfQiong_xzbz: '琼价审批[2010]397号',
					fwmjchfQiong_jslx: '',
					fwmjchfQiong_chgzl: '',
					fwmjchfQiong_chgzldw: '',
					fwmjchfQiong_xzqy: '',
					fwmjchfQiong_jg: '',
					fwmjchfQiong_fdfd: '90',
					fwmjchfQiong_yhzk: '40',
					fwmjchfQiong_nums: '',
					wrdjzfGuo_fl: '',
					type: 'fwmjchfQiong'
				},
				multiSelector: {
					fwmjchfQiong_xzsf: [],
					fwmjchfQiong_jslx: [],
					fwmjchfQiong_chgzldw: '',
					fwmjchfQiong_fccl: '',
					fwmjchfQiong_xzqy: [],
					fwmjchfQiong_jg: '',
					fwmjchfQiong7: '',
				},
				pickerIndex: {
					fwmjchfQiong_xzsf: 0,
					fwmjchfQiong_xzbz: 0,
					fwmjchfQiong_jslx: 0,
					fwmjchfQiong_xzqy: 0
				},
				showSelector: {
					fwmjchfQiong_xzsf: true,
					fwmjchfQiong_jslx: true,
					fwmjchfQiong_chgzldw: true,
					fwmjchfQiong_fccl: true,
					fwmjchfQiong_xzqy: true,
					fwmjchfQiong_jg: false,
					wrdjzfGuo_fl: false,
					fwmjchfQiong7: false
				},
				fwmjchfQiong_xzbz:['琼价审批[2010]397号'],
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择省份",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "2",
						"title": "选择标准",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "3",
						"title": "计算类型",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：90%~110%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			fwmjchfFczl
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
