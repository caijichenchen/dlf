<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfJi_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJi_xzsf" :value="pickerIndex.zbdlfJi_xzsf"
				 :range="multiSelector.zbdlfJi_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfJi_xzsf[pickerIndex.zbdlfJi_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJi_standard" :value="pickerIndex.zbdlfJi_standard"
				 :range="multiSelector.zbdlfJi_standard">
					<view class="picker">
						{{multiSelector.zbdlfJi_standard[pickerIndex.zbdlfJi_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(34,multiSelector.zbdlfJi_standard[pickerIndex.zbdlfJi_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJi_category" :value="pickerIndex.zbdlfJi_category"
				 :range="multiSelector.zbdlfJi_category">
					<view class="picker">
						{{multiSelector.zbdlfJi_category[pickerIndex.zbdlfJi_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfJi_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.zbdlfJi_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zbdlfJi_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-guo-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-guo-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfJiZbxm from "./zbdlfJi_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-guo.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfJi_xzsf: '',
					zbdlfJi_standard: '',
					zbdlfJi_category: '',
					zbdlfJi_graded: '',
					zbdlfJi_fl: '',
					zbdlfJi_gczj: '',
					zbdlfJi_discount: '40',
					type: 'zbdlfJi'
				},
				multiSelector: {
					zbdlfJi_xzsf: [],
					zbdlfJi_standard: [],
					zbdlfJi_graded: '',
					zbdlfJi_category: [],
					zbdlfJi_fl: '',
				},
				showSelector: {
					zbdlfJi_xzsf: true,
					zbdlfJi_standard: true,
					zbdlfJi_graded: false,
					zbdlfJi_category: true,
					zbdlfJi_fl: false,
				},
				pickerIndex: {
					zbdlfJi_xzsf: 0,
					zbdlfJi_standard: 0,
					zbdlfJi_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlguo1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlguo2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-guo.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfJiZbxm,
		},
	}
</script>

<style>

</style>
