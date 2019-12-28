<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfGuo1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfGuo1[pickerIndex.sgtscfGuo1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGuo_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfGuo_standard">
						{{multiSelector.sgtscfGuo_standard[pickerIndex.sgtscfGuo_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(153,multiSelector.sgtscfGuo_standard[pickerIndex.sgtscfGuo_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGuo_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfGuo_category" :value="pickerIndex.sgtscfGuo_category"
				 :range="multiSelector.sgtscfGuo_category">
					<view class="picker">
						{{multiSelector.sgtscfGuo_category[pickerIndex.sgtscfGuo_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGuo4 || showSelector.sgtscfGuo_dw">
				<view class="title">{{multiSelector.sgtscfGuo4}}</view>
				<input type="text" v-model="needVal.sgtscfGuo_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfGuo_dw" type="defult" v-model="multiSelector.sgtscfGuo_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfGuo7">
				<view class="title">{{multiSelector.sgtscfGuo7}}</view>
				<input v-model="needVal.sgtscfGuo_fl" /></input>
				<uni-tag text="%" type="defult" v-model="multiSelector.sgtscfGuo8"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from '@/common/json/sgtscfs/sgtscfs-guo.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfGuo_standard: '',
					sgtscfGuo_category: '',
					sgtscfGuo_gcl: '',
					sgtscfGuo_fl: '50',
					sgtscfGuo_discount: '100',
					type: 'sgtscfGuo'
				},
				multiSelector: {
					sgtscfGuo1: [],
					sgtscfGuo_standard: [],
					sgtscfGuo_category: [],
					sgtscfGuo4: '',
					sgtscfGuo_dw: '',
					sgtscfGuo_fl: '',//6
					sgtscfGuo7: '',//7
					sgtscfGuo8: '',
					sgtscfGuo9: '',
				},
				showSelector: {
					sgtscfGuo1: true,
					sgtscfGuo_standard: true,
					sgtscfGuo_category: true,
					sgtscfGuo4: true,
					sgtscfGuo_dw: true,
					sgtscfGuo_fl: true,
					sgtscfGuo7: true,
					sgtscfGuo8: true,
					sgtscfGuo9: false
				},
				pickerIndex: {
					sgtscfGuo1: 0,
					sgtscfGuo_standard: 0,
					sgtscfGuo_category: 0,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgguo1",
						"title": "计算类别",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgguo2",
						"title": "费率α",
						"text": "施工图审查费最多收取勘察设计费的%"
					},
					{
						"id": "sgguo3",
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
