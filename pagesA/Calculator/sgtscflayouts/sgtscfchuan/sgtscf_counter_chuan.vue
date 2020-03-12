<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfChuan1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfChuan1[pickerIndex.sgtscfChuan1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfChuan_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfChuan_standard">
						{{multiSelector.sgtscfChuan_standard[pickerIndex.sgtscfChuan_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(286,multiSelector.sgtscfChuan_standard[pickerIndex.sgtscfChuan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfChuan_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfChuan_category" :value="pickerIndex.sgtscfChuan_category"
				 :range="multiSelector.sgtscfChuan_category">
					<view class="picker">
						{{multiSelector.sgtscfChuan_category[pickerIndex.sgtscfChuan_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfChuan4 || showSelector.sgtscfChuan_units">
				<view class="title">{{multiSelector.sgtscfChuan4}}</view>
				<input type="digit" v-model="needVal.sgtscfChuan_amount"></input>
				<uni-tag :text="multiSelector.sgtscfChuan_units" type="defult" v-model="multiSelector.sgtscfChuan_units"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfChuan_discount" /></input>
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
	// import datajson from '@/common/json/sgtscfs/sgtscfs-chuan.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfChuan_standard: '',
					sgtscfChuan_category: '',
					sgtscfChuan_amount: '',
					sgtscfChuan_graded: '',
					sgtscfChuan_fl: '',
					sgtscfChuan_discount: '100',
					type: 'sgtscfChuan'
				},
				multiSelector: {
					sgtscfChuan1: [],
					sgtscfChuan_standard: [],
					sgtscfChuan_category: [],
					sgtscfChuan4: '',
					sgtscfChuan_units: '',
					sgtscfChuan_graded: '',
					sgtscfChuan_fl: '',
				},
				showSelector: {
					sgtscfChuan1: true,
					sgtscfChuan_standard: true,
					sgtscfChuan_category: true,
					sgtscfChuan4: true,
					sgtscfChuan_units: true,
					sgtscfChuan_graded: false,
					sgtscfChuan_fl: false,
				},
				pickerIndex: {
					sgtscfChuan1: 0,
					sgtscfChuan_standard: 0,
					sgtscfChuan_category: 0,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtchuan1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgtchuan2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-chuan.json',
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
