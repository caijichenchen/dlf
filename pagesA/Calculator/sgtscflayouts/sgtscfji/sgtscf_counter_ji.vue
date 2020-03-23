<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfJi_province">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfJi_province[pickerIndex.sgtscfJi_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJi_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.sgtscfJi_standard[pickerIndex.sgtscfJi_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(248,multiSelector.sgtscfJi_standard[pickerIndex.sgtscfJi_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJi_scope">
				<view class="title">工程概(预)算金额M:</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfJi_scope" :value="pickerIndex.sgtscfJi_scope"
				 :range="multiSelector.sgtscfJi_scope">
					<view class="picker">
						{{multiSelector.sgtscfJi_scope[pickerIndex.sgtscfJi_scope]}}
					</view>
				</picker>
				<uni-tag text="万元" type="defult" ></uni-tag>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">设计费</view>
				<input type="digit" v-model="needVal.sgtscfJi_sjf"></input>
				<uni-tag text="万元" type="defult" ></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" data-target="sgtscfJi_sjf">设计费计算</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJi_fl">
				<view class="title">费率α</view>
				<input type="digit" v-model="needVal.sgtscfJi_fl" /></input>
				<uni-tag text="%" type="defult" ></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>

			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfJi_discount" /></input>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-ji.json'
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
					sgtscfJi_standard: '',
					sgtscfJi_scope: '',
					sgtscfJi_sjf: '',
					sgtscfJi_fl: '',
					sgtscfJi_discount: '100',
					type: 'sgtscfJi'
				},
				multiSelector: {
					sgtscfJi_province: [],
					sgtscfJi_standard: [],
					sgtscfJi_scope: [],
					sgtscfJi_fl: '',
					sgtscfJi5: '',
				},
				showSelector: {
					sgtscfJi_province: true,
					sgtscfJi_standard: true,
					sgtscfJi_scope: true,
					sgtscfJi_fl: true,
					sgtscfJi5: false,
				},
				pickerIndex: {
					sgtscfJi_province: 0,
					sgtscfJi_standard: 0,
					sgtscfJi_scope: 0,
				},
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "sgtji1",
						"title": "费率α",
						"text": "施工图审查费最多收取勘察设计费"
					},
					{
						"id": "sgtji2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-ji.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>

</style>
