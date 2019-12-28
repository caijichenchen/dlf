<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfXiang1[pickerIndex.zcpgsfXiang1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfXiang_standard[pickerIndex.zcpgsfXiang_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1690,multiSelector.zcpgsfXiang_standard[pickerIndex.zcpgsfXiang_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfXiang_category" :value="pickerIndex.zcpgsfXiang_category"
				 :range="multiSelector.zcpgsfXiang_category">
					<view class="picker">
						{{multiSelector.zcpgsfXiang_category[pickerIndex.zcpgsfXiang_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfXiang_ryjc" :value="pickerIndex.zcpgsfXiang_ryjc"
				 :range="multiSelector.zcpgsfXiang_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfXiang_ryjc[pickerIndex.zcpgsfXiang_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfXiang_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfXiang4 || showSelector.zcpgsfXiang5">
				<view class="title">{{multiSelector.zcpgsfXiang4}}</view>
				<input type="text" v-model="needVal.zcpgsfXiang_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfXiang5" type="defult" v-model="multiSelector.zcpgsfXiang5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfXiang_discount" v-model="needVal.zcpgsfXiang_discount" /></input>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from "@/common/json/zcpgfs/zcpgfs-xiang.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfXiang_standard: '湘价服〔2011〕203号',
					zcpgsfXiang_category: '',
					zcpgsfXiang_ryjc: '',
					zcpgsfXiang_dysf: '',
					zcpgsfXiang_peoples: '',
					zcpgsfXiang_fl: '',
					zcpgsfXiang_graded: '',
					zcpgsfXiang_edorcd: '',
					zcpgsfXiang_discount: '100',
					type: 'zcpgsfXiang'
				},
				multiSelector: {
					zcpgsfXiang1: [],
					zcpgsfXiang_standard: [],
					zcpgsfXiang_category: [],
					zcpgsfXiang4: '',
					zcpgsfXiang5: '',
					zcpgsfXiang_fl: '',//6
					zcpgsfXiang_graded: '',//7
					zcpgsfXiang_ryjc: [],//8
					zcpgsfXiang_dysf: '',//9
				},
				showSelector: {
					zcpgsfXiang1: true,
					zcpgsfXiang_standard: true,
					zcpgsfXiang_category: true,
					zcpgsfXiang4: true,
					zcpgsfXiang5: true,
					zcpgsfXiang_fl: false,
					zcpgsfXiang_graded: false,
					zcpgsfXiang_ryjc:  false,
					zcpgsfXiang_dysf: false,
				},
				pickerIndex: {
					zcpgsfXiang1: 0,
					zcpgsfXiang_standard: 0,
					zcpgsfXiang_category: 0,
					zcpgsfXiang_ryjc: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgxiang1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgxiang2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgxiang3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgxiang4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


