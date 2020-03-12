<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">铁建设函[2002]86号</text>
		</div>
		
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_standard">
			<view class="title">计算依据</view>
			<picker class="select" @change="PickerChange" data-name="tlkcsjsfGuo_standard" :value="pickerIndex.tlkcsjsfGuo_standard"
			 :range="multiSelector.tlkcsjsfGuo_standard">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_standard[pickerIndex.tlkcsjsfGuo_standard]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_jsdl">
			<view class="title">计算大类</view>
			<picker class="select" @change="PickerChange" data-name="tlkcsjsfGuo_jsdl" :value="pickerIndex.tlkcsjsfGuo_jsdl"
			 :range="multiSelector.tlkcsjsfGuo_jsdl">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_jsdl[pickerIndex.tlkcsjsfGuo_jsdl]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_gcfl">
			<view class="title">工程分类</view>
			<picker class="select" @change="PickerChange"  data-name="tlkcsjsfGuo_gcfl" :value="pickerIndex.tlkcsjsfGuo_gcfl"
			 :range="multiSelector.tlkcsjsfGuo_gcfl">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_gcfl[pickerIndex.tlkcsjsfGuo_gcfl]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_gclx">
			<view class="title">工程类型</view>
			<picker class="select" @change="PickerChange"  data-name="tlkcsjsfGuo_gclx" :value="pickerIndex.tlkcsjsfGuo_gclx"
			 :range="multiSelector.tlkcsjsfGuo_gclx">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_gclx[pickerIndex.tlkcsjsfGuo_gclx]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_jslx">
			<view class="title">计算类型</view>
			<picker class="select" @change="PickerChange" data-name="tlkcsjsfGuo_jslx" :value="pickerIndex.tlkcsjsfGuo_jslx"
			 :range="multiSelector.tlkcsjsfGuo_jslx">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_jslx[pickerIndex.tlkcsjsfGuo_jslx]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">{{multiSelector.tlkcsjsfGuo5}}</view>
			<input type="digit" v-model="needVal.tlkcsjsfGuo_jfdw" /></input>
			<uni-tag text="正线公里" type="defult">{{multiSelector.tlkcsjsfGuo_sjgzldw}}</uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">{{multiSelector.tlkcsjsfGuo9}}</view>
			<input type="digit" v-model="needVal.tlkcsjsfGuo_fzfz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_fzfz">点击说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">气温附加调整</view>
			<picker class="select" @change="PickerChanges" :value="index0"
			 :range="tlkcsjsfGuo_qwfjtz">
				<view class="picker">
					{{tlkcsjsfGuo_qwfjtz[index0]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">高程调整</view>
			<input type="digit" v-model="needVal.tlkcsjsfGuo_gdtz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_gdtz">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input type="digit" v-model="needVal.tlkcsjsfGuo_fdfd" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">优惠折扣</view>
			<input type="digit" v-model="needVal.tlkcsjsfGuo_yhzk" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" modalName="tlkcsjsfGuo_gdtz"></gctz>
		<fzfz :showModalName="showModalName" v-on:hideModal="hideModal"></fzfz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/tlkcsjsfs/tlkcsjsfs-all.json'
	import gctz from '@/common/base/gctz.vue'
	import fzfz from './tlkcsjsfGuo_fzfz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/tlkcsjsfs/tlkcsjsfs-all.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					tlkcsjsfGuo_standard: '',
					tlkcsjsfGuo_jsdl: '',
					tlkcsjsfGuo_gcfl: '',
					tlkcsjsfGuo_gclx: '',
					tlkcsjsfGuo_jslx: '',
					tlkcsjsfGuo_jfdw: '',
					tlkcsjsfGuo_fzfz: '4',
					tlkcsjsfGuo_gdtz: '1.0',
					tlkcsjsfGuo_fdfd: '80',
					tlkcsjsfGuo_yhzk: '90',
					type: 'tlkcsjsfGuo'
				},
				multiSelector: {
					tlkcsjsfGuo_standard: [],
					tlkcsjsfGuo_jsdl: [],
					tlkcsjsfGuo_gcfl: [],
					tlkcsjsfGuo_gclx: [],
					tlkcsjsfGuo5: '',
					tlkcsjsfGuo_sjgzldw: '',
					tlkcsjsfGuo_jslx: [],
					tlkcsjsfGuo_fl: '',
					tlkcsjsfGuo9: '',
				},
				showSelector: {
					tlkcsjsfGuo_standard: true,
					tlkcsjsfGuo_jsdl: true,
					tlkcsjsfGuo_gcfl: true,
					tlkcsjsfGuo_gclx: true,
					tlkcsjsfGuo5: true,
					tlkcsjsfGuo_sjgzldw: true,
					tlkcsjsfGuo_jslx: true,
					tlkcsjsfGuo_fl: false,
					tlkcsjsfGuo9: true,
				},
				pickerIndex: {
					tlkcsjsfGuo_standard: 0,
					tlkcsjsfGuo_jsdl: 0,
					tlkcsjsfGuo_gcfl: 0,
					tlkcsjsfGuo_gclx: 0,
					tlkcsjsfGuo_jslx: 0,
				},
				tlkcfGuo_jsyj: ['计价格[2002]10号'],
				tlkcfGuo_xzxm: ['初测','定测','一次勘察'],
				tlkcsjsfGuo_qwfjtz: ['1','1.2'],
				index0: 0,
				showModalName: null,
				datajson:'',
				explain: [
					{
						"id": "2",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "3",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "各地区取值略有不同,根据当地行情决定"
					}
				]
			}
		},
		components: {
			gctz,
			fzfz
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.tlkcsjsfGuo_qwfjtz = this.tlkcsjsfGuo_qwfjtz[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>
</style>
