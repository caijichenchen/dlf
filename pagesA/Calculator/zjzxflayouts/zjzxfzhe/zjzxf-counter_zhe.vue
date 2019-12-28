<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfZhe1[pickerIndex.zjzxfZhe1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfZhe_standard" :value="pickerIndex.zjzxfZhe_standard"
			 :range="multiSelector.zjzxfZhe_standard">
				<view class="picker">
					{{multiSelector.zjzxfZhe_standard[pickerIndex.zjzxfZhe_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(120,multiSelector.zjzxfZhe_standard[pickerIndex.zjzxfZhe_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfZhe_category" :value="pickerIndex.zjzxfZhe_category"
			 :range="multiSelector.zjzxfZhe_category">
				<view class="picker">
					{{multiSelector.zjzxfZhe_category[pickerIndex.zjzxfZhe_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe5 ">
			<view class="title">{{multiSelector.zjzxfZhe5}}</view>
			<input v-model="needVal.zjzxfZhe_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfZhe_sdeTitle">{{multiSelector.zjzxfZhe_sdeTitle}}</view>
			<input v-model="needVal.zjzxfZhe_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe8 ">
			<view class="title">{{multiSelector.zjzxfZhe8}}</view>
			<input v-model="needVal.zjzxfZhe_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhe10 ">
			<view class="title">{{multiSelector.zjzxfZhe10}}</view>
			<input v-model="needVal.zjzxfZhe_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input v-model="needVal.zjzxfZhe_fdfd" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zjzxfZhe_fdfd">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfZhe_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
		<fdfd-zhe :showModalName="showModalName" v-on:hideModal="hideModal"></fdfd-zhe>
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
	import datajson from '@/common/json/zjzxfs/zjzxfs-zhe.json'
	import fdfdZhe from './zjzxfZhe_fdfd.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfZhe_standard: '',
					zjzxfZhe_graded: '',
					zjzxfZhe_category: '',
					zjzxfZhe_ztz: '',
					zjzxfZhe_fl: '',
					zjzxfZhe_sdeTitle: '',
					zjzxfZhe_sde: '',
					zjzxfZhe_hzhjcgb: '',
					zjzxfZhe_sffl: '',
					zjzxfZhe_fdfd: '100',
					zjzxfZhe_discount: '90',
					type: 'zjzxfZhe'
				},
				multiSelector: {
					zjzxfZhe1: [],
					zjzxfZhe_standard: [],
					zjzxfZhe_graded: [],
					zjzxfZhe_category: [],
					zjzxfZhe5: '',
					zjzxfZhe_fl: '',
					zjzxfZhe_sdeTitle: '',
					zjzxfZhe8: '',
					zjzxfZhe_hzhjcgb: '',
					zjzxfZhe10: '',
					zjzxfZhe_sffl: '',
				},
				pickerIndex: {
					zjzxfZhe1: 0,
					zjzxfZhe_standard: 0,
					zjzxfZhe_category: 0,
				},
				showSelector: {
					zjzxfZhe1: true,
					zjzxfZhe_standard: true,
					zjzxfZhe_graded: false,
					zjzxfZhe_category: true,
					zjzxfZhe5: true,
					zjzxfZhe_fl: false,
					zjzxfZhe_sdeTitle: true,
					zjzxfZhe8: true,
					zjzxfZhe_hzhjcgb: false,
					zjzxfZhe10: true,
					zjzxfZhe_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjxzhe1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjxzhe2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjxzhe3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			fdfdZhe
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
