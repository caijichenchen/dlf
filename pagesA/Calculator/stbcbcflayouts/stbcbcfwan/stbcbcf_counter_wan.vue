<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfWan1[pickerIndex.stbcbcfWan1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfWan_standard">
						{{multiSelector.stbcbcfWan_standard[pickerIndex.stbcbcfWan_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1587,multiSelector.stbcbcfWan_standard[pickerIndex.stbcbcfWan_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfWan_sfxm" :value="pickerIndex.stbcbcfWan_sfxm"
				 :range="multiSelector.stbcbcfWan_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfWan_sfxm[pickerIndex.stbcbcfWan_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfWan_jd' data-name="stbcbcfWan_jd" :value="pickerIndex.stbcbcfWan_jd"
				 :range="multiSelector.stbcbcfWan_jd">
					<view class="picker">
						{{multiSelector.stbcbcfWan_jd[pickerIndex.stbcbcfWan_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfWan_jtfl' data-name="stbcbcfWan_jtfl" :value="pickerIndex.stbcbcfWan_jtfl"
				 :range="multiSelector.stbcbcfWan_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfWan_jtfl[pickerIndex.stbcbcfWan_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfWan_gclmc || showSelector.stbcbcfWan_dw">
				<view class="title">{{multiSelector.stbcbcfWan_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfWan_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfWan_dw" type="defult" v-model="needVal.stbcbcfWan_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfWan_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-wan.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
		},
		data() {
			return {
				needVal: {
					stbcbcfWan_standard: '',
					stbcbcfWan_sfxm: '',
					stbcbcfWan_jd: '',
					stbcbcfWan_jtfl: '',
					stbcbcfWan_gclmc: '',
					stbcbcfWan_gcl: '',
					stbcbcfWan_dw: '',
					stbcbcfWan_fl: '',
					stbcbcfWan_discount: '100',
					type: 'stbcbcfWan'
				},
				multiSelector: {
					stbcbcfWan1: [],
					stbcbcfWan_standard: [],
					stbcbcfWan_sfxm: [],
					stbcbcfWan_jd: [],
					stbcbcfWan_jtfl: [],
					stbcbcfWan_gclmc: '',
					stbcbcfWan_dw: '',
					stbcbcfWan_fl: '',
				},
				showSelector: {
					stbcbcfWan1: true,
					stbcbcfWan_standard: true,
					stbcbcfWan_sfxm: true,
					stbcbcfWan_jd: true,
					stbcbcfWan_jtfl: true,
					stbcbcfWan_gclmc: true,
					stbcbcfWan_dw: true,
					stbcbcfWan_fl: false,
				},
				pickerIndex: {
					stbcbcfWan1: 0,
					stbcbcfWan_standard: 0,
					stbcbcfWan_sfxm: 0,
					stbcbcfWan_jd: 0,
					stbcbcfWan_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcwan1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcwan2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-wan.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
	}
</script>


