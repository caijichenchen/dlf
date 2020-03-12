<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfSu_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfSu1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfSu1" :value="pickerIndex.jsxmqqgzzxfSu1"
				 :range="multiSelector.jsxmqqgzzxfSu1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfSu1[pickerIndex.jsxmqqgzzxfSu1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfSu_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfSu_standard" :value="pickerIndex.jsxmqqgzzxfSu_standard"
				 :range="multiSelector.jsxmqqgzzxfSu_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfSu_standard[pickerIndex.jsxmqqgzzxfSu_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(1765,multiSelector.jsxmqqgzzxfSu_standard[pickerIndex.jsxmqqgzzxfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfSu_category" :value="pickerIndex.jsxmqqgzzxfSu_category"
				 :range="multiSelector.jsxmqqgzzxfSu_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfSu_category[pickerIndex.jsxmqqgzzxfSu_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfSu_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfSu_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfSu_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfSu_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-su-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-su-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import jsxmqqgzzxfSuHytzxs from "./jsxmqqgzzxfSu_hytzxs.vue"
		// import datajson from '@/common/json/kyjbgfs/kyjbgfs-su.json'
		
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			beforeCreate() {
				uni.request({
					url:'https://www.dulifei.com/json/kyjbgfs/kyjbgfs-su.json',
					success: (res) => {
						this.datajson = res.data
					}
				})
			},
			data() {
				return {
					needVal: {
						jsxmqqgzzxfSu_gczj: "",
						jsxmqqgzzxfSu_standard: '',
						jsxmqqgzzxfSu_graded: '',
						jsxmqqgzzxfSu_category: '',
						jsxmqqgzzxfSu_jsxs: '',
						jsxmqqgzzxfSu_hytzxs: '1',
						jsxmqqgzzxfSu_fztzxs: '1',
						jsxmqqgzzxfSu_discount: '40',
						type: "jsxmqqgzzxfSu",
					},
					multiSelector: {
						jsxmqqgzzxfSu1: [],
						jsxmqqgzzxfSu_standard: [],
						jsxmqqgzzxfSu_graded: '',
						jsxmqqgzzxfSu_category: [],
						jsxmqqgzzxfSu_jsxs: '',
					},
					showSelector: {
						jsxmqqgzzxfSu1: true,
						jsxmqqgzzxfSu_standard: true,
						jsxmqqgzzxfSu_graded: false,
						jsxmqqgzzxfSu_category: true,
						jsxmqqgzzxfSu_jsxs: false,
					},
					pickerIndex: {
						jsxmqqgzzxfSu1: 0,
						jsxmqqgzzxfSu_standard: 0,
						jsxmqqgzzxfSu_category: 0,
					},
					showModalName: null,
					datajson:'',
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
				jsxmqqgzzxfSuHytzxs,
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

	