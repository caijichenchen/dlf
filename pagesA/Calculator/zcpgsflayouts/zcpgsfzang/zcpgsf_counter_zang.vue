<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">西藏资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfZang1[pickerIndex.zcpgsfZang1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfZang_standard[pickerIndex.zcpgsfZang_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1581,multiSelector.zcpgsfZang_standard[pickerIndex.zcpgsfZang_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfZang_category" :value="pickerIndex.zcpgsfZang_category"
				 :range="multiSelector.zcpgsfZang_category">
					<view class="picker">
						{{multiSelector.zcpgsfZang_category[pickerIndex.zcpgsfZang_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfZang_ryjc" :value="pickerIndex.zcpgsfZang_ryjc"
				 :range="multiSelector.zcpgsfZang_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfZang_ryjc[pickerIndex.zcpgsfZang_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfZang_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfZang4 || showSelector.zcpgsfZang5">
				<view class="title">{{multiSelector.zcpgsfZang4}}</view>
				<input type="text" v-model="needVal.zcpgsfZang_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfZang5" type="defult" v-model="multiSelector.zcpgsfZang5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfZang_discount" v-model="needVal.zcpgsfZang_discount" /></input>
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
	// import datajson from "@/common/json/zcpgfs/zcpgfs-zang.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfZang_standard: '藏发改价格〔2010〕296号',
					zcpgsfZang_category: '',
					zcpgsfZang_ryjc: '',
					zcpgsfZang_dysf: '',
					zcpgsfZang_peoples: '',
					zcpgsfZang_fl: '',
					zcpgsfZang_graded: '',
					zcpgsfZang_edorcd: '',
					zcpgsfZang_discount: '100',
					type: 'zcpgsfZang'
				},
				multiSelector: {
					zcpgsfZang1: [],
					zcpgsfZang_standard: [],
					zcpgsfZang_category: [],
					zcpgsfZang4: '',
					zcpgsfZang5: '',
					zcpgsfZang_fl: '',//6
					zcpgsfZang_graded: '',//7
					zcpgsfZang_ryjc: [],//8
					zcpgsfZang_dysf: '',//9
				},
				showSelector: {
					zcpgsfZang1: true,
					zcpgsfZang_standard: true,
					zcpgsfZang_category: true,
					zcpgsfZang4: true,
					zcpgsfZang5: true,
					zcpgsfZang_fl: false,
					zcpgsfZang_graded: false,
					zcpgsfZang_ryjc:  false,
					zcpgsfZang_dysf: false,
				},
				pickerIndex: {
					zcpgsfZang1: 0,
					zcpgsfZang_standard: 0,
					zcpgsfZang_category: 0,
					zcpgsfZang_ryjc: 0,
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgzang1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgzang2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgzang3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgzang4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zcpgfs/zcpgfs-zang.json',
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


