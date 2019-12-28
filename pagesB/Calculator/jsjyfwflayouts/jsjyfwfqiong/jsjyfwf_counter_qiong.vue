<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_province">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange" data-index='index0' data-name="jsjyfwfQiong_province" :value="pickerIndex.index0"
				 :range="multiSelector.jsjyfwfQiong_province">
					<view class="picker">
						{{pickerIndex.index0 >-1?multiSelector.jsjyfwfQiong_province[pickerIndex.index0]:'海南省'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_standard">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange" data-index='index1' data-name="jsjyfwfQiong_standard" :value="pickerIndex.index1"
				 :range="multiSelector.jsjyfwfQiong_standard">
					<view class="picker">
						{{pickerIndex.index1>-1?multiSelector.jsjyfwfQiong_standard[pickerIndex.index1]:'琼价费管〔2012〕41号'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">中标价</view>
				<input type="text" id="sjf" v-model="needVal.jsjyfwfQiong_zbj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_category">
				<input type="hidden" v-show='false' v-model="needVal.jsjyfwfQiong_graded">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-index='index2' data-name="jsjyfwfQiong_category" :value="pickerIndex.index2"
				 :range="multiSelector.jsjyfwfQiong_category">
					<view class="picker">
						{{multiSelector.jsjyfwfQiong_category[pickerIndex.index2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">收取分配</view>
				<input v-model="needVal.jsjyfwfQiong_qfbl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.jsjyfwfQiong_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>

<script>
	import datajson from './jsjyfwf.json'
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jsjyfwfQiong_category: "建设工程招投标交易服务收费",
					jsjyfwfQiong_discount: "100",
					jsjyfwfQiong_fl: "",
					jsjyfwfQiong_graded: "",
					jsjyfwfQiong_qfbl: "100",
					jsjyfwfQiong_standard: "琼价费管〔2012〕41号",
					jsjyfwfQiong_zbj: "",
					type: "jsjyfwfQiong",
				},
				multiSelector: {
					jsjyfwfQiong_province: [],
					jsjyfwfQiong_standard: [],
					jsjyfwfQiong_category: [],
					jsjyfwfQiong_fl: '',

				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
				},
				showSelector: {
					jsjyfwfQiong_standard: true,
					jsjyfwfQiong_category: true,
					jsjyfwfQiong_fl: true,
					jsjyfwfQiong_province: true,
				},
				datajson:datajson,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "建设面积",
						"text": "请选择对应的项目"
					},
					{
						"id": "2",
						"title": "计算区域",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			// PickerChange(e) {
			// 	this.index = e.detail.value
			// 	// this.afterPicker(this.index)
			// 	console.log(this.index)
			// 	if(this.index == "0"){
			// 		this.needVal.jsjyfwfQiong_graded = "0|300|1000|3000|5000|10000|20000"
			// 	}else{
			// 		this.needVal.jsjyfwfQiong_graded = ""
			// 	}
			// },
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
