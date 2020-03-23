<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广东省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfYue1[pickerIndex.zcpgsfYue1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfYue_standard[pickerIndex.zcpgsfYue_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(264,multiSelector.zcpgsfYue_standard[pickerIndex.zcpgsfYue_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfYue_category" :value="pickerIndex.zcpgsfYue_category"
				 :range="multiSelector.zcpgsfYue_category">
					<view class="picker">
						{{multiSelector.zcpgsfYue_category[pickerIndex.zcpgsfYue_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfYue_ryjc" :value="pickerIndex.zcpgsfYue_ryjc"
				 :range="multiSelector.zcpgsfYue_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfYue_ryjc[pickerIndex.zcpgsfYue_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue_ryjc">
				<view class="title">人数</view>
				<input type="digit" v-model="needVal.zcpgsfYue_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfYue4 || showSelector.zcpgsfYue5">
				<view class="title">{{multiSelector.zcpgsfYue4}}</view>
				<input type="digit" v-model="needVal.zcpgsfYue_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfYue5" type="defult" v-model="multiSelector.zcpgsfYue5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zcpgsfYue_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from "@/common/json/zcpgfs/zcpgfs-yue.json" 
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
		data() {
			return {
				needVal: {
					zcpgsfYue_standard: '粤价[2010]142号',
					zcpgsfYue_category: '',
					zcpgsfYue_ryjc: '',
					zcpgsfYue_dysf: '',
					zcpgsfYue_peoples: '',
					zcpgsfYue_fl: '',
					zcpgsfYue_graded: '',
					zcpgsfYue_edorcd: '',
					zcpgsfYue_discount: '40',
					type:'zcpgsfYue'
				},
				multiSelector: {
					zcpgsfYue1: [],
					zcpgsfYue_standard: [],
					zcpgsfYue_category: [],
					zcpgsfYue4: '',
					zcpgsfYue5: '',
					zcpgsfYue_fl: '',//6
					zcpgsfYue_graded: '',//7
					zcpgsfYue_ryjc: [],//8
					zcpgsfYue_dysf: '',//9
				},
				showSelector: {
					zcpgsfYue1: true,
					zcpgsfYue_standard: true,
					zcpgsfYue_category: true,
					zcpgsfYue4: true,
					zcpgsfYue5: true,
					zcpgsfYue_fl: false,
					zcpgsfYue_graded: false,
					zcpgsfYue_ryjc: false,
					zcpgsfYue_dysf: false,
				},
				pickerIndex: {
					zcpgsfYue1: 0,
					zcpgsfYue_standard: 0,
					zcpgsfYue_category: 0,
					zcpgsfYue_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgyue1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgyue2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgyue3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgyue4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-yue.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zcpgsfYue_edorcd = val
			}
		}
	}
</script>


