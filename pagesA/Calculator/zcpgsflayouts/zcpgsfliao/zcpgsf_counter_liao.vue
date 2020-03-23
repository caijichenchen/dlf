<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfLiao1[pickerIndex.zcpgsfLiao1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfLiao_standard[pickerIndex.zcpgsfLiao_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(282,multiSelector.zcpgsfLiao_standard[pickerIndex.zcpgsfLiao_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfLiao_category" :value="pickerIndex.zcpgsfLiao_category"
				 :range="multiSelector.zcpgsfLiao_category">
					<view class="picker">
						{{multiSelector.zcpgsfLiao_category[pickerIndex.zcpgsfLiao_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfLiao_ryjc" :value="pickerIndex.zcpgsfLiao_ryjc"
				 :range="multiSelector.zcpgsfLiao_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfLiao_ryjc[pickerIndex.zcpgsfLiao_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao_ryjc">
				<view class="title">人数</view>
				<input type="digit" v-model="needVal.zcpgsfLiao_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLiao4 || showSelector.zcpgsfLiao5">
				<view class="title">{{multiSelector.zcpgsfLiao4}}</view>
				<input type="digit" v-model="needVal.zcpgsfLiao_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfLiao5" type="defult" v-model="multiSelector.zcpgsfLiao5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zcpgsfLiao_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-jin.json"
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
					zcpgsfLiao_standard: '辽价发[2010]129号',
					zcpgsfLiao_category: '',
					zcpgsfLiao_ryjc: '',
					zcpgsfLiao_dysf: '',
					zcpgsfLiao_peoples: '',
					zcpgsfLiao_fl: '',
					zcpgsfLiao_graded: '',
					zcpgsfLiao_edorcd: '',
					zcpgsfLiao_discount: '100',
					type:'zcpgsfLiao'
				},
				multiSelector: {
					zcpgsfLiao1: [],
					zcpgsfLiao_standard: [],
					zcpgsfLiao_category: [],
					zcpgsfLiao4: '',
					zcpgsfLiao5: '',
					zcpgsfLiao_fl: '',//6
					zcpgsfLiao_graded: '',//7
					zcpgsfLiao_ryjc: [],//8
					zcpgsfLiao_dysf: '',//9
				},
				showSelector: {
					zcpgsfLiao1: true,
					zcpgsfLiao_standard: true,
					zcpgsfLiao_category: true,
					zcpgsfLiao4: true,
					zcpgsfLiao5: true,
					zcpgsfLiao_fl: false,
					zcpgsfLiao_graded: false,
					zcpgsfLiao_ryjc: false,
					zcpgsfLiao_dysf: false,
				},
				pickerIndex: {
					zcpgsfLiao1: 0,
					zcpgsfLiao_standard: 0,
					zcpgsfLiao_category: 0,
					zcpgsfLiao_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgliao1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgliao2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgliao3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgliao4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-jin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zcpgsfLiao_edorcd = val
			}
		}
	}
</script>


