<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfQiong_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfQiong1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfQiong1" :value="pickerIndex.jsxmqqgzzxfQiong1"
				 :range="multiSelector.jsxmqqgzzxfQiong1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfQiong1[pickerIndex.jsxmqqgzzxfQiong1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfQiong_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfQiong_standard" :value="pickerIndex.jsxmqqgzzxfQiong_standard"
				 :range="multiSelector.jsxmqqgzzxfQiong_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfQiong_standard[pickerIndex.jsxmqqgzzxfQiong_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(306,multiSelector.jsxmqqgzzxfQiong_standard[pickerIndex.jsxmqqgzzxfQiong_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfQiong_category" :value="pickerIndex.jsxmqqgzzxfQiong_category"
				 :range="multiSelector.jsxmqqgzzxfQiong_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfQiong_category[pickerIndex.jsxmqqgzzxfQiong_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfQiong_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfQiong_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfQiong_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfQiong_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-qiong-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-qiong-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import jsxmqqgzzxfQiongHytzxs from "./jsxmqqgzzxfQiong_hytzxs.vue"
		import datajson from '@/common/json/kyjbgfs/kyjbgfs-qiong.json'
		
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			data() {
				return {
					needVal: {
						jsxmqqgzzxfQiong_gczj: "",
						jsxmqqgzzxfQiong_standard: '',
						jsxmqqgzzxfQiong_graded: '',
						jsxmqqgzzxfQiong_category: '',
						jsxmqqgzzxfQiong_jsxs: '',
						jsxmqqgzzxfQiong_hytzxs: '1',
						jsxmqqgzzxfQiong_fztzxs: '1',
						jsxmqqgzzxfQiong_discount: '40',
						type: "jsxmqqgzzxfQiong",
					},
					multiSelector: {
						jsxmqqgzzxfQiong1: [],
						jsxmqqgzzxfQiong_standard: [],
						jsxmqqgzzxfQiong_graded: '',
						jsxmqqgzzxfQiong_category: [],
						jsxmqqgzzxfQiong_jsxs: '',
					},
					showSelector: {
						jsxmqqgzzxfQiong1: true,
						jsxmqqgzzxfQiong_standard: true,
						jsxmqqgzzxfQiong_graded: false,
						jsxmqqgzzxfQiong_category: true,
						jsxmqqgzzxfQiong_jsxs: false,
					},
					pickerIndex: {
						jsxmqqgzzxfQiong1: 0,
						jsxmqqgzzxfQiong_standard: 0,
						jsxmqqgzzxfQiong_category: 0,
					},
					showModalName: null,
					datajson:datajson,
					radio: 'radio1',
					selected: 'A',
					shows: 1,
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
				uniTag,
				jsxmqqgzzxfQiongHytzxs,
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

	