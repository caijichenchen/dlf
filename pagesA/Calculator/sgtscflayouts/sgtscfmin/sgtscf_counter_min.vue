<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">福建省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfMin1">
				<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.sgtscfMin1[pickerIndex.sgtscfMin1]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfMin_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfMin_standard">
						{{multiSelector.sgtscfMin_standard[pickerIndex.sgtscfMin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(253,multiSelector.sgtscfMin_standard[pickerIndex.sgtscfMin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfMin_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfMin_category" :value="pickerIndex.sgtscfMin_category"
				 :range="multiSelector.sgtscfMin_category">
					<view class="picker">
						{{multiSelector.sgtscfMin_category[pickerIndex.sgtscfMin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfMin4 || showSelector.sgtscfMin_units">
				<view class="title">{{multiSelector.sgtscfMin4}}</view>
				<input type="digit" v-model="needVal.sgtscfMin_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfMin_units" type="defult" v-model="multiSelector.sgtscfMin_units"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfMin8 || showSelector.sgtscfMin_ndxs">
				<view class="title">{{multiSelector.sgtscfMin8}}</view>
				<input type="digit" v-model="needVal.sgtscfMin_ndxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfMin_ndxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input type="digit" v-model="needVal.sgtscfMin_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfMin_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfMin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<ndxz-min :showModalName="showModalName" v-on:hideModal="hideModal" :sgtscfMin9="multiSelector.sgtscfMin9"></ndxz-min>
		<tzxs-min :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-min>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/sgtscfs/sgtscfs-min.json'
	import ndxzMin from './sgtscfMin_ndxs.vue'
	import tzxsMin from './sgtscfMin_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfMin_standard: '',
					sgtscfMin_category: '',
					sgtscfMin4: '',
					sgtscfMin_gcl: '',
					sgtscfMin_graded: '',
					sgtscfMin_fl: '',
					sgtscfMin_ndxs: '',
					sgtscfMin_tzxs: '1',
					sgtscfMin_discount: '100',
					type: 'sgtscfMin'
				},
				multiSelector: {
					sgtscfMin1: [],
					sgtscfMin_standard: [],
					sgtscfMin_category: [],
					sgtscfMin4: '',
					sgtscfMin_units: '',
					sgtscfMin_graded: '',
					sgtscfMin_fl: '',
					sgtscfMin8: '',
					sgtscfMin9: '',
					sgtscfMin_ndxs: '',
				},
				showSelector: {
					sgtscfMin1: true,
					sgtscfMin_standard: true,
					sgtscfMin_category: true,
					sgtscfMin4: true,
					sgtscfMin_units: true,
					sgtscfMin_graded: false,
					sgtscfMin_fl: false,
					sgtscfMin8: true,
					sgtscfMin9: false,
					sgtscfMin_ndxs: true,
				},
				pickerIndex: {
					sgtscfMin1: 0,
					sgtscfMin_standard: 0,
					sgtscfMin_category: 0,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgmin1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgmin2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-min.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			ndxzMin,
			tzxsMin
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
