<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">云南建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程咨询</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfYun_gzzx"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfYun1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfYun1" :value="pickerIndex.jsxmqqgzzxfYun1"
				 :range="multiSelector.jsxmqqgzzxfYun1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfYun1[pickerIndex.jsxmqqgzzxfYun1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfYun_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfYun_standard" :value="pickerIndex.jsxmqqgzzxfYun_standard"
				 :range="multiSelector.jsxmqqgzzxfYun_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfYun_standard[pickerIndex.jsxmqqgzzxfYun_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="checkDeatil(1925,multiSelector.jsxmqqgzzxfYun_standard[pickerIndex.jsxmqqgzzxfYun_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfYun_category" :value="pickerIndex.jsxmqqgzzxfYun_category"
				 :range="multiSelector.jsxmqqgzzxfYun_category">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfYun_category[pickerIndex.jsxmqqgzzxfYun_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfYun_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfYun_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfYun_fzcd" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsxmqqgzzxfYun_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsxmqqgzzxf-yun-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-yun-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import jsxmqqgzzxfYunHytzxs from "./jsxmqqgzzxfYun_tzxs.vue"
		// import datajson from '@/common/json/kyjbgfs/kyjbgfs-yun.json'
		
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			beforeCreate() {
				uni.request({
					url:'https://www.dulifei.com/json/kyjbgfs/kyjbgfs-yun.json',
					success: (res) => {
						this.datajson = res.data
					}
				})
			},
			data() {
				return {
					needVal: {
						jsxmqqgzzxfYun_gzzx: "",
						jsxmqqgzzxfYun_standard: '',
						jsxmqqgzzxfYun_graded: '',
						jsxmqqgzzxfYun_category: '',
						jsxmqqgzzxfYun_jsxs: '',
						jsxmqqgzzxfYun_tzxs: '1',
						jsxmqqgzzxfYun_fzcd: '1',
						jsxmqqgzzxfYun_discount: '40',
						type: "jsxmqqgzzxfYun",
					},
					multiSelector: {
						jsxmqqgzzxfYun1: [],
						jsxmqqgzzxfYun_standard: [],
						jsxmqqgzzxfYun_graded: '',
						jsxmqqgzzxfYun_category: [],
						jsxmqqgzzxfYun_jsxs: '',
					},
					showSelector: {
						jsxmqqgzzxfYun1: true,
						jsxmqqgzzxfYun_standard: true,
						jsxmqqgzzxfYun_graded: false,
						jsxmqqgzzxfYun_category: true,
						jsxmqqgzzxfYun_jsxs: false,
					},
					pickerIndex: {
						jsxmqqgzzxfYun1: 0,
						jsxmqqgzzxfYun_standard: 0,
						jsxmqqgzzxfYun_category: 0,
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
				jsxmqqgzzxfYunHytzxs,
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

	