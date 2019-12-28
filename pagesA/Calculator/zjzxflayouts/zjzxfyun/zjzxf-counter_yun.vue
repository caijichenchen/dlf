<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">云南省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfYun1[pickerIndex.zjzxfYun1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfYun_standard" :value="pickerIndex.zjzxfYun_standard"
			 :range="multiSelector.zjzxfYun_standard">
				<view class="picker">
					{{multiSelector.zjzxfYun_standard[pickerIndex.zjzxfYun_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(119,multiSelector.zjzxfYun_standard[pickerIndex.zjzxfYun_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfYun_category" :value="pickerIndex.zjzxfYun_category"
			 :range="multiSelector.zjzxfYun_category">
				<view class="picker">
					{{multiSelector.zjzxfYun_category[pickerIndex.zjzxfYun_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun5 ">
			<view class="title">{{multiSelector.zjzxfYun5}}</view>
			<input v-model="needVal.zjzxfYun_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun_sdeTitle ">
			<view class="title">{{multiSelector.zjzxfYun_sdeTitle}}</view>
			<input v-model="needVal.zjzxfYun_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun8 ">
			<view class="title" >{{multiSelector.zjzxfYun8}}</view>
			<input v-model="needVal.zjzxfYun_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun10 ">
			<view class="title">{{multiSelector.zjzxfYun10}}</view>
			<input v-model="needVal.zjzxfYun_sffl" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYun12 ">
			<view class="title">{{multiSelector.zjzxfYun12}}</view>
			<input v-model="needVal.zjzxfYun_zytzxs" /></input>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfYun_zytzxs">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfYun_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-yun :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfYun13="multiSelector.zjzxfYun13"></tzxs-yun>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-yun.json'
	import tzxsYun from './zjzxfYun_zytzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfYun_standard: '',
					zjzxfYun_graded: '',
					zjzxfYun_category: '',
					zjzxfYun_ztz: '',
					zjzxfYun_fl: '',
					zjzxfYun_sdeTitle: '',
					zjzxfYun_sde:'',
					zjzxfYun_hzhjcgb: '',
					zjzxfYun_sffl: '',
					zjzxfYun_zytzxs: '1',
					zjzxfYun_discount: '90',
					type: 'zjzxfYun'
				},
				multiSelector: {
					zjzxfYun1: [],
					zjzxfYun_standard: [],
					zjzxfYun_graded: [],
					zjzxfYun_category: [],
					zjzxfYun5: '',
					zjzxfYun_fl: '',
					zjzxfYun_sdeTitle: '',
					zjzxfYun8: '',
					zjzxfYun_hzhjcgb: '',
					zjzxfYun10: '',
					zjzxfYun_sffl: '',
					zjzxfYun12: '',
					zjzxfYun13: '',
				},
				pickerIndex: {
					zjzxfYun1: 0,
					zjzxfYun_standard: 0,
					zjzxfYun_category: 0,
				},
				showSelector: {
					zjzxfYun1: true,
					zjzxfYun_standard: true,
					zjzxfYun_graded: false,
					zjzxfYun_category: true,
					zjzxfYun5: true,
					zjzxfYun_fl: false,
					zjzxfYun_sdeTitle: false,
					zjzxfYun8: true,
					zjzxfYun_hzhjcgb: true,
					zjzxfYun10: true,
					zjzxfYun_sffl: false,
					zjzxfYun12: true,
					zjzxfYun13: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxyun1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxyun2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxyun3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			tzxsYun
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
