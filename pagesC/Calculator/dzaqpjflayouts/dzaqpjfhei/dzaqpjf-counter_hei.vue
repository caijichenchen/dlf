<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江地震安全评价费</text>
		</div>
		
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_xzsf">
			<view class="title">选择省份</view>
				<view class="title m-left">
					{{multiSelector.dzaqpjfHei_xzsf[pickerIndex.dzaqpjfHei_xzsf]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_standard">
			<view class="title">选择标准</view>
				<view class="title">
					{{multiSelector.dzaqpjfHei_standard[pickerIndex.dzaqpjfHei_standard]}}
				</view>
			<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1643,multiSelector.dzaqpjfHei_standard[pickerIndex.dzaqpjfHei_standard])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_category">
			<view class="title">评价分类</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHei_category" :value="pickerIndex.dzaqpjfHei_category"
			 :range="multiSelector.dzaqpjfHei_category">
				<view class="picker">
					{{multiSelector.dzaqpjfHei_category[pickerIndex.dzaqpjfHei_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_pjxm">
			<view class="title">评价项目</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHei_pjxm" :value="pickerIndex.dzaqpjfHei_pjxm"
			 :range="multiSelector.dzaqpjfHei_pjxm">
				<view class="picker">
					{{multiSelector.dzaqpjfHei_pjxm[pickerIndex.dzaqpjfHei_pjxm]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfHei_pjxm">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_gzjb">
			<view class="title">工作级别</view>
			<picker class="select" @change="PickerChange" data-name="dzaqpjfHei_gzjb" :value="pickerIndex.dzaqpjfHei_gzjb"
			 :range="multiSelector.dzaqpjfHei_gzjb">
				<view class="picker">
					{{multiSelector.dzaqpjfHei_gzjb[pickerIndex.dzaqpjfHei_gzjb]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.dzaqpjfHei_sffl">
			<view class="title">收费分类</view>
			<picker class="select" @change="PickerChange" data-index="dzaqpjfHei_sffl" data-name="dzaqpjfHei_sffl" :value="pickerIndex.dzaqpjfHei_sffl"
			 :range="multiSelector.dzaqpjfHei_sffl">
				<view class="picker">
					{{multiSelector.dzaqpjfHei_sffl[pickerIndex.dzaqpjfHei_sffl]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfHei_sffl">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">工作量</view>
			<input type="digit" v-model="needVal.dzaqpjfHei_gzl" /></input>
			<uni-tag :text="multiSelector.dzaqpjfHei5" type="defult" v-model="multiSelector.dzaqpjfHei5"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">附加调整</view>
			<input type="digit" v-model="needVal.dzaqpjfHei_fjtz" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showModal" data-target="dzaqpjfHei_fjtz">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input type="digit" v-model="needVal.dzaqpjfHei_fdfd" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input type="digit" v-model="needVal.dzaqpjfHei_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
		</view>
		<explain></explain>
		<fjtz-hei :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz-hei>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/dzaqpjfs/dzaqpjfs-hei.json'
	import fjtzHei from './dzaqpjfHei_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/dzaqpjfs/dzaqpjfs-hei.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					dzaqpjfHei_xzsf: '',
					dzaqpjfHei_standard: '',
					dzaqpjfHei_category: '',
					dzaqpjfHei_pjxm: '',
					dzaqpjfHei_gzjb: '',
					dzaqpjfHei_sffl: '',
					dzaqpjfHei_xs: '',
					dzaqpjfHei_gzl: '1',
					dzaqpjfHei_fjtz: '100',
					dzaqpjfHei_fdfd: '100',
					dzaqpjfHei_discount: '50',
					type: 'dzaqpjfHei'
				},
				multiSelector: {
					dzaqpjfHei_xzsf: [],
					dzaqpjfHei_standard: [],
					dzaqpjfHei_category: [],
					dzaqpjfHei_pjxm: [],//5
					dzaqpjfHei5: '',
					dzaqpjfHei_gzjb: [],//7
					dzaqpjfHei_sffl: [],
					dzaqpjfHei_xs: '',
				},
				showSelector: {
					dzaqpjfHei_xzsf: true,
					dzaqpjfHei_standard: true,
					dzaqpjfHei_category: true,
					dzaqpjfHei_pjxm: true,
					dzaqpjfHei5: true,
					dzaqpjfHei_gzjb: true,
					dzaqpjfHei_sffl: true,
					dzaqpjfHei_xs: false,
				},
				pickerIndex: {
					dzaqpjfHei_xzsf: 0,
					dzaqpjfHei_standard: 0,
					dzaqpjfHei_category: 0,
					dzaqpjfHei_pjxm: 0,
					dzaqpjfHei_gzjb: 0,
					dzaqpjfHei_sffl: 0
				},
				showModalName: null,
				datajson:'',
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
						"title": "浮动幅度",
						"text": "在其收费标准的基础上上浮20%"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			fjtzHei
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
