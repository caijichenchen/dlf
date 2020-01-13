<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省施工图审查费计算</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfJin_province">
				<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.sgtscfJin_province[pickerIndex.sgtscfJin_province]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJin_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfJin_standard">
						{{multiSelector.sgtscfJin_standard[pickerIndex.sgtscfJin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1556,multiSelector.sgtscfJin_standard[pickerIndex.sgtscfJin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJin_category">
				<view class="title">项目</view>
					<picker class="select" @change="PickerChange" data-name="sgtscfJin_category" :value="pickerIndex.sgtscfJin_category"
						:range="multiSelector.sgtscfJin_category">
						 <view class="picker">
							{{multiSelector.sgtscfJin_category[pickerIndex.sgtscfJin_category]}}
						 </view>
					</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfJin4">
				<view class="title">{{multiSelector.sgtscfJin4}}</view>
				<input v-model="needVal.sgtscfJin_gcl" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfJin_discount" /></input>
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
	import datajson from '@/common/json/sgtscfs/sgtscfs-jin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfJin_standard: "",
					type: "sgtscfJin",
					sgtscfJin_category: '',
					sgtscfJin_gcl: '',
					sgtscfJin_fl: '',
					sgtscfJin_graded: '',
					sgtscfJin_discount: '100',
					type: 'sgtscfJin'
				},
				multiSelector: {
					sgtscfJin_province: [],
					sgtscfJin_standard: [],
					sgtscfJin_category: [],
					sgtscfJin4: '',
					sgtscfJin_fl: '',
					sgtscfJin_graded: '',
				},
				pickerIndex: {
					sgtscfJin_province: 0,
					sgtscfJin_standard: 0,
					sgtscfJin_category: 0,
				},
				showSelector: {
					sgtscfJin_province: true,
					sgtscfJin_standard: true,
					sgtscfJin_category: true,
					sgtscfJin4: true,
					sgtscfJin_fl: false,
					sgtscfJin_graded: false,
				},
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "sgtjin1",
						"title": "项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgtjin2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
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
