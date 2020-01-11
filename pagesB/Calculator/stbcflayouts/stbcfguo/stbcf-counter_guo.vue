<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">水土保持费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcfGuo_sfyj">
				<view class="title">收费依据</view>
				<view class="title" v-model="needVal.stbcfGuo_sfyj">{{multiSelector.stbcfGuo_sfyj[pickerIndex.stbcfGuo_sfyj]}}</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcfGuo_jsxm">
				<view class="title">计算项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcfGuo_jsxm" :value="pickerIndex.stbcfGuo_jsxm"
				 :range="multiSelector.stbcfGuo_jsxm">
					<view class="picker">
						{{multiSelector.stbcfGuo_jsxm[pickerIndex.stbcfGuo_jsxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">主体土建投资</view>
				<input v-model="needVal.stbcfGuo_zttjtz"/></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcfGuo_tzxs">
				<view class="title">调整系数</view>
				<input v-model="needVal.stbcfGuo_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="stbcfGuo_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.stbcfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<explain></explain>
		</form>
		<tzxs-guo :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-guo>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/stbcfs1.json'
	import tzxsGuo from './stbcfGuo_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcfGuo_sfyj: '',
					stbcfGuo_fw: '',
					stbcfGuo_jsxm: '',
					stbcfGuo_fl: '',
					stbcfGuo_zttjtz: '',
					stbcfGuo_tzxs: '1.0',
					stbcfGuo_dzzk: '40',
					stbcfGuo_nums: '',
					type: 'stbcfGuo'
				},
				multiSelector: {
					stbcfGuo_sfyj: [],
					stbcfGuo_fw: '',
					stbcfGuo_jsxm: [],
					stbcfGuo_fl: '',
					stbcfGuo_tzxs: ''
				},
				pickerIndex: {
					stbcfGuo_sfyj: 0,
					stbcfGuo_jsxm: 0,
				},
				showSelector: {
					stbcfGuo_sfyj: true,
					stbcfGuo_fw: false,
					stbcfGuo_jsxm: true,
					stbcfGuo_fl: false,
					stbcfGuo_tzxs: false
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "收费依据",
						"text": "各地区取值略有不同"
					},
					{
						"id": "2",
						"title": "计算项目",
						"text": "各地区取值略有不同"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			tzxsGuo
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
