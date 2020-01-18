<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfJin1[pickerIndex.zcpgsfJin1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfJin_standard[pickerIndex.zcpgsfJin_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1505,multiSelector.zcpgsfJin_standard[pickerIndex.zcpgsfJin_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfJin_category" :value="pickerIndex.zcpgsfJin_category"
				 :range="multiSelector.zcpgsfJin_category">
					<view class="picker">
						{{multiSelector.zcpgsfJin_category[pickerIndex.zcpgsfJin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-index='zcpgsfJin_ryjc' data-name="zcpgsfJin_ryjc" :value="pickerIndex.zcpgsfJin_ryjc"
				 :range="multiSelector.zcpgsfJin_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfJin_ryjc[pickerIndex.zcpgsfJin_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfJin_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJin4 || showSelector.zcpgsfJin5">
				<view class="title">{{multiSelector.zcpgsfJin4}}</view>
				<input type="text" v-model="needVal.zcpgsfJin_edorcd "></input>
				<uni-tag :text="multiSelector.zcpgsfJin5" type="defult" v-model="multiSelector.zcpgsfJin5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfJin_discount" v-model="needVal.zcpgsfJin_discount" /></input>
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
		data() {
			return {
				needVal: {
					zcpgsfJin_standard: '晋价服字[2011]179号',
					zcpgsfJin_category: '',
					zcpgsfJin_ryjc: '',
					zcpgsfJin_dysf: '',
					zcpgsfJin_peoples: '',
					zcpgsfJin_fl: '',
					zcpgsfJin_graded: '',
					zcpgsfJin_edorcd: '',
					zcpgsfJin_discount: '100',
					type:'zcpgsfJin'
				},
				multiSelector: {
					zcpgsfJin1: [],
					zcpgsfJin_standard: [],
					zcpgsfJin_category: [],
					zcpgsfJin4: '',
					zcpgsfJin5: '',
					zcpgsfJin_fl: '',//6
					zcpgsfJin_graded: '',//7
					zcpgsfJin_ryjc: [],//8
					zcpgsfJin_dysf: '',//9
				},
				showSelector: {
					zcpgsfJin1: true,
					zcpgsfJin_standard: true,
					zcpgsfJin_category: true,
					zcpgsfJin4: true,
					zcpgsfJin5: true,
					zcpgsfJin_fl: false,
					zcpgsfJin_graded: false,
					zcpgsfJin_ryjc: false,
					zcpgsfJin_dysf: false,
				},
				pickerIndex: {
					zcpgsfJin1: 0,
					zcpgsfJin_standard: 0,
					zcpgsfJin_category: 0,
					zcpgsfJin_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgjin1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgjin2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgjin3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgjin4",
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
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


