<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">苏州市防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfSu_province" :value="pickerIndex.fkdxyjjsfSu_province"
				 :range="multiSelector.fkdxyjjsfSu_province">
					<view class="picker">
						{{multiSelector.fkdxyjjsfSu_province[pickerIndex.fkdxyjjsfSu_province]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfSu_standard" :value="pickerIndex.fkdxyjjsfSu_standard"
				 :range="multiSelector.fkdxyjjsfSu_standard">
					<view class="picker">
						{{multiSelector.fkdxyjjsfSu_standard[pickerIndex.fkdxyjjsfSu_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1669,multiSelector.fkdxyjjsfSu_standard[pickerIndex.fkdxyjjsfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="digit" v-model="needVal.fkdxyjjsfSu_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_category">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfSu_category" :value="pickerIndex.fkdxyjjsfSu_category"
				 :range="multiSelector.fkdxyjjsfSu_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfSu_category[pickerIndex.fkdxyjjsfSu_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.fkdxyjjsfSu_discount" /></input>
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
					fkdxyjjsfSu_jsmj: '',
					fkdxyjjsfSu_standard: '',
					fkdxyjjsfSu_category: '',
					fkdxyjjsfSu_jj: '',
					fkdxyjjsfSu_discount: 40,
					type: "fkdxyjjsfSu"
				},
				multiSelector: {
					fkdxyjjsfSu_province: [],
					fkdxyjjsfSu_standard: [],
					fkdxyjjsfSu_category: [],
					fkdxyjjsfSu_jj: '',
				},
				pickerIndex: {
					fkdxyjjsfSu_province: 0,
					fkdxyjjsfSu_standard: 0,
					fkdxyjjsfSu_category: 0,
				},
				showSelector: {
					fkdxyjjsfSu_standard: true,
					fkdxyjjsfSu_category: true,
					fkdxyjjsfSu_jj: true,
					fkdxyjjsfSu_province: true,
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


