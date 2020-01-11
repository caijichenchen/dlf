<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">贵州省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQian_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfQian_province" :value="pickerIndex.fkdxyjjsfQian_province"
				 :range="multiSelector.fkdxyjjsfQian_province">
					<view class="picker">
						{{multiSelector.fkdxyjjsfQian_province[pickerIndex.fkdxyjjsfQian_province]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQian_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfQian_standard" :value="pickerIndex.fkdxyjjsfQian_standard"
				 :range="multiSelector.fkdxyjjsfQian_standard">
					<view class="picker">
						{{multiSelector.fkdxyjjsfQian_standard[pickerIndex.fkdxyjjsfQian_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(956,multiSelector.fkdxyjjsfQian_standard[pickerIndex.fkdxyjjsfQian_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">应修建防空地下室面积</view>
				<input type="text" id="sjf" v-model="needVal.fkdxyjjsfQian_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQian_category">
				<!-- <input type="hidden" v-show='false' v-model="needVal.fkdxyjjsfQian_graded"> -->
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfQian_category" :value="pickerIndex.fkdxyjjsfQian_category"
				 :range="multiSelector.fkdxyjjsfQian_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfQian_category[pickerIndex.fkdxyjjsfQian_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfQian_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from './fkdxyjjsf.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfQian_jsmj: '',
					fkdxyjjsfQian_standard: '',
					fkdxyjjsfQian_category: '',
					fkdxyjjsfQian_jj: '',
					fkdxyjjsfQian_discount: 40,
					type: "fkdxyjjsfQian"

				},
				multiSelector: {
					fkdxyjjsfQian_province: [],
					fkdxyjjsfQian_standard: [],
					fkdxyjjsfQian_category: [],
					fkdxyjjsfQian_jj: '',

				},
				pickerIndex: {
					fkdxyjjsfQian_province: 0,
					fkdxyjjsfQian_standard: 0,
					fkdxyjjsfQian_category: 0,
				},
				showSelector: {
					fkdxyjjsfQian_standard: true,
					fkdxyjjsfQian_category: true,
					fkdxyjjsfQian_jj: true,
					fkdxyjjsfQian_province: true,
				},
				datajson:datajson,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "建设面积",
						"text": "请确定好工程费用"
					},
					{
						"id": "2",
						"title": "计算区域",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "3",
						"title": "计算区域",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
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


