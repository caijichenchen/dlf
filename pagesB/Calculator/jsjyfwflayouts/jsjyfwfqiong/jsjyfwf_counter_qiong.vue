<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_province">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfQiong_province" :value="pickerIndex.jsjyfwfQiong_province"
				 :range="multiSelector.jsjyfwfQiong_province">
					<view class="picker">
						{{multiSelector.jsjyfwfQiong_province[pickerIndex.jsjyfwfQiong_province]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_standard">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfQiong_standard" :value="pickerIndex.jsjyfwfQiong_standard"
				 :range="multiSelector.jsjyfwfQiong_standard">
					<view class="picker">
						{{multiSelector.jsjyfwfQiong_standard[pickerIndex.jsjyfwfQiong_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1695,multiSelector.jsjyfwfQiong_standard[pickerIndex.jsjyfwfQiong_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfQiong_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfQiong_category" :value="pickerIndex.jsjyfwfQiong_category"
				 :range="multiSelector.jsjyfwfQiong_category">
					<view class="picker">
						{{multiSelector.jsjyfwfQiong_category[pickerIndex.jsjyfwfQiong_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">中标价</view>
				<input type="text" id="sjf" v-model="needVal.jsjyfwfQiong_zbj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">收取分配</view>
				<input v-model="needVal.jsjyfwfQiong_qfbl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfQiong_qfbl">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.jsjyfwfQiong_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl :showModalName="showModalName" v-on:hideModal="hideModal" ></qfbl>
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
	import qfbl from './jsjyfwfQiong_qfbl.vue'
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
					jsjyfwfQiong_graded: '',
					jsjyfwfQiong_category: [],
					jsjyfwfQiong_fl: '',
				},
				pickerIndex: {
					jsjyfwfQiong_province: 0,
					jsjyfwfQiong_standard: 0,
					jsjyfwfQiong_category: 0,
				},
				showSelector: {
					jsjyfwfQiong_standard: true,
					jsjyfwfQiong_category: true,
					jsjyfwfQiong_fl: true,
					jsjyfwfQiong_province: true,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "2",
						"title": "收费项目",
						"text": "选择交易服务收费类别"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components:{
			uniTag,
			explain,
			qfbl
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
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
