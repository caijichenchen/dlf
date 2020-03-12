<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">吉林省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfJilin1[pickerIndex.zcpgsfJilin1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfJilin_standard[pickerIndex.zcpgsfJilin_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1638,multiSelector.zcpgsfJilin_standard[pickerIndex.zcpgsfJilin_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfJilin_category" :value="pickerIndex.zcpgsfJilin_category"
				 :range="multiSelector.zcpgsfJilin_category">
					<view class="picker">
						{{multiSelector.zcpgsfJilin_category[pickerIndex.zcpgsfJilin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfJilin_ryjc" :value="pickerIndex.zcpgsfJilin_ryjc"
				 :range="multiSelector.zcpgsfJilin_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfJilin_ryjc[pickerIndex.zcpgsfJilin_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin_ryjc">
				<view class="title">人数</view>
				<input type="digit" v-model="needVal.zcpgsfJilin_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJilin4 || showSelector.zcpgsfJilin5">
				<view class="title">{{multiSelector.zcpgsfJilin4}}</view>
				<input type="digit" v-model="needVal.zcpgsfJilin_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfJilin5" type="defult" v-model="multiSelector.zcpgsfJilin5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zcpgsfJilin_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-jilin.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfJilin_standard: '吉省价收〔2011〕87号',
					zcpgsfJilin_category: '',
					zcpgsfJilin_ryjc: '',
					zcpgsfJilin_dysf: '',
					zcpgsfJilin_peoples: '',
					zcpgsfJilin_fl: '',
					zcpgsfJilin_graded: '',
					zcpgsfJilin_edorcd: '',
					zcpgsfJilin_discount: '100',
					type: 'zcpgsfJilin'
				},
				multiSelector: {
					zcpgsfJilin1: [],
					zcpgsfJilin_standard: [],
					zcpgsfJilin_category: [],
					zcpgsfJilin4: '',
					zcpgsfJilin5: '',
					zcpgsfJilin_fl: '',//6
					zcpgsfJilin_graded: '',//7
					zcpgsfJilin_ryjc: [],//8
					zcpgsfJilin_dysf: '',//9
				},
				showSelector: {
					zcpgsfJilin1: true,
					zcpgsfJilin_standard: true,
					zcpgsfJilin_category: true,
					zcpgsfJilin4: true,
					zcpgsfJilin5: true,
					zcpgsfJilin_fl: false,
					zcpgsfJilin_graded: false,
					zcpgsfJilin_ryjc:  false,
					zcpgsfJilin_dysf: false,
				},
				pickerIndex: {
					zcpgsfJilin1: 0,
					zcpgsfJilin_standard: 0,
					zcpgsfJilin_category: 0,
					zcpgsfJilin_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgjilin1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgjilin2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgjilin3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgjilin4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-jilin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


