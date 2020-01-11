<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广东省ppp咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.pppxmzxYue1">
				<view class="title">选择区域</view>
				<view class="title m-left">{{multiSelector.pppxmzxYue1[pickerIndex.pppxmzxYue1]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">工程造价</view>
				<input name="pppxmzxYue_gczj" v-model="needVal.pppxmzxYue_gczj" /></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxYue_standard" :value="pickerIndex.pppxmzxYue_standard"
				 :range="multiSelector.pppxmzxYue_standard">
					<view class="picker">
						{{multiSelector.pppxmzxYue_standard[pickerIndex.pppxmzxYue_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(132,multiSelector.pppxmzxYue_standard[pickerIndex.pppxmzxYue_standard])" >点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxYue_category" :value="pickerIndex.pppxmzxYue_category"
				 :range="multiSelector.pppxmzxYue_category">
					<view class="picker">
						{{multiSelector.pppxmzxYue_category[pickerIndex.pppxmzxYue_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业领域数量的调整系数</view>
				<input v-model="needVal.pppxmzxYue_zytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxYue_zytzxs">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">收费附加</view>
				<input v-model="needVal.pppxmzxYue_sffd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxYue_sffd">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.pppxmzxYue_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<zytzxs-chuan :showModalName="showModalName" v-on:hideModal="hideModal"></zytzxs-chuan>
		<sffd-chuan :showModalName="showModalName" v-on:hideModal="hideModal"></sffd-chuan>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/pppxmzxs/pppxmzxs-yue.json'
	import sffdChuan from './pppxmzxYue_sffd.vue'
	import zytzxsChuan from './pppxmzxYue_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					pppxmzxYue_gczj: '',
					pppxmzxYue_standard: '',
					pppxmzxYue_graded: '',
					pppxmzxYue_category: '',
					pppxmzxYue_sfjj: '',
					pppxmzxYue_zytzxs: '1',
					pppxmzxYue_sffd: '0',
					pppxmzxYue_discount: '90',
					type: 'pppxmzxYue'
				},
				multiSelector: {
					pppxmzxYue1: [],
					pppxmzxYue_standard: [],
					pppxmzxYue_graded: '',
					pppxmzxYue_category: [],
					pppxmzxYue_sfjj: '',
				},
				pickerIndex: {
					pppxmzxYue1: 0,
					pppxmzxYue_standard: 0,
					pppxmzxYue_category: 0,
				},
				showSelector: {
					pppxmzxYue1: true,
					pppxmzxYue_standard: true,
					pppxmzxYue_graded: false,
					pppxmzxYue_category: true,
					pppxmzxYue_sfjj: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "3",
						"title": "项目类别",
						"text": "请确定好计算类别"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			sffdChuan,
			zytzxsChuan
		},
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
