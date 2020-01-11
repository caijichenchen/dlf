<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">地质灾害危险性评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dzzhGuo_gclb">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="dzzhGuo_gclb" :value="pickerIndex.dzzhGuo_gclb"
				 :range="multiSelector.dzzhGuo_gclb">
					<view class="picker">
						{{multiSelector.dzzhGuo_gclb[pickerIndex.dzzhGuo_gclb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dzzhGuo_xmzyx">
				<view class="title">建设项目重要性</view>
				<picker class="select" @change="PickerChange" data-name="dzzhGuo_xmzyx" :value="pickerIndex.dzzhGuo_xmzyx"
				 :range="multiSelector.dzzhGuo_xmzyx">
					<view class="picker">
						{{multiSelector.dzzhGuo_xmzyx[pickerIndex.dzzhGuo_xmzyx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzhGuo_xmzyx">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >地质环境复杂程度</view>
				<picker class="select" @change="PickerChange" data-name="dzzhGuo_fzcd" :value="pickerIndex.dzzhGuo_fzcd"
				 :range="multiSelector.dzzhGuo_fzcd">
					<view class="picker">
						{{multiSelector.dzzhGuo_fzcd[pickerIndex.dzzhGuo_fzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzhGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >评估级别</view>
				<picker class="select" @change="PickerChange" data-name="dzzhGuo_pgjb" :value="pickerIndex.dzzhGuo_pgjb"
				 :range="multiSelector.dzzhGuo_pgjb">
					<view class="picker">
						{{multiSelector.dzzhGuo_pgjb[pickerIndex.dzzhGuo_pgjb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzhGuo_pgjb">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">工程类别调整系数K1</view>
				<input v-model="needVal.dzzhGuo_gclbtzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzhGuo_gclbtzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程规模评估长度km/面积km2</view>
				<input v-model="needVal.dzzhGuo_gcgmpgcdmj" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzhGuo_gcgmpgcdmj">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">地区调整系数</view>
				<input v-model="needVal.dzzhGuo_dqtzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.dzzhGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.dzzhGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<xmzyx :showModalName="showModalName" v-on:hideModal="hideModal"></xmzyx>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<gclbtzxs :showModalName="showModalName" v-on:hideModal="hideModal"></gclbtzxs>
		<tzxs :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs>
		<pgjb :showModalName="showModalName" v-on:hideModal="hideModal"></pgjb>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/dzzhs.json'
	import xmzyx from './dzzhGuo_xmzyx.vue'
	import fzcd from './dzzhGuo_fzcd.vue'
	import gclbtzxs from './dzzhGuo_gclbtzxs.vue'
	import tzxs from './dzzhGuo_gcgmpgcdmj.vue'
	import pgjb from './dzzhGuo_pgjb.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dzzhGuo_gclb: '',
					dzzhGuo_xmzyx: '',
					dzzhGuo_fzcd: '',
					dzzhGuo_pgjb: '',
					dzzhGuo_jbfy: '',
					dzzhGuo_gclbtzxs: '1.0',
					dzzhGuo_gcgmpgcdmj: '1.0',
					dzzhGuo_dqtzxs: '1.0',
					dzzhGuo_fdfd: '80',
					dzzhGuo_dzzk: '50',
					dzzhGuo_nums: '',
					type: 'dzzhGuo'
				},
				multiSelector: {
					dzzhGuo_gclb: [],
					dzzhGuo_xmzyx: [],
					dzzhGuo_fzcd: [],
					dzzhGuo_pgjb: [],
					dzzhGuo_jbfy: '',
				},
				pickerIndex: {
					dzzhGuo_gclb: 0,
					dzzhGuo_xmzyx: 0,
					dzzhGuo_fzcd: 0,
					dzzhGuo_pgjb: 0,
				},
				showSelector: {
					dzzhGuo_gclb: true,
					dzzhGuo_xmzyx: true,
					dzzhGuo_fzcd: true,
					dzzhGuo_pgjb: true,
					dzzhGuo_jbfy: false,
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "工程类别",
						"text": "工程类别不同，基本费用不同"
					},
					{
						"id": "2",
						"title": "地区调整系数",
						"text": "国家标准：0.8~1.2"
					},
					{
						"id": "6",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "7",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			xmzyx,
			fzcd,
			gclbtzxs,
			tzxs,
			pgjb
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
