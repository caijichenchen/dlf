<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfHei1[pickerIndex.sgtscfHei1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfHei_standard">
						{{multiSelector.sgtscfHei_standard[pickerIndex.sgtscfHei_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1644,multiSelector.sgtscfHei_standard[pickerIndex.sgtscfHei_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei_category">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfHei_category" :value="pickerIndex.sgtscfHei_category"
				 :range="multiSelector.sgtscfHei_category">
					<view class="picker">
						{{multiSelector.sgtscfHei_category[pickerIndex.sgtscfHei_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei4 || showSelector.sgtscfHei_dw">
				<view class="title">{{multiSelector.sgtscfHei4}}</view>
				<input type="digit" v-model="needVal.sgtscfHei_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfHei_dw" type="defult" v-model="multiSelector.sgtscfHei_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfHei_jtfl" :value="pickerIndex.sgtscfHei_jtfl"
				 :range="multiSelector.sgtscfHei_jtfl">
					<view class="picker">
						{{multiSelector.sgtscfHei_jtfl[pickerIndex.sgtscfHei_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHei_cs">
				<view class="title">层数</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfHei_cs" :value="pickerIndex.sgtscfHei_cs"
				 :range="multiSelector.sgtscfHei_cs">
					<view class="picker">
						{{multiSelector.sgtscfHei_cs[pickerIndex.sgtscfHei_cs]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input type="digit" v-model="needVal.sgtscfHei_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfHei_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfHei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<tzxsHei :showModalName="showModalName" v-on:hideModal="hideModal"></tzxsHei>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/sgtscfs/sgtscfs-hei.json'
	import tzxsHei from './sgtscfHei_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfHei_standard: '',
					sgtscfHei_category: '',
					sgtscfHei_gcl: '',
					sgtscfHei_jtfl: '',
					sgtscfHei_cs: '',
					sgtscfHei_fl: '',
					sgtscfHei_graded: '',
					sgtscfHei_tzxs: '1',
					sgtscfHei_discount: '100',
					type: 'sgtscfHei'
				},
				multiSelector: {
					sgtscfHei1: [],
					sgtscfHei_standard: [],
					sgtscfHei_category: [],
					sgtscfHei4: '',
					sgtscfHei_dw: '',
					sgtscfHei_jtfl: [],
					sgtscfHei_cs: [],
					sgtscfHei_fl: '',
					sgtscfHei_graded: '',
				},
				showSelector: {
					sgtscfHei1: true,
					sgtscfHei_standard: true,
					sgtscfHei_category: true,
					sgtscfHei4: true,
					sgtscfHei_dw: true,
					sgtscfHei_jtfl: true,
					sgtscfHei_cs: [],
					sgtscfHei_fl: false,
					sgtscfHei_graded: false,
				},
				pickerIndex: {
					sgtscfHei1: 0,
					sgtscfHei_standard: 0,
					sgtscfHei_category: 0,
					sgtscfHei_jtfl: 0,
					sgtscfHei_cs: 0,
				},
				datajson:'',
				modalData: null,
				showModalName:null,
				explain: [
					{
						"id": "sgthei1",
						"title": "项目类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgthei2",
						"title": "具体分类",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgthei3",
						"title": "层数",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgthei4",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-hei.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsHei
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
