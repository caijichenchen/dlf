<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">贵州施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfQian_province">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfQian_province[pickerIndex.sgtscfQian_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfQian_standard">
				<view class="title">计算类别</view>
					<view class="title">
						{{multiSelector.sgtscfQian_standard[pickerIndex.sgtscfQian_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(265,multiSelector.sgtscfQian_standard[pickerIndex.sgtscfQian_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfQian_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfQian_category" :value="pickerIndex.sgtscfQian_category"
				 :range="multiSelector.sgtscfQian_category">
					<view class="picker">
						{{multiSelector.sgtscfQian_category[pickerIndex.sgtscfQian_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">{{multiSelector.sgtscfQian4}}</view>
				<input v-model="needVal.sgtscfQian_gcl" /></input>
				<uni-tag :text="multiSelector.sgtscfQian_units" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfQian_discount" /></input>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-qian.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfQian_standard: "",
					sgtscfQian_category: "",
					sgtscfQian_discount: "100",
					sgtscfQian_fl: "",
					sgtscfQian_gcl: "",
					sgtscfQian_graded: "",
					type: "sgtscfQian",
				},
				multiSelector: {
					sgtscfQian_province: [],
					sgtscfQian_standard: [],
					sgtscfQian_category: [],
					sgtscfQian4: '',
					sgtscfQian_units: '',
					sgtscfQian_graded: '',
					sgtscfQian_fl: '',
				},
				pickerIndex: {
					sgtscfQian_province: 0,
					sgtscfQian_standard: 0,
					sgtscfQian_category: 0,
					sgtscfQian4: true,
					sgtscfQian_units: true,
					sgtscfQian_graded: false,
					sgtscfQian_fl: false,
				},
				showSelector: {
					sgtscfQian_standard: true,
					sgtscfQian_category: true,
					sgtscfQian_fl: true,
					sgtscfQian_province: true,
				},
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "sgtqian1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgtqian2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-qian.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
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
