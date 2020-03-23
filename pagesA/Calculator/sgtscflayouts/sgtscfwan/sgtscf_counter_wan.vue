<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfWan1">
				<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.sgtscfWan1[pickerIndex.sgtscfWan1]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfWan_standard">
				<view class="title">选择标准</view>
					<view class="picker" v-model="needVal.sgtscfWan_standard">
						{{multiSelector.sgtscfWan_standard[pickerIndex.sgtscfWan_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(278,multiSelector.sgtscfWan_standard[pickerIndex.sgtscfWan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfWan_category">
				<view class="title">{{multiSelector.sgtscfWan3}}</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfWan_category" :value="pickerIndex.sgtscfWan_category"
				 :range="multiSelector.sgtscfWan_category">
					<view class="picker">
						{{multiSelector.sgtscfWan_category[pickerIndex.sgtscfWan_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfWan_scope">
				<view class="title">工程概(预)算金额</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfWan_scope" :value="pickerIndex.sgtscfWan_scope"
				 :range="multiSelector.sgtscfWan_scope">
					<view class="picker">
						{{multiSelector.sgtscfWan_scope[pickerIndex.sgtscfWan_scope]}}
					</view>
				</picker>
				<uni-tag text="万元" type="defult" ></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfWan8">
				<view class="title">{{multiSelector.sgtscfWan8}}</view>
				<input type="digit" v-model="needVal.sgtscfWan_sjf" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">费率a</view>
				<input type="digit" v-model="needVal.sgtscfWan_sjf" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfWan_discount" /></input>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-ba.json'
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
					sgtscfWan_standard: '',
					sgtscfWan_category: '',
					sgtscfWan_scope: '',
					sgtscfWan_sjf: '',
					sgtscfWan_fl: '',
					sgtscfWan_discount: '100',
					type:'sgtscfWan'
				},
				multiSelector: {
					sgtscfWan1: [],
					sgtscfWan_standard: [],
					sgtscfWan3: '',
					sgtscfWan_category: [],
					sgtscfWan_scope: [],
					sgtscfWan_fl: '',
					sgtscfWan7: '',
					sgtscfWan8: '',
				},
				showSelector: {
					sgtscfWan1: true,
					sgtscfWan_standard: true,
					sgtscfWan3: true,
					sgtscfWan_category: true,
					sgtscfWan_scope:true,
					sgtscfWan_fl:false,
					sgtscfWan7:true,
					sgtscfWan8:true
				},
				pickerIndex: {
					sgtscfWan1: 0,
					sgtscfWan_standard: 0,
					sgtscfWan_category: 0,
					sgtscfWan_scope:0
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtsba1",
						"title": "计算类别",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgtsba2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-wan.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>

<style>

</style>
