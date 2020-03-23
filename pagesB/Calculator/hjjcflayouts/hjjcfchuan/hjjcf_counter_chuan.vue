<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省环境监测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.hjjcfChuan1[pickerIndex.hjjcfChuan1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan_standard">
				<view class="title">选择标准</view>
				<view class="title m-left" v-model="needVal.hjjcfChuan_standard">{{multiSelector.hjjcfChuan_standard[pickerIndex.hjjcfChuan_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1715,multiSelector.hjjcfChuan_standard[pickerIndex.hjjcfChuan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfChuan_category" :value="pickerIndex.hjjcfChuan_category"
				 :range="multiSelector.hjjcfChuan_category">
					<view class="picker">
						{{multiSelector.hjjcfChuan_category[pickerIndex.hjjcfChuan_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan_lb">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfChuan_lb" :value="pickerIndex.hjjcfChuan_lb"
				 :range="multiSelector.hjjcfChuan_lb">
					<view class="picker">
						{{multiSelector.hjjcfChuan_lb[pickerIndex.hjjcfChuan_lb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan_cyxm">
				<view class="title">采样项目</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfChuan_cyxm" :value="pickerIndex.hjjcfChuan_cyxm"
				 :range="multiSelector.hjjcfChuan_cyxm">
					<view class="picker">
						{{multiSelector.hjjcfChuan_cyxm[pickerIndex.hjjcfChuan_cyxm]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan_ff">
				<view class="title">方法</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfChuan_ff" :value="pickerIndex.hjjcfChuan_ff"
				 :range="multiSelector.hjjcfChuan_ff">
					<view class="picker">
						{{multiSelector.hjjcfChuan_ff[pickerIndex.hjjcfChuan_ff]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程量</view>
				<input type="digit" v-model="needVal.hjjcfChuan_gcl"></input>
				<uni-tag :text="multiSelector.hjjcfChuan_units" type="defult" v-model="needVal.hjjcfChuan_units"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfChuan9">
				<view class="title">{{multiSelector.hjjcfChuan9}}</view>
				<input type="digit" v-model="needVal.hjjcfChuan_gd"></input>
				<uni-tag text="米" type="defult" ></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input type="digit" v-model="needVal.hjjcfChuan_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="hjjcfChuan_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.hjjcfChuan_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<tzxs-chuan :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-chuan>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from "@/common/json/hjjcfs/hjjcfs-chuan.json"
	import tzxsChuan from './hjjcfChuan_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/hjjcfs/hjjcfs-chuan.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					hjjcfChuan_standard: '',
					hjjcfChuan_category: '',
					hjjcfChuan_lb: '',
					hjjcfChuan_cyxm: '',
					hjjcfChuan_ff: '',
					hjjcfChuan_jj: '',
					hjjcfChuan_gcl: '',
					hjjcfChuan_units: '',
					hjjcfChuan_gd: '',
					hjjcfChuan_tzxs: '1',
					hjjcfChuan_discount: '100',
					type: 'hjjcfChuan'
				},
				multiSelector: {
					hjjcfChuan1: [],
					hjjcfChuan_standard: [],
					hjjcfChuan_category: [],
					hjjcfChuan_lb: [],
					hjjcfChuan_cyxm: [],
					hjjcfChuan_units: '',//6
					hjjcfChuan_ff: [],//7
					hjjcfChuan_jj: '',
					hjjcfChuan9: '',
				},
				showSelector: {
					hjjcfChuan1: true,
					hjjcfChuan_standard: true,
					hjjcfChuan_category: true,
					hjjcfChuan_lb: true,
					hjjcfChuan_cyxm: true,
					hjjcfChuan_units: true,
					hjjcfChuan_ff: true,
					hjjcfChuan_jj: false,
					hjjcfChuan9: false,
				},
				pickerIndex: {
					hjjcfChuan1: 0,
					hjjcfChuan_standard: 0,
					hjjcfChuan_category: 0,
					hjjcfChuan_lb: 0,
					hjjcfChuan_cyxm: 0,
					hjjcfChuan_ff: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "收费标准",
						"text": "距地面5米加收10%费用。（以后每增加5米加10%的费用）"
					},
					{
						"id": "2",
						"title": "优惠折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		components: {
			tzxsChuan
		},
	}
</script>


