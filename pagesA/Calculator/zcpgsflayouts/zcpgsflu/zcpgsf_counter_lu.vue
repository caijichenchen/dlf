<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山东省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfLu1[pickerIndex.zcpgsfLu1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfLu_standard[pickerIndex.zcpgsfLu_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(283,multiSelector.zcpgsfLu_standard[pickerIndex.zcpgsfLu_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-index='zcpgsfLu_category' data-name="zcpgsfLu_category" :value="pickerIndex.zcpgsfLu_category"
				 :range="multiSelector.zcpgsfLu_category">
					<view class="picker">
						{{multiSelector.zcpgsfLu_category[pickerIndex.zcpgsfLu_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu_zclx">
				<view class="title">资产类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfLu_zclx" :value="pickerIndex.zcpgsfLu_zclx"
				 :range="multiSelector.zcpgsfLu_zclx">
					<view class="picker">
						{{multiSelector.zcpgsfLu_zclx[pickerIndex.zcpgsfLu_zclx]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfLu_ryjc" :value="pickerIndex.zcpgsfLu_ryjc"
				 :range="multiSelector.zcpgsfLu_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfLu_ryjc[pickerIndex.zcpgsfLu_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfLu_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfLu4 || showSelector.zcpgsfLu5">
				<view class="title">{{multiSelector.zcpgsfLu4}}</view>
				<input type="text" v-model="needVal.zcpgsfGuo_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfLu5" type="defult" v-model="multiSelector.zcpgsfLu5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfLu_discount" v-model="needVal.zcpgsfLu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" data-target="zcpgsfLu_discount">查看说明</button>
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
	import datajson from "@/common/json/zcpgfs/zcpgfs-lu.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfLu_standard: '鲁价费发[2010]253号',
					zcpgsfLu_category: '',
					zcpgsfLu_zclx: '',
					zcpgsfLu_ryjc: '',
					zcpgsfLu_dysf: '',
					zcpgsfLu_peoples: '',
					zcpgsfGuo_edorcd: '',
					zcpgsfLu_fl: '',
					zcpgsfLu_graded: '',
					zcpgsfLu_discount:'100',
					type:'zcpgsfLu'
				},
				multiSelector: {
					zcpgsfLu1: [],
					zcpgsfLu_standard: [],
					zcpgsfLu_category: [],
					zcpgsfLu4: '',
					zcpgsfLu5: '',
					zcpgsfLu_zclx: [],//6
					zcpgsfLu_fl: '',//7
					zcpgsfLu_graded: '',//8
					zcpgsfLu_ryjc: [],//9
					zcpgsfLu_dysf: '',//10
				},
				showSelector: {
					zcpgsfLu1: true,
					zcpgsfLu_standard: true,
					zcpgsfLu_category: true,
					zcpgsfLu4: true,
					zcpgsfLu5: true,
					zcpgsfLu_zclx: true,
					zcpgsfLu_fl: false,
					zcpgsfLu_graded: false,
					zcpgsfLu_ryjc: false,
					zcpgsfLu_dysf: false,
				},
				pickerIndex: {
					zcpgsfLu1: 0,
					zcpgsfLu_standard: 0,
					zcpgsfLu_category: 0,
					zcpgsfLu_zclx: 0,
					zcpgsfLu_ryjc: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpglu1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpglu2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpglu3",
						"title": "资产类型",
						"text": "不同资产类型收费费率不同"
					},
					{
						"id": "zcpglu4",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpglu5",
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
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


