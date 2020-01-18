<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山东水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfLu1[pickerIndex.stbcbcfLu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfLu_standard">
						{{multiSelector.stbcbcfLu_standard[pickerIndex.stbcbcfLu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1676,multiSelector.stbcbcfLu_standard[pickerIndex.stbcbcfLu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLu_sfxm" :value="pickerIndex.stbcbcfLu_sfxm"
				 :range="multiSelector.stbcbcfLu_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfLu_sfxm[pickerIndex.stbcbcfLu_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLu_jd" :value="pickerIndex.stbcbcfLu_jd"
				 :range="multiSelector.stbcbcfLu_jd">
					<view class="picker">
						{{multiSelector.stbcbcfLu_jd[pickerIndex.stbcbcfLu_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLu_jtfl" :value="pickerIndex.stbcbcfLu_jtfl"
				 :range="multiSelector.stbcbcfLu_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfLu_jtfl[pickerIndex.stbcbcfLu_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLu_gclmc || showSelector.stbcbcfLu_dw">
				<view class="title">{{multiSelector.stbcbcfLu_gclmc}}</view>
				<input type="text" v-model="needVal.stbcbcfLu_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfLu_dw" type="defult" v-model="needVal.stbcbcfLu_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="stbcbcfLu_discount" v-model="needVal.stbcbcfLu_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-lu.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfLu_standard: '',
					stbcbcfLu_sfxm: '',
					stbcbcfLu_jd: '',
					stbcbcfLu_jtfl: '',
					stbcbcfLu_gclmc: '',
					stbcbcfLu_gcl: '',
					stbcbcfLu_dw: '',
					stbcbcfLu_fl: '',
					stbcbcfLu_discount: '100',
					type: 'stbcbcfLu'
				},
				multiSelector: {
					stbcbcfLu1: [],
					stbcbcfLu_standard: [],
					stbcbcfLu_sfxm: [],
					stbcbcfLu_jd: [],
					stbcbcfLu_jtfl: [],
					stbcbcfLu_gclmc: '',
					stbcbcfLu_dw: '',
					stbcbcfLu_fl: '',
				},
				showSelector: {
					stbcbcfLu1: true,
					stbcbcfLu_standard: true,
					stbcbcfLu_sfxm: true,
					stbcbcfLu_jd: true,
					stbcbcfLu_jtfl: true,
					stbcbcfLu_gclmc: true,
					stbcbcfLu_dw: true,
					stbcbcfLu_fl: false,
				},
				pickerIndex: {
					stbcbcfLu1: 0,
					stbcbcfLu_standard: 0,
					stbcbcfLu_sfxm: 0,
					stbcbcfLu_jd: 0,
					stbcbcfLu_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbclu1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbclu2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-lu.json',
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


