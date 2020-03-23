<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">天津建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfJin_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfJin1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfJin1" :value="pickerIndex.jsxmqqgzzxfJin1"
				 :range="multiSelector.jsxmqqgzzxfJin1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfJin1[pickerIndex.jsxmqqgzzxfJin1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfJin_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfJin_standard" :value="pickerIndex.jsxmqqgzzxfJin_standard"
				 :range="multiSelector.jsxmqqgzzxfJin_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfJin_standard[pickerIndex.jsxmqqgzzxfJin_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(250,multiSelector.jsxmqqgzzxfJin_standard[pickerIndex.jsxmqqgzzxfJin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfJin_category" :value="pickerIndex.jsxmqqgzzxfJin_category"
				 :range="multiSelector.jsxmqqgzzxfJin_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfJin_category[pickerIndex.jsxmqqgzzxfJin_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfJin_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfJin_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfJin_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfJin_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-jin-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-jin-hytzxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import jsxmqqgzzxfJinHytzxs from "./jsxmqqgzzxfJin_hytzxs.vue"
	// import datajson from '@/common/json/kyjbgfs/kyjbgfs-ji.json'
	
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
				url:'https://www.dulifei.com/json/kyjbgfs/kyjbgfs-ji.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jsxmqqgzzxfJin_gczj: "",
					jsxmqqgzzxfJin_standard: '',
					jsxmqqgzzxfJin_graded: '',
					jsxmqqgzzxfJin_category: '',
					jsxmqqgzzxfJin_jsxs: '',
					jsxmqqgzzxfJin_hytzxs: '1',
					jsxmqqgzzxfJin_fztzxs: '1',
					jsxmqqgzzxfJin_discount: '40',
					type: "jsxmqqgzzxfJin",
				},
				multiSelector: {
					jsxmqqgzzxfJin1: [],
					jsxmqqgzzxfJin_standard: [],
					jsxmqqgzzxfJin_graded: '',
					jsxmqqgzzxfJin_category: [],
					jsxmqqgzzxfJin_jsxs: '',
				},
				showSelector: {
					jsxmqqgzzxfJin1: true,
					jsxmqqgzzxfJin_standard: true,
					jsxmqqgzzxfJin_graded: false,
					jsxmqqgzzxfJin_category: true,
					jsxmqqgzzxfJin_jsxs: false,
				},
				pickerIndex: {
					jsxmqqgzzxfJin1: 0,
					jsxmqqgzzxfJin_standard: 0,
					jsxmqqgzzxfJin_category: 0,
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
			jsxmqqgzzxfJinHytzxs
		},
		watch:{
			inval(val){
				this.needVal.jsxmqqgzzxfJin_gczj =val
			}
		}
	}
</script>

	