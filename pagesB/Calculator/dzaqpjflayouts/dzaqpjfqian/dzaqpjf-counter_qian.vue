<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">贵州省地震安全评价费</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQian_xzsf">
			<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.dzaqpjfQian_xzsf[pickerIndex.dzaqpjfQian_xzsf]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQian_standard">
			<view class="title">选择标准</view>
				<view class="title">
					{{multiSelector.dzaqpjfQian_standard[pickerIndex.dzaqpjfQian_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1700,multiSelector.dzaqpjfQian_standard[pickerIndex.dzaqpjfQian_standard])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQian_category">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQian_category" :value="pickerIndex.dzaqpjfQian_category"
			 :range="multiSelector.dzaqpjfQian_category">
				<view class="picker">
					{{multiSelector.dzaqpjfQian_category[pickerIndex.dzaqpjfQian_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQian_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQian_pjxm" :value="pickerIndex.dzaqpjfQian_pjxm"
			 :range="multiSelector.dzaqpjfQian_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfQian_pjxm[pickerIndex.dzaqpjfQian_pjxm]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfQian_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfQian_gzjb" :value="pickerIndex.dzaqpjfQian_gzjb"
			 :range="multiSelector.dzaqpjfQian_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfQian_gzjb[pickerIndex.dzaqpjfQian_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">工作量</view>
			<input v-model="needVal.dzaqpjfQian_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfQian5" type="defult" v-model="multiSelector.dzaqpjfQian5"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.dzaqpjfQian_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-qian.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dzaqpjfQian_xzsf: '',
					dzaqpjfQian_standard: '',
					dzaqpjfQian_category: '',
					dzaqpjfQian_pjxm: '',
					dzaqpjfQian_gzjb: '',
					dzaqpjfQian_xs: '',
					dzaqpjfQian_gzl: '1',
					dzaqpjfQian_discount: '50',
					type: 'dzaqpjfQian'
				},
				multiSelector: {
					dzaqpjfQian_xzsf: [],
					dzaqpjfQian_standard: [],
					dzaqpjfQian_category: [],
					dzaqpjfQian_pjxm: [],//5
					dzaqpjfQian5: '',
					dzaqpjfQian_gzjb: [],//7
					dzaqpjfQian_xs: '',
				},
				showSelector: {
					dzaqpjfQian_xzsf: true,
					dzaqpjfQian_standard: true,
					dzaqpjfQian_category: true,
					dzaqpjfQian_pjxm: true,
					dzaqpjfQian5: true,
					dzaqpjfQian_gzjb: true,
					dzaqpjfQian_xs: false,
				},
				pickerIndex: {
					dzaqpjfQian_xzsf: 0,
					dzaqpjfQian_standard: 0,
					dzaqpjfQian_category: 0,
					dzaqpjfQian_pjxm: 0,
					dzaqpjfQian_gzjb: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "工作级别",
						"text": "一般分为一到四级"
					},
					{
						"id": "2",
						"title": "工作量",
						"text": "输入工作量"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			explain,
			uniTag,
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
