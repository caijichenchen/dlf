<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">铁路勘察设计收费</text>
		</div>
		
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_standard">
			<view class="title">计算依据</view>
			<picker class="select" @change="PickerChange" data-index="index0" data-name="tlkcsjsfGuo_standard" :value="pickerIndex.index0"
			 :range="multiSelector.tlkcsjsfGuo_standard">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_standard[pickerIndex.index0]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_jsdl">
			<view class="title">计算大类</view>
			<picker class="select" @change="PickerChange" data-index="index1" data-name="tlkcsjsfGuo_jsdl" :value="pickerIndex.index1"
			 :range="multiSelector.tlkcsjsfGuo_jsdl">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_jsdl[pickerIndex.index1]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_gcfl">
			<view class="title">工程分类</view>
			<picker class="select" @change="PickerChange" data-index="index2" data-name="tlkcsjsfGuo_gcfl" :value="pickerIndex.index2"
			 :range="multiSelector.tlkcsjsfGuo_gcfl">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_gcfl[pickerIndex.index2]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_gclx">
			<view class="title">工程类型</view>
			<picker class="select" @change="PickerChange" data-index="index2" data-name="tlkcsjsfGuo_gclx" :value="pickerIndex.index2"
			 :range="multiSelector.tlkcsjsfGuo_gclx">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_gclx[pickerIndex.index2]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.tlkcsjsfGuo_jslx">
			<view class="title">计算类型</view>
			<picker class="select" @change="PickerChange" data-index="index3" data-name="tlkcsjsfGuo_jslx" :value="pickerIndex.index3"
			 :range="multiSelector.tlkcsjsfGuo_jslx">
				<view class="picker">
					{{multiSelector.tlkcsjsfGuo_jslx[pickerIndex.index3]}}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group">
			<view class="title">{{multiSelector.tlkcsjsfGuo5}}</view>
			<input v-model="needVal.tlkcsjsfGuo_jfdw" /></input>
			<uni-tag text="正线公里" type="defult">{{multiSelector.tlkcsjsfGuo_sjgzldw}}</uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">{{multiSelector.tlkcsjsfGuo9}}</view>
			<input v-model="needVal.tlkcsjsfGuo_fzfz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_fzfz">点击说明</button>
		</view>
		
		<view class="cu-form-group">
			<view class="title">气温附加调整</view>
			<picker class="select" @change="PickerChanges" v-model="needVal.tlkcsjsfGuo_qwfjtz" :value="pickerIndex.index4"
			 :range="tlkcsjsfGuo_qwfjtz">
				<view class="picker">
					{{tlkcsjsfGuo_qwfjtz[pickerIndex.index4]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_qwfjtz">查看说明</button>
		</view>
		
		<view class="cu-form-group">
			<view class="title">高程调整</view>
			<input v-model="needVal.tlkcsjsfGuo_gdtz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_gdtz">点击选择</button>
		</view>
		
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input v-model="needVal.tlkcsjsfGuo_fdfd" /></input>
			<uni-tag text="%" type="defult">%</uni-tag>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_fdfd">点击选择</button>
		</view>
		
		<view class="cu-form-group">
			<view class="title">优惠折扣</view>
			<input v-model="needVal.tlkcsjsfGuo_yhzk" /></input>
			<uni-tag text="%" type="defult">%</uni-tag>
			<button type="primary" size="mini" @tap="showModal" data-target="tlkcsjsfGuo_yhzk">点击选择</button>
		</view>
		
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/tlkcsjsfs/tlkcsjsfs-all.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					tlkcsjsfGuo_standard: '',
					tlkcsjsfGuo_jsdl: '',
					tlkcsjsfGuo_gcfl: '',
					tlkcsjsfGuo_gclx: '',
					tlkcsjsfGuo_jslx: '',
					tlkcsjsfGuo_jfdw: '',
					tlkcsjsfGuo_fzfz: '',
					tlkcsjsfGuo_gdtz: '',
					tlkcsjsfGuo_fdfd: '',
					tlkcsjsfGuo_yhzk: ''
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
					index0: 0,
					index1: 0,
					index2: 0,
					index3: 0,
					index4: 0
				},
				tlkcfGuo_jsyj: ['计价格[2002]10号'],
				tlkcfGuo_xzxm: ['初测','定测','一次勘察'],
				tlkcsjsfGuo_qwfjtz: ['1','1.2'],
				showModalName: null,
				datajson:datajson
			}
		},
		components: {
			
		},
		methods:{
			PickerChanges(e) {
				this.pickerIndex.index4 = e.detail.value
			},
			PickerChangess(e) {
				this.pickerIndex.index1 = e.detail.value
			},
			PickerChangesss(e) {
				this.pickerIndex.index3 = e.detail.value
			},
		}
	}
</script>

<style>
</style>
