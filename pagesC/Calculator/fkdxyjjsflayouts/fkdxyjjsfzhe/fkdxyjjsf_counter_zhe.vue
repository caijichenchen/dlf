<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfZhe_province" :value="pickerIndex.fkdxyjjsfZhe_province"
				 :range="multiSelector.fkdxyjjsfZhe_province">
					<view class="picker">
						{{multiSelector.fkdxyjjsfZhe_province[pickerIndex.fkdxyjjsfZhe_province]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfZhe_standard" :value="pickerIndex.fkdxyjjsfZhe_standard"
				 :range="multiSelector.fkdxyjjsfZhe_standard">
					<view class="picker">
						{{multiSelector.fkdxyjjsfZhe_standard[pickerIndex.fkdxyjjsfZhe_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1043,multiSelector.fkdxyjjsfZhe_standard[pickerIndex.fkdxyjjsfZhe_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="digit" v-model="needVal.fkdxyjjsfZhe_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_category">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfZhe_category" :value="pickerIndex.fkdxyjjsfZhe_category"
				 :range="multiSelector.fkdxyjjsfZhe_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfZhe_category[pickerIndex.fkdxyjjsfZhe_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.fkdxyjjsfZhe_fjtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="fkdxyjjsfZhe_fjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.fkdxyjjsfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<!-- <fkdxyjjsf-zhe-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fkdxyjjsf-zhe-fjtz> -->
		<fkdxyjjsf-zhe-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fkdxyjjsf-zhe-fjtz>
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
	import fkdxyjjsfZheFjtz from './fkdxyjjsfZhe_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfZhe_jsmj: '',
					fkdxyjjsfZhe_standard: '',
					fkdxyjjsfZhe_category: '',
					fkdxyjjsfZhe_jj: '',
					fkdxyjjsfZhe_fjtz: "1.0",
					fkdxyjjsfZhe_discount: 40,
					type: "fkdxyjjsfZhe"
				},
				multiSelector: {
					fkdxyjjsfZhe_province: [],
					fkdxyjjsfZhe_standard: [],
					fkdxyjjsfZhe_category: [],
					fkdxyjjsfZhe_jj: '',
				},
				pickerIndex: {
					fkdxyjjsfZhe_province: 0,
					fkdxyjjsfZhe_standard: 0,
					fkdxyjjsfZhe_category: 0,
				},
				showSelector: {
					fkdxyjjsfZhe_standard: true,
					fkdxyjjsfZhe_category: true,
					fkdxyjjsfZhe_jj: true,
					fkdxyjjsfZhe_province: true,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
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
		components: {
			fkdxyjjsfZheFjtz,
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
