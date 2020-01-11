<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">青岛市PPP项目咨询服务收费计算器</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.pppxmzxQingdao1">
				<view class="title">选择区域</view>
				<view class="title m-left">{{multiSelector.pppxmzxQingdao1[pickerIndex.pppxmzxQingdao1]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">估算投资额</view>
				<input name="pppxmzxQingdao_gczj" v-model="needVal.pppxmzxQingdao_gczj" /></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxQingdao_standard" :value="pickerIndex.pppxmzxQingdao_standard"
				 :range="multiSelector.pppxmzxQingdao_standard">
					<view class="picker">
						{{multiSelector.pppxmzxQingdao_standard[pickerIndex.pppxmzxQingdao_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1678,multiSelector.pppxmzxQingdao_standard[pickerIndex.pppxmzxQingdao_standard])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxQingdao_category" :value="pickerIndex.pppxmzxQingdao_category"
				 :range="multiSelector.pppxmzxQingdao_category">
					<view class="picker">
						{{multiSelector.pppxmzxQingdao_category[pickerIndex.pppxmzxQingdao_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目分类</view>
				<picker class="select" @change="PickerChange"  data-name="pppxmzxQingdao_xmfl" :value="pickerIndex.pppxmzxQingdao_xmfl"
				 :range="multiSelector.pppxmzxQingdao_xmfl">
					<view class="picker">
						{{multiSelector.pppxmzxQingdao_xmfl[pickerIndex.pppxmzxQingdao_xmfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目计算次数</view>
				<input v-model="needVal.pppxmzxQingdao_xmjscs" /></input>
				<uni-tag text="次" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.pppxmzxQingdao_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from '@/common/json/pppxmzxs/pppxmzxs-qingdao.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					pppxmzxQingdao_gczj: '',
					pppxmzxQingdao_standard: '',
					pppxmzxQingdao_category: '',
					pppxmzxQingdao_xmfl: '',
					pppxmzxQingdao_graded: '',
					pppxmzxQingdao_qffljj: '',
					pppxmzxQingdao_sfjj: '',
					pppxmzxQingdao_xmjscs: '',
					pppxmzxQingdao_discount: '100',
					type: 'pppxmzxQingdao'
				},
				multiSelector: {
					pppxmzxQingdao1: [],
					pppxmzxQingdao_standard: [],
					pppxmzxQingdao_category: [],
					pppxmzxQingdao_graded: '',
					pppxmzxQingdao_xmfl: [],
					pppxmzxQingdao_qffljj: '',
					pppxmzxQingdao_sfjj: '',
				},
				pickerIndex: {
					pppxmzxQingdao1: 0,
					pppxmzxQingdao_standard: 0,
					pppxmzxQingdao_category: 0,
					pppxmzxQingdao_xmfl: 0,
				},
				showSelector: {
					pppxmzxQingdao1: true,
					pppxmzxQingdao_standard: true,
					pppxmzxQingdao_category: true,
					pppxmzxQingdao_graded: false,
					pppxmzxQingdao_xmfl: true,
					pppxmzxQingdao_qffljj: false,
					pppxmzxQingdao_sfjj: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "3",
						"title": "项目类别",
						"text": "请确定好计算类别"
					},
					{
						"id": "4",
						"title": "项目分类",
						"text": "请确定好计算类别"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
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

<style>

</style>
