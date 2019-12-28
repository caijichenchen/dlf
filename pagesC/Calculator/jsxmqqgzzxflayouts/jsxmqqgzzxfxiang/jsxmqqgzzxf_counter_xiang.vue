<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfXiang_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfXiang1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfXiang1" :value="pickerIndex.jsxmqqgzzxfXiang1"
				 :range="multiSelector.jsxmqqgzzxfXiang1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfXiang1[pickerIndex.jsxmqqgzzxfXiang1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfXiang_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfXiang_standard" :value="pickerIndex.jsxmqqgzzxfXiang_standard"
				 :range="multiSelector.jsxmqqgzzxfXiang_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfXiang_standard[pickerIndex.jsxmqqgzzxfXiang_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(912,multiSelector.jsxmqqgzzxfXiang_standard[pickerIndex.jsxmqqgzzxfXiang_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfXiang_category" :value="pickerIndex.jsxmqqgzzxfXiang_category"
				 :range="multiSelector.jsxmqqgzzxfXiang_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfXiang_category[pickerIndex.jsxmqqgzzxfXiang_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfXiang_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfXiang_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfXiang_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfXiang_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-xiang-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-xiang-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import jsxmqqgzzxfXiangHytzxs from "./jsxmqqgzzxfXiang_hytzxs.vue"
		import datajson from '@/common/json/kyjbgfs/kyjbgfs-xiang.json'
		
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			data() {
				return {
					needVal: {
						jsxmqqgzzxfXiang_gczj: "",
						jsxmqqgzzxfXiang_standard: '',
						jsxmqqgzzxfXiang_graded: '',
						jsxmqqgzzxfXiang_category: '',
						jsxmqqgzzxfXiang_jsxs: '',
						jsxmqqgzzxfXiang_hytzxs: '1',
						jsxmqqgzzxfXiang_fztzxs: '1',
						jsxmqqgzzxfXiang_discount: '40',
						type: "jsxmqqgzzxfXiang",
					},
					multiSelector: {
						jsxmqqgzzxfXiang1: [],
						jsxmqqgzzxfXiang_standard: [],
						jsxmqqgzzxfXiang_graded: '',
						jsxmqqgzzxfXiang_category: [],
						jsxmqqgzzxfXiang_jsxs: '',
					},
					showSelector: {
						jsxmqqgzzxfXiang1: true,
						jsxmqqgzzxfXiang_standard: true,
						jsxmqqgzzxfXiang_graded: false,
						jsxmqqgzzxfXiang_category: true,
						jsxmqqgzzxfXiang_jsxs: false,
					},
					pickerIndex: {
						jsxmqqgzzxfXiang1: 0,
						jsxmqqgzzxfXiang_standard: 0,
						jsxmqqgzzxfXiang_category: 0,
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
				jsxmqqgzzxfXiangHytzxs,
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

	