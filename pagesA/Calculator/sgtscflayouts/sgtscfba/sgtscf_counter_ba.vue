<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfBa1">
				<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.sgtscfBa1[pickerIndex.sgtscfBa1]}}
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfBa_standard">
				<view class="title">选择标准</view>
					<view class="picker" v-model="needVal.sgtscfBa_standard">
						{{multiSelector.sgtscfBa_standard[pickerIndex.sgtscfBa_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(278,multiSelector.sgtscfBa_standard[pickerIndex.sgtscfBa_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfBa_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfBa_category" :value="pickerIndex.sgtscfBa_category"
				 :range="multiSelector.sgtscfBa_category">
					<view class="picker">
						{{multiSelector.sgtscfBa_category[pickerIndex.sgtscfBa_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfBa4 || showSelector.sgtscfBa_dw">
				<view class="title">{{multiSelector.sgtscfBa4}}</view>
				<input type="text" v-model="needVal.sgtscfBa_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfBa_dw" type="defult" v-model="multiSelector.sgtscfBa_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfBa8">
				<view class="title">{{multiSelector.sgtscfBa8}}</view>
				<input type="text" v-model="needVal.sgtscfBa_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfBa_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfBa_discount" /></input>
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
	import datajson from '@/common/json/sgtscfs/sgtscfs-ba.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfBa_standard: '',
					sgtscfBa_category: '',
					sgtscfBa_gcl: '',
					sgtscfBa_graded: '',
					sgtscfBa_fl: '',
					sgtscfBa_tzxs: '',
					sgtscfBa_discount: '100',
					type:'sgtscfBa'
				},
				multiSelector: {
					sgtscfBa1: [],
					sgtscfBa_standard: [],
					sgtscfBa_category: [],
					sgtscfBa4: '',
					sgtscfBa_dw: '',
					sgtscfBa_graded: '',
					sgtscfBa_fl: '',
					sgtscfBa8: '',
					sgtscfBa9: '',
					sgtscfBa_tzxs: '',
				},
				showSelector: {
					sgtscfBa1: true,
					sgtscfBa_standard: true,
					sgtscfBa_category: true,
					sgtscfBa4: true,
					sgtscfBa_dw: true,
					sgtscfBa_graded: false,
					sgtscfBa_fl: false,
					sgtscfBa8: true,
					sgtscfBa9: false,
					sgtscfBa_tzxs: true,
				},
				pickerIndex: {
					sgtscfBa1: 0,
					sgtscfBa_standard: 0,
					sgtscfBa_category: 0,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtsba1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgtsba2",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
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
