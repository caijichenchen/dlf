<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">厦门市建设单位管理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择地区</view>
				<view class="title m-left">{{multiSelector.jsdwglXiamen1[pickerIndex.jsdwglXiamen1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsdwglXiamen_standard">
				<view class="title">收费依据</view>
				<view class="title" v-model="needVal.jsdwglXiamen_standard">{{multiSelector.jsdwglXiamen_standard[pickerIndex.jsdwglXiamen_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1681,multiSelector.jsdwglXiamen_standard[pickerIndex.jsdwglXiamen_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsdwglXiamen_category">
				<view class="title">项目类型</view>
				<picker class="select" @change="PickerChange" data-name="jsdwglXiamen_category" :value="pickerIndex.jsdwglXiamen_category"
				 :range="multiSelector.jsdwglXiamen_category">
					<view class="picker">
						{{multiSelector.jsdwglXiamen_category[pickerIndex.jsdwglXiamen_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsdwglXiamen_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="jsdwglXiamen_jtfl" :value="pickerIndex.jsdwglXiamen_jtfl"
				 :range="multiSelector.jsdwglXiamen_jtfl">
					<view class="picker">
						{{multiSelector.jsdwglXiamen_jtfl[pickerIndex.jsdwglXiamen_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">工程总概算</view>
				<input type="digit" v-model="needVal.jsdwglXiamen_gczgs" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsdwglXiamen_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/jsdwglf/jsdwglf-xiamen.json'
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
				url:'https://www.dulifei.com/json/jsdwglf/jsdwglf-xiamen.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jsdwglXiamen_standard: '',
					jsdwglXiamen_category: '',
					jsdwglXiamen_jtfl: '',
					jsdwglXiamen_graded: '',
					jsdwglXiamen_fl: '',
					jsdwglXiamen_gczgs: '',
					jsdwglXiamen_discount: '40',
					type: 'jsdwglXiamen'
				},
				multiSelector: {
					jsdwglXiamen1: [],
					jsdwglXiamen_standard: [],
					jsdwglXiamen_category: [],
					jsdwglXiamen_jtfl: [],
					jsdwglXiamen_graded: '',
					jsdwglXiamen_fl: '',
				},
				pickerIndex: {
					jsdwglXiamen1: 0,
					jsdwglXiamen_standard: 0,
					jsdwglXiamen_category: 0,
					jsdwglXiamen_jtfl: 0,
				},
				showSelector: {
					jsdwglXiamen1: true,
					jsdwglXiamen_standard: true,
					jsdwglXiamen_category: true,
					jsdwglXiamen_jtfl: true,
					jsdwglXiamen_graded: false,
					jsdwglXiamen_fl: false,
				},
				showModalName: null,
				datajson:'',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		watch:{
			inval(val){
				this.needVal.jsdwglXiamen_gczgs = val
			}
		}
	}
</script>
