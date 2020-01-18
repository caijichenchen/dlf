<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZhe1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfZhe1[pickerIndex.zcpgsfZhe1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZhe_standard">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfZhe_standard" :value="pickerIndex.zcpgsfZhe_standard"
				 :range="multiSelector.zcpgsfZhe_standard">
					<view class="title m-left">{{multiSelector.zcpgsfZhe_standard[pickerIndex.zcpgsfZhe_standard]}}</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1657,multiSelector.zcpgsfZhe_standard[pickerIndex.zcpgsfZhe_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZhe_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfZhe_category" :value="pickerIndex.zcpgsfZhe_category"
				 :range="multiSelector.zcpgsfZhe_category">
					<view class="picker">
						{{multiSelector.zcpgsfZhe_category[pickerIndex.zcpgsfZhe_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZhe4 || showSelector.zcpgsfZhe5">
				<view class="title">{{multiSelector.zcpgsfZhe4}}</view>
				<input type="text" v-model="needVal.zcpgsfZhe_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfZhe5" type="defult" v-model="multiSelector.zcpgsfZhe5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfZhe_discount" v-model="needVal.zcpgsfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-zhe.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfZhe_standard: '浙价服〔2011〕90号|浙价服〔2013〕234号',
					zcpgsfZhe_category: '',
					zcpgsfZhe_fl: '',
					zcpgsfZhe_graded: '',
					zcpgsfZhe_edorcd: '',
					zcpgsfZhe_discount: '100',
					type: 'zcpgsfZhe'
				},
				multiSelector: {
					zcpgsfZhe1: [],
					zcpgsfZhe_standard: [],
					zcpgsfZhe_category: [],
					zcpgsfZhe4: '',
					zcpgsfZhe5: '',
					zcpgsfZhe_fl: '',//6
					zcpgsfZhe_graded: '',//7
				},
				showSelector: {
					zcpgsfZhe1: true,
					zcpgsfZhe_standard: true,
					zcpgsfZhe_category: true,
					zcpgsfZhe4: true,
					zcpgsfZhe5: true,
					zcpgsfZhe_fl: false,
					zcpgsfZhe_graded: false,
				},
				pickerIndex: {
					zcpgsfZhe1: 0,
					zcpgsfZhe_standard: 0,
					zcpgsfZhe_category: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgzhe1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgzhe2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgzhe3",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-zhe.json',
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


