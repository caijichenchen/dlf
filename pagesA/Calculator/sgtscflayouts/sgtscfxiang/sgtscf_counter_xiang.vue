<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfXiang1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfXiang1[pickerIndex.sgtscfXiang1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfXiang_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfXiang_standard">
						{{multiSelector.sgtscfXiang_standard[pickerIndex.sgtscfXiang_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(328,multiSelector.sgtscfXiang_standard[pickerIndex.sgtscfXiang_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfXiang_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfXiang_category" :value="pickerIndex.sgtscfXiang_category"
				 :range="multiSelector.sgtscfXiang_category">
					<view class="picker">
						{{multiSelector.sgtscfXiang_category[pickerIndex.sgtscfXiang_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfXiang_xmlb">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfXiang_xmlb" :value="pickerIndex.sgtscfXiang_xmlb"
				 :range="multiSelector.sgtscfXiang_xmlb">
					<view class="picker">
						{{multiSelector.sgtscfXiang_xmlb[pickerIndex.sgtscfXiang_xmlb]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfXiang4 || showSelector.sgtscfXiang_dw">
				<view class="title">{{multiSelector.sgtscfXiang4}}</view>
				<input type="text" v-model="needVal.sgtscfXiang_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfXiang_dw" type="defult" v-model="multiSelector.sgtscfXiang_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="multiSelector.sgtscfXiang_tzxs || multiSelector.sgtscfXiang10">
				<view class="title">调整系数</view>
				<input v-model="needVal.sgtscfXiang_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfXiang_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfXiang_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<sgtdcf-xiang :showModalName="showModalName" v-on:hideModal="hideModal" :sgtscfXiang10="multiSelector.sgtscfXiang10"></sgtdcf-xiang>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/sgtscfs/sgtscfs-xiang.json'
	import sgtdcfXiang from './sgtscfXiang_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfXiang_standard: '',
					sgtscfXiang_category: '',
					sgtscfXiang_xmlb: '',
					sgtscfXiang_gcl: '',
					sgtscfXiang_fl: '',
					sgtscfXiang_graded: '',
					sgtscfXiang_tzxs: '1',
					sgtscfXiang_discount: '100',
					type: 'sgtscfXiang'
				},
				multiSelector: {
					sgtscfXiang1: [],
					sgtscfXiang_standard: [],
					sgtscfXiang_category: [],
					sgtscfXiang4: '',
					sgtscfXiang_dw: '',
					sgtscfXiang_xmlb: [],//6
					sgtscfXiang_fl: '',
					sgtscfXiang_graded: '',
					sgtscfXiang_tzxs: '',
					sgtscfXiang10: '',
				},
				showSelector: {
					sgtscfXiang1: true,
					sgtscfXiang_standard: true,
					sgtscfXiang_category: true,
					sgtscfXiang4: true,
					sgtscfXiang_dw: true,
					sgtscfXiang_xmlb: true,
					sgtscfXiang_fl: false,
					sgtscfXiang_graded: false,
					sgtscfXiang_tzxs: true,
					sgtscfXiang10: false
				},
				pickerIndex: {
					sgtscfXiang1: 0,
					sgtscfXiang_standard: 0,
					sgtscfXiang_category: 0,
					sgtscfXiang_xmlb: 0,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtxiang1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgtxiang2",
						"title": "项目类别",
						"text": "项目规模划分见附件2：建筑工程建设项目设计规模划分表"
					},
					{
						"id": "sgtxiang3",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-xiang.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			sgtdcfXiang
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
