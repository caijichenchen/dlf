<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfJin1[pickerIndex.stbcbcfJin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfJin_standard">
						{{multiSelector.stbcbcfJin_standard[pickerIndex.stbcbcfJin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1624,multiSelector.stbcbcfJin_standard[pickerIndex.stbcbcfJin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfJin_sfxm" :value="pickerIndex.stbcbcfJin_sfxm"
				 :range="multiSelector.stbcbcfJin_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfJin_sfxm[pickerIndex.stbcbcfJin_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfJin_jd" :value="pickerIndex.stbcbcfJin_jd"
				 :range="multiSelector.stbcbcfJin_jd">
					<view class="picker">
						{{multiSelector.stbcbcfJin_jd[pickerIndex.stbcbcfJin_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfJin_jtfl" :value="pickerIndex.stbcbcfJin_jtfl"
				 :range="multiSelector.stbcbcfJin_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfJin_jtfl[pickerIndex.stbcbcfJin_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJin_gclmc || showSelector.stbcbcfJin_dw">
				<view class="title">{{multiSelector.stbcbcfJin_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfJin_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfJin_dw" type="defult" v-model="needVal.stbcbcfJin_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfJin_discount" /></input>
				<uni-tag text="%" type="defult">%</uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-jin.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfJin_standard: '',
					stbcbcfJin_sfxm: '',
					stbcbcfJin_jd: '',
					stbcbcfJin_jtfl: '',
					stbcbcfJin_gclmc: '',
					stbcbcfJin_gcl: '',
					stbcbcfJin_dw: '',
					stbcbcfJin_fl: '',
					stbcbcfJin_discount: '100',
					type: 'stbcbcfJin'
				},
				multiSelector: {
					stbcbcfJin1: [],
					stbcbcfJin_standard: [],
					stbcbcfJin_sfxm: [],
					stbcbcfJin_jd: [],
					stbcbcfJin_jtfl: [],
					stbcbcfJin_gclmc: '',
					stbcbcfJin_dw: '',
					stbcbcfJin_fl: '',
				},
				showSelector: {
					stbcbcfJin1: true,
					stbcbcfJin_standard: true,
					stbcbcfJin_sfxm: true,
					stbcbcfJin_jd: true,
					stbcbcfJin_jtfl: true,
					stbcbcfJin_gclmc: true,
					stbcbcfJin_dw: true,
					stbcbcfJin_fl: false,
				},
				pickerIndex: {
					stbcbcfJin1: 0,
					stbcbcfJin_standard: 0,
					stbcbcfJin_sfxm: 0,
					stbcbcfJin_jd: 0,
					stbcbcfJin_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcjin1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcjin2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-jin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


