<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省ppp咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.pppxmzxChuan1">
				<view class="title">选择区域</view>
				<view class="title m-left">{{multiSelector.pppxmzxChuan1[pickerIndex.pppxmzxChuan1]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">工程造价</view>
				<input name="pppxmzxChuan_gczj" v-model="needVal.pppxmzxChuan_gczj" /></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxChuan_standard" :value="pickerIndex.pppxmzxChuan_standard"
				 :range="multiSelector.pppxmzxChuan_standard">
					<view class="picker">
						{{multiSelector.pppxmzxChuan_standard[pickerIndex.pppxmzxChuan_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(156,multiSelector.pppxmzxChuan_standard[pickerIndex.pppxmzxChuan_standard])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxChuan_category" :value="pickerIndex.pppxmzxChuan_category"
				 :range="multiSelector.pppxmzxChuan_category">
					<view class="picker">
						{{multiSelector.pppxmzxChuan_category[pickerIndex.pppxmzxChuan_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业领域数量的调整系数</view>
				<input v-model="needVal.pppxmzxChuan_zytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxChuan_zytzxs">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">收费附加</view>
				<input v-model="needVal.pppxmzxChuan_sffd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxChuan_sffd">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.pppxmzxChuan_discount" /></input>
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
	import datajson from '@/common/json/pppxmzxs/pppxmzxs-chuan.json'
	import sffdChuan from './pppxmzxChuan_sffd.vue'
	import zytzxsChuan from './pppxmzxChuan_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					pppxmzxChuan_gczj: '',
					pppxmzxChuan_standard: '',
					pppxmzxChuan_graded: '',
					pppxmzxChuan_category: '',
					pppxmzxChuan_sfjj: '',
					pppxmzxChuan_zytzxs: '1',
					pppxmzxChuan_sffd: '0',
					pppxmzxChuan_discount: '90',
					type: 'pppxmzxChuan'
				},
				multiSelector: {
					pppxmzxChuan1: [],
					pppxmzxChuan_standard: [],
					pppxmzxChuan_graded: '',
					pppxmzxChuan_category: [],
					pppxmzxChuan_sfjj: '',
				},
				pickerIndex: {
					pppxmzxChuan1: 0,
					pppxmzxChuan_standard: 0,
					pppxmzxChuan_category: 0,
				},
				showSelector: {
					pppxmzxChuan1: true,
					pppxmzxChuan_standard: true,
					pppxmzxChuan_graded: false,
					pppxmzxChuan_category: true,
					pppxmzxChuan_sfjj: false,
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
