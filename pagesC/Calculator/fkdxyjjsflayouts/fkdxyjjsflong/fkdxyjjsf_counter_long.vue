<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">甘肃省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfLong_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfLong_province" :value="pickerIndex.fkdxyjjsfLong_province"
				 :range="multiSelector.fkdxyjjsfLong_province">
					<view class="picker">
						{{multiSelector.fkdxyjjsfLong_province[pickerIndex.fkdxyjjsfLong_province]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfLong_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfLong_standard" :value="pickerIndex.fkdxyjjsfLong_standard"
				 :range="multiSelector.fkdxyjjsfLong_standard">
					<view class="picker">
						{{multiSelector.fkdxyjjsfLong_standard[pickerIndex.fkdxyjjsfLong_standard]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="digit" v-model="needVal.fkdxyjjsfLong_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfLong_category">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfLong_category" :value="pickerIndex.fkdxyjjsfLong_category"
				 :range="multiSelector.fkdxyjjsfLong_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfLong_category[pickerIndex.fkdxyjjsfLong_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.fkdxyjjsfLong_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from './fkdxyjjsf.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
		},
		data() {
			return {
				needVal: {
					fkdxyjjsfLong_jsmj: '',
					fkdxyjjsfLong_standard: '',
					fkdxyjjsfLong_category: '',
					fkdxyjjsfLong_jj: '',
					fkdxyjjsfLong_discount: 40,
					type: "fkdxyjjsfLong"
				},
				multiSelector: {
					fkdxyjjsfLong_province: [],
					fkdxyjjsfLong_standard: [],
					fkdxyjjsfLong_category: [],
					fkdxyjjsfLong_jj: '',
				},
				pickerIndex: {
					fkdxyjjsfLong_province: 0,
					fkdxyjjsfLong_standard: 0,
					fkdxyjjsfLong_category: 0,
				},
				showSelector: {
					fkdxyjjsfLong_standard: true,
					fkdxyjjsfLong_category: true,
					fkdxyjjsfLong_jj: true,
					fkdxyjjsfLong_province: true,
				},
				datajson:datajson,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "建设面积",
						"text": "请确定好工程费用"
					},
					{
						"id": "2",
						"title": "计算区域",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "3",
						"title": "计算区域",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
	}
</script>

<style>

</style>
