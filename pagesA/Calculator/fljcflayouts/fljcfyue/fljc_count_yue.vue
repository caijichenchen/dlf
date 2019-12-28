<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广东省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfYue1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfYue1[pickerIndex.fljcfYue1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYue_standard">
				<view class="title">选择标准</view>
					<picker class="select" @change="PickerChange" data-name="fljcfYue_standard" :value="pickerIndex.fljcfYue_standard"
					 :range="multiSelector.fljcfYue_standard">
						<view class="picker">
							{{multiSelector.fljcfYue_standard[pickerIndex.fljcfYue_standard]}}
						</view>
					</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1550,multiSelector.fljcfYue_standard[pickerIndex.fljcfYue_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYue_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYue_sfxm" :value="pickerIndex.fljcfYue_sfxm"
				 :range="multiSelector.fljcfYue_sfxm">
					<view class="picker">
						{{multiSelector.fljcfYue_sfxm[pickerIndex.fljcfYue_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYue4">
				<view class="title">{{multiSelector.fljcfYue4}}</view>
				<input v-model="needVal.fljcfYue_czcs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYue_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYue_jtfl" :value="pickerIndex.fljcfYue_jtfl"
				 :range="multiSelector.fljcfYue_jtfl">
					<view class="picker">
						{{multiSelector.fljcfYue_jtfl[pickerIndex.fljcfYue_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYue_gclmc || showSelector.fljcfYue_dw">
				<view class="title" v-model="needVal.fljcfYue_gclmc">{{multiSelector.fljcfYue_gclmc}}</view>
				<input v-model="needVal.fljcfYue_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfYue_dw" type="defult" v-model="needVal.fljcfYue_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfYue_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
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
	import datajson from '@/common/json/fljcfs/fljcfs-yue.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfYue_standard: '',
					fljcfYue_sfxm: '',
					fljcfYue_czcs: '',
					fljcfYue_jtfl: '',
					fljcfYue_gclmc: '',
					fljcfYue_gcl: '',
					fljcfYue_dw: '',
					fljcfYue_jj: '',
					fljcfYue_discount: '50',
					type: 'fljcfYue'
				},
				multiSelector: {
					fljcfYue1: [],
					fljcfYue_standard: [],
					fljcfYue_sfxm: [],
					fljcfYue4: '',
					fljcfYue_jtfl: [],//6
					fljcfYue_gclmc: '',//5
					fljcfYue_dw: '',//4
					fljcfYue_jj: '',//7
				},
				showSelector: {
					fljcfYue1: true,
					fljcfYue_standard: true,
					fljcfYue_sfxm: true,
					fljcfYue4: true,
					fljcfYue_jtfl: true,
					fljcfYue_gclmc: false,
					fljcfYue_dw: false,
					fljcfYue_jj: false,
				},
				pickerIndex: {
					fljcfYue1: 0,
					fljcfYue_standard: 0,
					fljcfYue_sfxm: 0,
					fljcfYue_jtfl: 0,
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljcyue1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcyue2",
						"title": "层数",
						"text": "请输入楼层数"
					},
					{
						"id": "fljcyue3",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljcyue4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
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

<style>
</style>
