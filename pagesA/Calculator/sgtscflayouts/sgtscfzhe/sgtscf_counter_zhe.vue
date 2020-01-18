<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfZhe_province">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfZhe_province[pickerIndex.sgtscfZhe_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfZhe_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">
					{{multiSelector.sgtscfZhe_standard[pickerIndex.sgtscfZhe_standard]}}
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(322,multiSelector.sgtscfZhe_standard[pickerIndex.sgtscfZhe_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfZhe_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfZhe_category" :value="pickerIndex.sgtscfZhe_category"
				 :range="multiSelector.sgtscfZhe_category">
					<view class="picker">
						{{multiSelector.sgtscfZhe_category[pickerIndex.sgtscfZhe_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">{{multiSelector.sgtscfZhe4}}</view>
				<input type="text" v-model="needVal.sgtscfZhe_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfZhe_units" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-zhe.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfZhe_category: "",
					sgtscfZhe_discount: "100",
					sgtscfZhe_fl: "",
					sgtscfZhe_gcl: "",
					sgtscfZhe_graded: "",
					sgtscfZhe_standard: "",
					type: "sgtscfZhe",
				},
				multiSelector: {
					sgtscfZhe_province: [],
					sgtscfZhe_standard: [],
					sgtscfZhe_category: [],
					sgtscfZhe4: '',
					sgtscfZhe_units: '',
					sgtscfZhe_graded: '',
					sgtscfZhe_fl: '',
				},
				pickerIndex: {
					sgtscfZhe_province: 0,
					sgtscfZhe_standard: 0,
					sgtscfZhe_category: 0,
					sgtscfZhe4: true,
					sgtscfZhe_units: true,
					sgtscfZhe_graded: false,
					sgtscfZhe_fl: false,
				},
				showSelector: {
					sgtscfZhe_standard: true,
					sgtscfZhe_category: true,
					sgtscfZhe_fl: true,
					sgtscfZhe_province: true,
				},
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "sgzhe1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgzhe2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-zhe.json',
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
