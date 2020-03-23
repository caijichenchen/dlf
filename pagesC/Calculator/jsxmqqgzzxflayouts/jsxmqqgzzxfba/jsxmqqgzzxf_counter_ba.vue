<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfBa_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfBa1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfBa1" :value="pickerIndex.jsxmqqgzzxfBa1"
				 :range="multiSelector.jsxmqqgzzxfBa1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfBa1[pickerIndex.jsxmqqgzzxfBa1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfBa_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfBa_standard" :value="pickerIndex.jsxmqqgzzxfBa_standard"
				 :range="multiSelector.jsxmqqgzzxfBa_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfBa_standard[pickerIndex.jsxmqqgzzxfBa_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(315,multiSelector.jsxmqqgzzxfBa_standard[pickerIndex.jsxmqqgzzxfBa_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfBa_category" :value="pickerIndex.jsxmqqgzzxfBa_category"
				 :range="multiSelector.jsxmqqgzzxfBa_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfBa_category[pickerIndex.jsxmqqgzzxfBa_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfBa_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfBa_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfBa_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfBa_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-ba-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-ba-hytzxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import jsxmqqgzzxfBaHytzxs from "./jsxmqqgzzxfBa_hytzxs.vue"
	// import datajson from '@/common/json/kyjbgfs/kyjbgfs-ba.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/kyjbgfs/kyjbgfs-ba.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jsxmqqgzzxfBa_gczj: "",
					jsxmqqgzzxfBa_standard: '',
					jsxmqqgzzxfBa_graded: '',
					jsxmqqgzzxfBa_category: '',
					jsxmqqgzzxfBa_jsxs: '',
					jsxmqqgzzxfBa_hytzxs: '1',
					jsxmqqgzzxfBa_fztzxs: '1',
					jsxmqqgzzxfBa_discount: '40',
					type: "jsxmqqgzzxfBa",
				},
				multiSelector: {
					jsxmqqgzzxfBa1: [],
					jsxmqqgzzxfBa_standard: [],
					jsxmqqgzzxfBa_graded: '',
					jsxmqqgzzxfBa_category: [],
					jsxmqqgzzxfBa_jsxs: '',
				},
				showSelector: {
					jsxmqqgzzxfBa1: true,
					jsxmqqgzzxfBa_standard: true,
					jsxmqqgzzxfBa_graded: false,
					jsxmqqgzzxfBa_category: true,
					jsxmqqgzzxfBa_jsxs: false,
				},
				pickerIndex: {
					jsxmqqgzzxfBa1: 0,
					jsxmqqgzzxfBa_standard: 0,
					jsxmqqgzzxfBa_category: 0,
				},
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "1",
						"title": "项目类别",
						"text": "请确定好计算类别"
					},
					{
						"id": "3",
						"title": "复杂程度调整系数",
						"text": "国家标准：0.8 - 1.2"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			jsxmqqgzzxfBaHytzxs
		},
		watch:{
			inval(val){
				this.needVal.jsxmqqgzzxfBa_gczj =val
			}
		}
	}
</script>

	