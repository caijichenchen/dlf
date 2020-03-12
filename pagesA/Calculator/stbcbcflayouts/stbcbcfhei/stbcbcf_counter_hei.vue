<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfHei1[pickerIndex.stbcbcfHei1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfHei_standard">
						{{multiSelector.stbcbcfHei_standard[pickerIndex.stbcbcfHei_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1696,multiSelector.stbcbcfHei_standard[pickerIndex.stbcbcfHei_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfHei_sfxm' data-name="stbcbcfHei_sfxm" :value="pickerIndex.stbcbcfHei_sfxm"
				 :range="multiSelector.stbcbcfHei_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfHei_sfxm[pickerIndex.stbcbcfHei_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfHei_jd' data-name="stbcbcfHei_jd" :value="pickerIndex.stbcbcfHei_jd"
				 :range="multiSelector.stbcbcfHei_jd">
					<view class="picker">
						{{multiSelector.stbcbcfHei_jd[pickerIndex.stbcbcfHei_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfHei_jtfl' data-name="stbcbcfHei_jtfl" :value="pickerIndex.stbcbcfHei_jtfl"
				 :range="multiSelector.stbcbcfHei_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfHei_jtfl[pickerIndex.stbcbcfHei_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfHei_gclmc || showSelector.stbcbcfHei_dw">
				<view class="title">{{multiSelector.stbcbcfHei_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfHei_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfHei_dw" type="defult" v-model="needVal.stbcbcfHei_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfHei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-hei.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfHei_standard: '',
					stbcbcfHei_sfxm: '',
					stbcbcfHei_jd: '',
					stbcbcfHei_jtfl: '',
					stbcbcfHei_fl: '',
					stbcbcfHei_gclmc: '',
					stbcbcfHei_gcl: '',
					stbcbcfHei_dw: '',
					stbcbcfHei_discount: '100',
					type: 'stbcbcfHei'
				},
				multiSelector: {
					stbcbcfHei1: [],
					stbcbcfHei_standard: [],
					stbcbcfHei_sfxm: [],
					stbcbcfHei_jd: [],
					stbcbcfHei_jtfl: [],
					stbcbcfHei_gclmc: '',
					stbcbcfHei_dw: '',
					stbcbcfHei_fl: '',
				},
				showSelector: {
					stbcbcfHei1: true,
					stbcbcfHei_standard: true,
					stbcbcfHei_sfxm: true,
					stbcbcfHei_jd: true,
					stbcbcfHei_jtfl: true,
					stbcbcfHei_gclmc: true,
					stbcbcfHei_dw: true,
					stbcbcfHei_fl: false,
				},
				pickerIndex: {
					stbcbcfHei1: 0,
					stbcbcfHei_standard: 0,
					stbcbcfHei_sfxm: 0,
					stbcbcfHei_jd: 0,
					stbcbcfHei_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbchei1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbchei2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-hei.json',
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


