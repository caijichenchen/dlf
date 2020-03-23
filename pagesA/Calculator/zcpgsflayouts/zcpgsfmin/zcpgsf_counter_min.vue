<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">福建省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfMin1[pickerIndex.zcpgsfMin1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfMin_standard[pickerIndex.zcpgsfMin_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1557,multiSelector.zcpgsfMin_standard[pickerIndex.zcpgsfMin_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfMin_category" :value="pickerIndex.zcpgsfMin_category"
				 :range="multiSelector.zcpgsfMin_category">
					<view class="picker">
						{{multiSelector.zcpgsfMin_category[pickerIndex.zcpgsfMin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfMin_ryjc" :value="pickerIndex.zcpgsfMin_ryjc"
				 :range="multiSelector.zcpgsfMin_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfMin_ryjc[pickerIndex.zcpgsfMin_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin_ryjc">
				<view class="title">人数</view>
				<input type="digit" v-model="needVal.zcpgsfMin_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfMin4 || showSelector.zcpgsfMin5">
				<view class="title">{{multiSelector.zcpgsfMin4}}</view>
				<input type="digit" v-model="needVal.zcpgsfMin_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfMin5" type="defult" v-model="multiSelector.zcpgsfMin5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zcpgsfMin_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-min.json"
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
					zcpgsfMin_standard: '闽价服〔2014〕282号',
					zcpgsfMin_category: '',
					zcpgsfMin_ryjc: '',
					zcpgsfMin_dysf: '',
					zcpgsfMin_peoples: '',
					zcpgsfMin_fl: '',
					zcpgsfMin_graded: '',
					zcpgsfMin_edorcd: '',
					zcpgsfMin_discount: '100',
					type:'zcpgsfMin'
				},
				multiSelector: {
					zcpgsfMin1: [],
					zcpgsfMin_standard: [],
					zcpgsfMin_category: [],
					zcpgsfMin4: '',
					zcpgsfMin5: '',
					zcpgsfMin_fl: '',//6
					zcpgsfMin_graded: '',//7
					zcpgsfMin_ryjc: [],//8
					zcpgsfMin_dysf: '',//9
				},
				showSelector: {
					zcpgsfMin1: true,
					zcpgsfMin_standard: true,
					zcpgsfMin_category: true,
					zcpgsfMin4: true,
					zcpgsfMin5: true,
					zcpgsfMin_fl: false,
					zcpgsfMin_graded: false,
					zcpgsfMin_ryjc:  false,
					zcpgsfMin_dysf: false,
				},
				pickerIndex: {
					zcpgsfMin1: 0,
					zcpgsfMin_standard: 0,
					zcpgsfMin_category: 0,
					zcpgsfMin_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgmin1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgmin2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgmin3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgmin4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-min.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zcpgsfMin_edorcd = val
			}
		}
	}
</script>


