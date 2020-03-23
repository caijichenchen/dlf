<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfGui1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfGui1[pickerIndex.sgtscfGui1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGui_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfGui_standard">
						{{multiSelector.sgtscfGui_standard[pickerIndex.sgtscfGui_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(930,multiSelector.sgtscfGui_standard[pickerIndex.sgtscfGui_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGui_scope">
				<view class="title">工程概(预)算金额M:</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfGui_scope" :value="pickerIndex.sgtscfGui_scope"
				 :range="multiSelector.sgtscfGui_scope">
					<view class="picker">
						{{multiSelector.sgtscfGui_scope[pickerIndex.sgtscfGui_scope]}}
					</view>
				</picker>
				<uni-tag text="万元" type="defult" ></uni-tag>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">勘察设计费</view>
				<input type="digit" v-model="needVal.sgtscfGui_sjf"></input>
				<uni-tag text="万元" type="defult" ></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfGui_sjf">设计费计算</button>
			</view>
			<view class="cu-form-group">
				<view class="title">费率α</view>
				<input type="digit" v-model="needVal.sgtscfGui_fl" /></input>
				<uni-tag text="%" type="defult" ></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfGui_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-gui.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			}
		},
		data() {
			return {
				needVal: {
					sgtscfGui_standard: '',
					sgtscfGui_scope: '',
					sgtscfGui_sjf: '',
					sgtscfGui_fl: '',
					sgtscfGui_discount: '100',
					type: 'sgtscfGui'
				},
				multiSelector: {
					sgtscfGui1: [],
					sgtscfGui_standard: [],
					sgtscfGui_scope: [],
					sgtscfGui_fl: '',
					sgtscfGui5: '',
				},
				showSelector: {
					sgtscfGui1: true,
					sgtscfGui_standard: true,
					sgtscfGui_scope: true,
					sgtscfGui_fl: true,
					sgtscfGui5: false,
				},
				pickerIndex: {
					sgtscfGui1: 0,
					sgtscfGui_standard: 0,
					sgtscfGui_scope: 0,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtgui1",
						"title": "费率α",
						"text": "施工图审查费最多收取勘察设计费"
					},
					{
						"id": "sgtgui2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-gui.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>

</style>
