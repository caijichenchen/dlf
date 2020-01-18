<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfGuo1[pickerIndex.zcpgsfGuo1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfGuo_standard[pickerIndex.zcpgsfGuo_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(262,multiSelector.zcpgsfGuo_standard[pickerIndex.zcpgsfGuo_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfGuo_category" :value="pickerIndex.zcpgsfGuo_category"
				 :range="multiSelector.zcpgsfGuo_category">
					<view class="picker">
						{{multiSelector.zcpgsfGuo_category[pickerIndex.zcpgsfGuo_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfGuo_ryjc" :value="pickerIndex.zcpgsfGuo_ryjc"
				 :range="multiSelector.zcpgsfGuo_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfGuo_ryjc[pickerIndex.zcpgsfGuo_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfGuo_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfGuo4 || showSelector.zcpgsfGuo5">
				<view class="title">{{multiSelector.zcpgsfGuo4}}</view>
				<input type="text" v-model="needVal.zcpgsfGuo_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfGuo5" type="defult" v-model="multiSelector.zcpgsfGuo5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfGuo_discount" v-model="needVal.zcpgsfGuo_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-guo.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfGuo_standard: '中评协[2009]199号',
					zcpgsfGuo_category: '',
					zcpgsfGuo_ryjc: '',
					zcpgsfGuo_dysf: '',
					zcpgsfGuo_peoples: '',
					zcpgsfGuo_fl: '',
					zcpgsfGuo_graded: '',
					zcpgsfGuo_edorcd: '',
					zcpgsfGuo_discount: '100',
					type: 'zcpgsfGuo',
				},
				multiSelector: {
					zcpgsfGuo1: [],
					zcpgsfGuo_standard: [],
					zcpgsfGuo_category: [],
					zcpgsfGuo4: '',
					zcpgsfGuo5: '',
					zcpgsfGuo_fl: '',//6
					zcpgsfGuo_graded: '',//7
					zcpgsfGuo_ryjc: [],//8
					zcpgsfGuo_dysf: '',
				},
				showSelector: {
					zcpgsfGuo1: true,
					zcpgsfGuo_standard: true,
					zcpgsfGuo_category: true,
					zcpgsfGuo4: true,
					zcpgsfGuo5: true,
					zcpgsfGuo_fl: false,
					zcpgsfGuo_graded: false,
					zcpgsfGuo_ryjc: false,//8
					zcpgsfGuo_dysf: false,
				},
				pickerIndex: {
					zcpgsfGuo1: 0,
					zcpgsfGuo_standard: 0,
					zcpgsfGuo_category: 0,
					zcpgsfGuo_ryjc: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgguo1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgguo2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgguo3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgguo4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-guo.json',
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


