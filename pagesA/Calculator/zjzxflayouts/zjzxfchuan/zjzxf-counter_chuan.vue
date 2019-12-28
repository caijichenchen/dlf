<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan1">
			<view class="title">选择区域</view>
				<view class="title m-left">
					{{multiSelector.zjzxfChuan1[pickerIndex.zjzxfChuan1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfChuan_standard" :value="pickerIndex.zjzxfChuan_standard"
			 :range="multiSelector.zjzxfChuan_standard">
				<view class="picker">
					{{multiSelector.zjzxfChuan_standard[pickerIndex.zjzxfChuan_standard]}}
				</view>
			</picker>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(117,multiSelector.zjzxfChuan_standard[pickerIndex.zjzxfChuan_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfChuan_category" :value="pickerIndex.zjzxfChuan_category"
			 :range="multiSelector.zjzxfChuan_category">
				<view class="picker">
					{{multiSelector.zjzxfChuan_category[pickerIndex.zjzxfChuan_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan5 ">
			<view class="title">{{multiSelector.zjzxfChuan5}}</view>
			<input v-model="needVal.zjzxfChuan_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan7 ">
			<view class="title" >{{multiSelector.zjzxfChuan7}}</view>
			<input v-model="needVal.zjzxfChuan_sffl" /></input>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan_sdeTitle ">
			<view class="title">{{multiSelector.zjzxfChuan_sdeTitle}}</view>
			<input v-model="needVal.zjzxfChuan_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan10 ">
			<view class="title">{{multiSelector.zjzxfChuan10}}</view>
			<input v-model="needVal.zjzxfChuan_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChuan12 ">
			<view class="title">{{multiSelector.zjzxfChuan12}}</view>
			<input v-model="needVal.zjzxfChuan_sffl2" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfChuan_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
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
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-chuan.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			title: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				needVal: {
					zjzxfChuan_standard: '',
					zjzxfChuan_graded: '',
					zjzxfChuan_category: '',
					zjzxfChuan_ztz: '',
					zjzxfChuan_fl: '',
					zjzxfChuan_sffl: '',
					zjzxfChuan_sdeTitle: '',
					zjzxfChuan_sde: '',
					zjzxfChuan_hzhjcgb: '',
					zjzxfChuan_sffl2: '',
					zjzxfChuan_discount: '90',
					type: 'zjzxfChuan'
				},
				multiSelector: {
					zjzxfChuan1: [],
					zjzxfChuan_standard: [],
					zjzxfChuan_graded: [],
					zjzxfChuan_category: [],
					zjzxfChuan5: '',
					zjzxfChuan_fl: '',
					zjzxfChuan7: '',
					zjzxfChuan_sffl: '',
					zjzxfChuan_sdeTitle: '',
					zjzxfChuan10: '',
					zjzxfChuan_hzhjcgb: '',
					zjzxfChuan12: '',
					zjzxfChuan_sffl2: '',
				},
				pickerIndex: {
					zjzxfChuan1: 0,
					zjzxfChuan_standard: 0,
					zjzxfChuan_category: 0,
				},
				showSelector: {
					zjzxfChuan1: true,
					zjzxfChuan_standard: true,
					zjzxfChuan_graded: false,
					zjzxfChuan_category: true,
					zjzxfChuan5: true,
					zjzxfChuan_fl: false,
					zjzxfChuan7: true,
					zjzxfChuan_sffl: false,
					zjzxfChuan_sdeTitle: true,
					zjzxfChuan10: true,
					zjzxfChuan_hzhjcgb: true,
					zjzxfChuan12: true,
					zjzxfChuan_sffl2: true,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxchuan1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "zjzxchuan2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "zjzxchuan3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
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
