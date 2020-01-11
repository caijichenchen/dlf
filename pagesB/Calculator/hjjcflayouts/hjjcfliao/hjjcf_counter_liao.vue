<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省环境监测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao1">
				<view class="title">省份</view>
				<view class="title m-left">{{multiSelector.hjjcfLiao1[pickerIndex.hjjcfLiao1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_standard">
				<view class="title">选择标准</view>
				<view class="title m-left" v-model="needVal.hjjcfLiao_standard">{{multiSelector.hjjcfLiao_standard[pickerIndex.hjjcfLiao_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1629,multiSelector.hjjcfLiao_standard[pickerIndex.hjjcfLiao_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfLiao_category" :value="pickerIndex.hjjcfLiao_category"
				 :range="multiSelector.hjjcfLiao_category">
					<view class="picker">
						{{multiSelector.hjjcfLiao_category[pickerIndex.hjjcfLiao_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfLiao_jtfl" :value="pickerIndex.hjjcfLiao_jtfl"
				 :range="multiSelector.hjjcfLiao_jtfl">
					<view class="picker">
						{{multiSelector.hjjcfLiao_jtfl[pickerIndex.hjjcfLiao_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_lb">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfLiao_lb" :value="pickerIndex.hjjcfLiao_lb"
				 :range="multiSelector.hjjcfLiao_lb">
					<view class="picker">
						{{multiSelector.hjjcfLiao_lb[pickerIndex.hjjcfLiao_lb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_cyxm">
				<view class="title">项目名称</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfLiao_cyxm" :value="pickerIndex.hjjcfLiao_cyxm"
				 :range="multiSelector.hjjcfLiao_cyxm">
					<view class="picker">
						{{multiSelector.hjjcfLiao_cyxm[pickerIndex.hjjcfLiao_cyxm]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_ff">
				<view class="title">方法</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfLiao_ff" :value="pickerIndex.hjjcfLiao_ff"
				 :range="multiSelector.hjjcfLiao_ff">
					<view class="picker">
						{{multiSelector.hjjcfLiao_ff[pickerIndex.hjjcfLiao_ff]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao_units">
				<view class="title">工程量</view>
				<input type="text" v-model="needVal.hjjcfLiao_gcl"></input>
				<uni-tag :text="multiSelector.hjjcfLiao_units" type="defult" v-model="needVal.hjjcfLiao_units"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfLiao10">
				<view class="title">{{multiSelector.hjjcfLiao10}}</view>
				<input type="text" v-model="needVal.hjjcfLiao_ds"></input>
				<uni-tag text="吨" type="defult" ></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整</view>
				<input name="hjjcfLiao_hytz" v-model="needVal.hjjcfLiao_hytz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input name="hjjcfLiao_tzxs" v-model="needVal.hjjcfLiao_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="hjjcfLiao_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="hjjcfLiao_discount" v-model="needVal.hjjcfLiao_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<tzxs-liao :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-liao>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from "@/common/json/hjjcfs/hjjcfs-liao.json"
	import tzxsLiao from './hjjcfLiao_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					hjjcfLiao_standard: '',
					hjjcfLiao_category: '',
					hjjcfLiao_jtfl: '',
					hjjcfLiao_lb: '',
					hjjcfLiao_cyxm: '',
					hjjcfLiao_ff: '',
					hjjcfLiao_jj: '',
					hjjcfLiao_gcl: '',
					hjjcfLiao_units: '',
					hjjcfLiao_ds: '',
					hjjcfLiao_hytz: '1',
					hjjcfLiao_tzxs: '1',
					hjjcfLiao_discount: '100',
					type: 'hjjcfLiao'
				},
				multiSelector: {
					hjjcfLiao1: [],
					hjjcfLiao_standard: [],
					hjjcfLiao_category: [],
					hjjcfLiao_jtfl: [],
					hjjcfLiao_lb: [],
					hjjcfLiao_cyxm: [],//6
					hjjcfLiao_units: '',//7
					hjjcfLiao_ff: [],//8
					hjjcfLiao_jj: '',
					hjjcfLiao10: '',
				},
				showSelector: {
					hjjcfLiao1: true,
					hjjcfLiao_standard: true,
					hjjcfLiao_category: true,
					hjjcfLiao_jtfl: true,
					hjjcfLiao_lb: true,
					hjjcfLiao_cyxm: true,
					hjjcfLiao_units: true,
					hjjcfLiao_ff: true,
					hjjcfLiao_jj: false,
					hjjcfLiao10: false,
				},
				pickerIndex: {
					hjjcfLiao1: 0,
					hjjcfLiao_standard: 0,
					hjjcfLiao_category: 0,
					hjjcfLiao_jtfl: 0,
					hjjcfLiao_lb: 0,
					hjjcfLiao_cyxm: 0,
					hjjcfLiao_ff: 0
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [
					{
						"id": "1",
						"title": "计费类型",
						"text": "每增加20吨,增加810元"
					},
					{
						"id": "2",
						"title": "建设期贷款利息还款明细",
						"text": "交通、输油\气管线、石油天然气开采、水利水电、矿产、电力生产"
					},
					{
							"id": "3",
							"title": "优惠折扣",
							"text": "根据市场行情调整"
						},
				]
			}
		},
		components: {
			tzxsLiao
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


