<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe1">
				<view class="title">省份</view>
					<view class="title m-left">
						{{multiSelector.fljcfZhe1[pickerIndex.fljcfZhe1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe_standard">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange" data-name="fljcfZhe_standard" :value="pickerIndex.fljcfZhe_standard"
				 :range="multiSelector.fljcfZhe_standard">
					<view class="picker">
						{{multiSelector.fljcfZhe_standard[pickerIndex.fljcfZhe_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1658,multiSelector.fljcfZhe_standard[pickerIndex.fljcfZhe_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfZhe_sfxm" :value="pickerIndex.fljcfZhe_sfxm"
				 :range="multiSelector.fljcfZhe_sfxm">
					<view class="picker">
						{{multiSelector.fljcfZhe_sfxm[pickerIndex.fljcfZhe_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfZhe_jtfl" :value="pickerIndex.fljcfZhe_jtfl"
				 :range="multiSelector.fljcfZhe_jtfl">
					<view class="picker">
						{{multiSelector.fljcfZhe_jtfl[pickerIndex.fljcfZhe_jtfl]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe_gclmc || showSelector.fljcfZhe_dw">
				<view class="title" v-model="needVal.fljcfZhe_gclmc">{{multiSelector.fljcfZhe_gclmc}}</view>
				<input v-model="needVal.fljcfZhe_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfZhe_dw" type="defult" v-model="needVal.fljcfZhe_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfZhe9">
				<view class="title">{{multiSelector.fljcfZhe9}}</view>
				<input v-model="needVal.fljcfZhe_zzgd" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfZhe_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-zhe.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfZhe_standard: '',
					fljcfZhe_sfxm: '',
					fljcfZhe_jtfl: '',
					fljcfZhe_zzgdmc: '',
					fljcfZhe_gclmc: '',
					fljcfZhe_gcl: '',
					fljcfZhe_dw: '',
					fljcfZhe_jj: '',
					fljcfZhe_graded: '',
					fljcfYun_zzgd: '',
					fljcfZhe_discount: '50',
					type: 'fljcfZhe'
				},
				multiSelector: {
					fljcfZhe1: [],
					fljcfZhe_standard: [],
					fljcfZhe_sfxm: [],
					fljcfZhe_jtfl: [],//6
					fljcfZhe_gclmc: '',//5
					fljcfZhe_dw: '',//4
					fljcfZhe_jj: '',//7
					fljcfZhe_graded: '',
					fljcfZhe9: '',
				},
				showSelector: {
					fljcfZhe1: true,
					fljcfZhe_standard: true,
					fljcfZhe_sfxm: true,
					fljcfZhe_jtfl: true,
					fljcfZhe_gclmc: false,
					fljcfZhe_dw: false,
					fljcfZhe_jj: false,
					fljcfZhe_graded: false,
					fljcfZhe9: false,
				},
				pickerIndex: {
					fljcfZhe1: 0,
					fljcfZhe_standard: 0,
					fljcfZhe_sfxm: 0,
					fljcfZhe_jtfl: 0,
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "fljczhe1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljczhe2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "fljczhe3",
						"title": "检测点高度",
						"text": "检测点高度15米以下的100元，每增高5米，每个检测点加收5元"
					},
					{
						"id": "fljczhe4",
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
