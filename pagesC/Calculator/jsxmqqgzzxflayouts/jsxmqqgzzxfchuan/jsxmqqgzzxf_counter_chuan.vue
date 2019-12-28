<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfChuan_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfChuan1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfChuan1" :value="pickerIndex.jsxmqqgzzxfChuan1"
				 :range="multiSelector.jsxmqqgzzxfChuan1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfChuan1[pickerIndex.jsxmqqgzzxfChuan1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfChuan_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfChuan_standard" :value="pickerIndex.jsxmqqgzzxfChuan_standard"
				 :range="multiSelector.jsxmqqgzzxfChuan_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfChuan_standard[pickerIndex.jsxmqqgzzxfChuan_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(290,multiSelector.jsxmqqgzzxfChuan_standard[pickerIndex.jsxmqqgzzxfChuan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfChuan_category" :value="pickerIndex.jsxmqqgzzxfChuan_category"
				 :range="multiSelector.jsxmqqgzzxfChuan_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfChuan_category[pickerIndex.jsxmqqgzzxfChuan_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfChuan_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfChuan_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfChuan_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfChuan_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-chuan-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-chuan-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import datajson from '@/common/json/kyjbgfs/kyjbgfs-chuan.json'
		import jsxmqqgzzxfChuanHytzxs from "./jsxmqqgzzxfChuan_hytzxs.vue"
		
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			data() {
				return {
					needVal: {
						jsxmqqgzzxfChuan_gczj: "",
						jsxmqqgzzxfChuan_standard: '',
						jsxmqqgzzxfChuan_graded: '',
						jsxmqqgzzxfChuan_category: '',
						jsxmqqgzzxfChuan_jsxs: '',
						jsxmqqgzzxfChuan_hytzxs: '1',
						jsxmqqgzzxfChuan_fztzxs: '1',
						jsxmqqgzzxfChuan_discount: '40',
						type: "jsxmqqgzzxfChuan",
					},
					multiSelector: {
						jsxmqqgzzxfChuan1: [],
						jsxmqqgzzxfChuan_standard: [],
						jsxmqqgzzxfChuan_graded: '',
						jsxmqqgzzxfChuan_category: [],
						jsxmqqgzzxfChuan_jsxs: '',
					},
					showSelector: {
						jsxmqqgzzxfChuan1: true,
						jsxmqqgzzxfChuan_standard: true,
						jsxmqqgzzxfChuan_graded: false,
						jsxmqqgzzxfChuan_category: true,
						jsxmqqgzzxfChuan_jsxs: false,
					},
					pickerIndex: {
						jsxmqqgzzxfChuan1: 0,
						jsxmqqgzzxfChuan_standard: 0,
						jsxmqqgzzxfChuan_category: 0,
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
				jsxmqqgzzxfChuanHytzxs,
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

	