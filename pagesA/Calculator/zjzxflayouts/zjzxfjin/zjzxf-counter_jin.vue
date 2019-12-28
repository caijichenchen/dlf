<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfJin1[pickerIndex.zjzxfJin1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJin_standard" :value="pickerIndex.zjzxfJin_standard"
			 :range="multiSelector.zjzxfJin_standard">
				<view class="picker">
					{{multiSelector.zjzxfJin_standard[pickerIndex.zjzxfJin_standard]}}
				</view>
				</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(133,multiSelector.zjzxfJin_standard[pickerIndex.zjzxfJin_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfJin_category" :value="pickerIndex.zjzxfJin_category"
			 :range="multiSelector.zjzxfJin_category">
				<view class="picker">
					{{multiSelector.zjzxfJin_category[pickerIndex.zjzxfJin_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin5 ">
			<view class="title">{{multiSelector.zjzxfJin5}}</view>
			<input v-model="needVal.zjzxfJin_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfJin_sdeTitle">{{multiSelector.zjzxfJin_sdeTitle}}</view>
			<input v-model="needVal.zjzxfJin_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin8 ">
			<view class="title">{{multiSelector.zjzxfJin8}}</view>
			<input v-model="needVal.zjzxfJin_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin10 ">
			<view class="title">{{multiSelector.zjzxfJin10}}</view>
			<input v-model="needVal.zjzxfJin_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfJin12 || showSelector.zjzxfJin_zytzxs ">
			<view class="title">{{multiSelector.zjzxfJin12}}</view>
			<input v-model="needVal.zjzxfJin_zytzxs" /></input>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfJin_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfJin_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-jin :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfJin13="multiSelector.zjzxfJin13"></tzxs-jin>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-jin.json'
	import tzxsJin from './zjzxfJin_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfJin_standard: '',
					zjzxfJin_graded: '',
					zjzxfJin_category: '',
					zjzxfJin_ztz: '',
					zjzxfJin_fl: '',
					zjzxfJin_sdeTitle: '',
					zjzxfJin_sde: '',
					zjzxfJin_hzhjcgb: '',
					zjzxfJin_sffl: '',
					zjzxfJin_zytzxs: '',
					zjzxfJin_discount: '90',
					type: 'zjzxfJin'
				},
				multiSelector: {
					zjzxfJin1: [],
					zjzxfJin_standard: [],
					zjzxfJin_graded: [],
					zjzxfJin_category: [],
					zjzxfJin5: '',
					zjzxfJin_fl: '',
					zjzxfJin_sdeTitle: '',
					zjzxfJin8: '',
					zjzxfJin_hzhjcgb: '',
					zjzxfJin10: '',
					zjzxfJin_sffl: '',
					zjzxfJin12: '',
					zjzxfJin13: '',
					zjzxfJin_zytzxs: ''
				},
				pickerIndex: {
					zjzxfJin1: 0,
					zjzxfJin_standard: 0,
					zjzxfJin_category: 0,
				},
				showSelector: {
					zjzxfJin1: true,
					zjzxfJin_standard: true,
					zjzxfJin_graded: false,
					zjzxfJin_category: true,
					zjzxfJin5: true,
					zjzxfJin_fl: false,
					zjzxfJin_sdeTitle: true,
					zjzxfJin8: true,
					zjzxfJin_hzhjcgb: false,
					zjzxfJin10: true,
					zjzxfJin_sffl: false,
					zjzxfJin12: true,
					zjzxfJin13: false,
					zjzxfJin_zytzxs: true
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxjin1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxjin2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxjin3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			tzxsJin
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
