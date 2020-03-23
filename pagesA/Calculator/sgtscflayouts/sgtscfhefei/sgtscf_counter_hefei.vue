<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">合肥市施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfHefei1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfHefei1[pickerIndex.sgtscfHefei1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHefei_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfHefei_standard">
						{{multiSelector.sgtscfHefei_standard[pickerIndex.sgtscfHefei_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(320,multiSelector.sgtscfHefei_standard[pickerIndex.sgtscfHefei_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHefei_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfHefei_category" :value="pickerIndex.sgtscfHefei_category"
				 :range="multiSelector.sgtscfHefei_category">
					<view class="picker">
						{{multiSelector.sgtscfHefei_category[pickerIndex.sgtscfHefei_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHefei4 || showSelector.sgtscfHefei_units">
				<view class="title">{{multiSelector.sgtscfHefei4}}</view>
				<input type="digit" v-model="needVal.sgtscfHefei_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfHefei_units" type="defult" v-model="multiSelector.sgtscfHefei_units"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHefei8">
				<view class="title">{{multiSelector.sgtscfHefei8}}</view>
				<input type="digit" v-model="needVal.sgtscfHefei_ndxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfHefei_ndxs">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">调整系数</view>
				<input type="digit" v-model="needVal.sgtscfHefei_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfHefei_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfHefei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<tzxs-hefei :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-hefei>
		<ndxs-hefei :showModalName="showModalName" v-on:hideModal="hideModal" :sgtscfHefei9="multiSelector.sgtscfHefei9"></ndxs-hefei>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/sgtscfs/sgtscfs-hefei.json'
	import tzxsHefei from './sgtscfHefei_tzxs.vue'
	import ndxsHefei from './sgtscfHefei_ndxs.vue'
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
					sgtscfHefei_standard: '',
					sgtscfHefei_category: '',
					sgtscfHefei4: '',
					sgtscfHefei_gcl: '',
					sgtscfHefei_graded: '',
					sgtscfHefei_fl: '',
					sgtscfHefei_ndxs: '1',
					sgtscfHefei_tzxs: '1',
					sgtscfHefei_discount: '100',
					type: 'sgtscfHefei'
				},
				multiSelector: {
					sgtscfHefei1: [],
					sgtscfHefei_standard: [],
					sgtscfHefei_category: [],
					sgtscfHefei4: '',
					sgtscfHefei_units: '',
					sgtscfHefei_graded: '',
					sgtscfHefei_fl: '',
					sgtscfHefei8: '',
					sgtscfHefei9: '',
					sgtscfHefei_ndxs: '',
				},
				showSelector: {
					sgtscfHefei1: true,
					sgtscfHefei_standard: true,
					sgtscfHefei_category: true,
					sgtscfHefei4: true,
					sgtscfHefei_units: true,
					sgtscfHefei_graded: false,
					sgtscfHefei_fl: false,
					sgtscfHefei8: true,
					sgtscfHefei9: false,
					sgtscfHefei_ndxs: true,
				},
				pickerIndex: {
					sgtscfHefei1: 0,
					sgtscfHefei_standard: 0,
					sgtscfHefei_category: 0,
				},
				datajson:datajson,
				modalData: null,
				showModalName:null,
				explain: [
					{
						"id": "stthefei1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "stthefei2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-hefei.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsHefei,
			ndxsHefei,
		},
	}
</script>

<style>

</style>
