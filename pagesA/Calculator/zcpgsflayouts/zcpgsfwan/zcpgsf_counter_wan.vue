<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfWan1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.zcpgsfWan1[pickerIndex.zcpgsfWan1]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfWan_standard">
				<view class="title">选择标准</view>
				<view class="title m-left">{{multiSelector.zcpgsfWan_standard[pickerIndex.zcpgsfWan_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(313,multiSelector.zcpgsfWan_standard[pickerIndex.zcpgsfWan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfWan_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfWan_category" :value="pickerIndex.zcpgsfWan_category"
				 :range="multiSelector.zcpgsfWan_category">
					<view class="picker">
						{{multiSelector.zcpgsfWan_category[pickerIndex.zcpgsfWan_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfWan_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfWan_ryjc" :value="pickerIndex.zcpgsfWan_ryjc"
				 :range="multiSelector.zcpgsfWan_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfWan_ryjc[pickerIndex.zcpgsfWan_ryjc]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group"  v-show="showSelector.zcpgsfWan_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfWan_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfWan4 || showSelector.zcpgsfWan5">
				<view class="title">{{multiSelector.zcpgsfWan4}}</view>
				<input type="text" v-model="needVal.zcpgsfWan_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfWan5" type="defult" v-model="multiSelector.zcpgsfWan5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfWan_discount" v-model="needVal.zcpgsfWan_discount" /></input>
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
	import datajson from "@/common/json/zcpgfs/zcpgfs-wan.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfWan_standard: '皖价服[2010]151号',
					zcpgsfWan_category: '',
					zcpgsfWan_ryjc: '',
					zcpgsfWan_dysf: '',
					zcpgsfWan_peoples: '',
					zcpgsfWan_fl: '',
					zcpgsfWan_graded: '',
					zcpgsfWan_edorcd: '',
					zcpgsfWan_discount: '100',
					type: 'zcpgsfWan'
				},
				multiSelector: {
					zcpgsfWan1: [],
					zcpgsfWan_standard: [],
					zcpgsfWan_category: [],
					zcpgsfWan4: '',
					zcpgsfWan5: '',
					zcpgsfWan_fl: '',//6
					zcpgsfWan_graded: '',//7
					zcpgsfWan_ryjc: [],//8
					zcpgsfWan_dysf: '',//9
				},
				showSelector: {
					zcpgsfWan1: true,
					zcpgsfWan_standard: true,
					zcpgsfWan_category: true,
					zcpgsfWan4: true,
					zcpgsfWan5: true,
					zcpgsfWan_fl: false,
					zcpgsfWan_graded: false, 
					zcpgsfWan_ryjc: false,
					zcpgsfWan_dysf: false,
				},
				pickerIndex: {
					zcpgsfWan1: 0,
					zcpgsfWan_standard: 0,
					zcpgsfWan_category: 0,
					zcpgsfWan_ryjc: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "zcpgwan1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "zcpgwan2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "zcpgwan3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "zcpgwan4",
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


