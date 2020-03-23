<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfGui1[pickerIndex.zcpgsfGui1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfGui_standard[pickerIndex.zcpgsfGui_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1597,multiSelector.zcpgsfGui_standard[pickerIndex.zcpgsfGui_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfGui_category" :value="pickerIndex.zcpgsfGui_category"
				 :range="multiSelector.zcpgsfGui_category">
					<view class="picker">
						{{multiSelector.zcpgsfGui_category[pickerIndex.zcpgsfGui_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfGui_ryjc" :value="pickerIndex.zcpgsfGui_ryjc"
				 :range="multiSelector.zcpgsfGui_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfGui_ryjc[pickerIndex.zcpgsfGui_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui_ryjc">
				<view class="title">人数</view>
				<input type="digit" v-model="needVal.zcpgsfGui_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGui4 || showSelector.zcpgsfGui5">
				<view class="title">{{multiSelector.zcpgsfGui4}}</view>
				<input type="digit" v-model="needVal.zcpgsfGui_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfGui5" type="defult" v-model="multiSelector.zcpgsfGui5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zcpgsfGui_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-gui.json"
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
					zcpgsfGui_standard: '桂价费函〔2012〕772号',
					zcpgsfGui_category: '',
					zcpgsfGui_ryjc: '',
					zcpgsfGui_dysf: '',
					zcpgsfGui_peoples: '',
					zcpgsfGui_fl: '',
					zcpgsfGui_graded: '',
					zcpgsfGui_edorcd: '',
					zcpgsfGui_discount: '100',
					type: 'zcpgsfGui'
				},
				multiSelector: {
					zcpgsfGui1: [],
					zcpgsfGui_standard: [],
					zcpgsfGui_category: [],
					zcpgsfGui4: '',
					zcpgsfGui5: '',
					zcpgsfGui_fl: '',//6
					zcpgsfGui_graded: '',//7
					zcpgsfGui_ryjc: [],//8
					zcpgsfGui_dysf: '',//9
				},
				showSelector: {
					zcpgsfGui1: true,
					zcpgsfGui_standard: true,
					zcpgsfGui_category: true,
					zcpgsfGui4: true,
					zcpgsfGui5: true,
					zcpgsfGui_fl: false,
					zcpgsfGui_graded: false,
					zcpgsfGui_ryjc:  false,
					zcpgsfGui_dysf: false,
				},
				pickerIndex: {
					zcpgsfGui1: 0,
					zcpgsfGui_standard: 0,
					zcpgsfGui_category: 0,
					zcpgsfGui_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpggui1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpggui2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpggui3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpggui4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-gui.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		watch:{
			inval(val){
				this.needVal.zcpgsfGui_edorcd = val
			}
		}
	}
</script>


