<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfJi_province">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fkdxyjjsfJi_province[pickerIndex.fkdxyjjsfJi_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfJi_standard">
				<view class="title">计算依据</view>
					<view class="title m-left">
						{{multiSelector.fkdxyjjsfJi_standard[pickerIndex.fkdxyjjsfJi_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1616,multiSelector.fkdxyjjsfJi_standard[pickerIndex.fkdxyjjsfJi_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfJi_category">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfJi_category" :value="pickerIndex.fkdxyjjsfJi_category"
				 :range="multiSelector.fkdxyjjsfJi_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfJi_category[pickerIndex.fkdxyjjsfJi_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfJi4">
				<view class="title">{{multiSelector.fkdxyjjsfJi4}}</view>
				<input type="text" v-model="needVal.fkdxyjjsfJi_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfJi_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
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
	import datajson from '@/common/json/fkydjsfs/fkydjsfs-ji.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfJi_jsmj: '',
					fkdxyjjsfJi_standard: '',
					fkdxyjjsfJi_category: '',
					fkdxyjjsfJi_jj: '',
					fkdxyjjsfJi_discount: '40',
					type: "fkdxyjjsfJi"
				},
				multiSelector: {
					fkdxyjjsfJi_province: [],
					fkdxyjjsfJi_standard: [],
					fkdxyjjsfJi_category: [],
					fkdxyjjsfJi4: '',
					fkdxyjjsfJi_jj: '',
				},
				pickerIndex: {
					fkdxyjjsfJi_province: 0,
					fkdxyjjsfJi_standard: 0,
					fkdxyjjsfJi_category: 0,
				},
				showSelector: {
					fkdxyjjsfJi_province: true,
					fkdxyjjsfJi_standard: true,
					fkdxyjjsfJi_category: true,
					fkdxyjjsfJi4: true,
					fkdxyjjsfJi_jj: false,
				},
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "计算区域",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "2",
						"title": "计算区域",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
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
