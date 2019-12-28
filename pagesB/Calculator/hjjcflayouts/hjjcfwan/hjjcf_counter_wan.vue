<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽省环境监测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.hjjcfWan1[pickerIndex.hjjcfWan1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_standard">
				<view class="title">选择标准</view>
				<view class="title m-left" v-model="needVal.hjjcfWan_standard">{{multiSelector.hjjcfWan_standard[pickerIndex.hjjcfWan_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1583,multiSelector.hjjcfWan_standard[pickerIndex.hjjcfWan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_category">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfWan_category" :value="pickerIndex.hjjcfWan_category"
				 :range="multiSelector.hjjcfWan_category">
					<view class="picker">
						{{multiSelector.hjjcfWan_category[pickerIndex.hjjcfWan_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_lb">
				<view class="title">类别</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfWan_lb" :value="pickerIndex.hjjcfWan_lb"
				 :range="multiSelector.hjjcfWan_lb">
					<view class="picker">
						{{multiSelector.hjjcfWan_lb[pickerIndex.hjjcfWan_lb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_cyxm">
				<view class="title">采样项目</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfWan_cyxm" :value="pickerIndex.hjjcfWan_cyxm"
				 :range="multiSelector.hjjcfWan_cyxm">
					<view class="picker">
						{{multiSelector.hjjcfWan_cyxm[pickerIndex.hjjcfWan_cyxm]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_ff">
				<view class="title">方法</view>
				<picker class="select" @change="PickerChange" data-name="hjjcfWan_ff" :value="pickerIndex.hjjcfWan_ff"
				 :range="multiSelector.hjjcfWan_ff">
					<view class="picker">
						{{multiSelector.hjjcfWan_ff[pickerIndex.hjjcfWan_ff]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.hjjcfWan_units">
				<view class="title">工程量</view>
				<input type="text" v-model="needVal.hjjcfWan_gcl"></input>
				<uni-tag :text="multiSelector.hjjcfWan_units" type="defult" v-model="needVal.hjjcfWan_units"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="hjjcfWan_discount" v-model="needVal.hjjcfWan_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
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
	import datajson from "@/common/json/hjjcfs/hjjcfs-wan.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					hjjcfWan_standard: '',
					hjjcfWan_category: '',
					hjjcfWan_lb: '',
					hjjcfWan_cyxm: '',
					hjjcfWan_ff: '',
					hjjcfWan_jj: '',
					hjjcfWan_gcl: '',
					hjjcfWan_units: '',
					hjjcfWan_discount: '100',
					type:'hjjcfWan'
				},
				multiSelector: {
					hjjcfWan1: [],
					hjjcfWan_standard: [],
					hjjcfWan_category: [],
					hjjcfWan_lb: [],
					hjjcfWan_cyxm: [],
					hjjcfWan_units: '',//6
					hjjcfWan_ff: [],//7
					hjjcfWan_jj: '',
				},
				showSelector: {
					hjjcfWan1: true,
					hjjcfWan_standard: true,
					hjjcfWan_category: true,
					hjjcfWan_lb: true,
					hjjcfWan_cyxm: true,
					hjjcfWan_units: true,
					hjjcfWan_ff: true,
					hjjcfWan_jj: false,
				},
				pickerIndex: {
					hjjcfWan1: 0,
					hjjcfWan_standard: 0,
					hjjcfWan_category: 0,
					hjjcfWan_lb: 0,
					hjjcfWan_cyxm: 0,
					hjjcfWan_ff: 0
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				explain: [
					{
							"id": "1",
							"title": "优惠折扣",
							"text": "根据市场行情调整"
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


