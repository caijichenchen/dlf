<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfJi1[pickerIndex.stbcbcfJi1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi_standard">
				<view class="title">收费依据</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfJi_standard[pickerIndex.stbcbcfJi_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1615,multiSelector.stbcbcfJi_standard[pickerIndex.stbcbcfJi_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfJi_sfxm' data-name="stbcbcfJi_sfxm" :value="pickerIndex.stbcbcfJi_sfxm"
				 :range="multiSelector.stbcbcfJi_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfJi_sfxm[pickerIndex.stbcbcfJi_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfJi_jd" :value="pickerIndex.stbcbcfJi_jd"
				 :range="multiSelector.stbcbcfJi_jd">
					<view class="picker">
						{{multiSelector.stbcbcfJi_jd[pickerIndex.stbcbcfJi_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfJi_jtfl" :value="pickerIndex.stbcbcfJi_jtfl"
				 :range="multiSelector.stbcbcfJi_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfJi_jtfl[pickerIndex.stbcbcfJi_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfJi_gclmc || showSelector.stbcbcfJi_dw">
				<view class="title">{{multiSelector.stbcbcfJi_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfJi_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfJi_dw" type="defult" v-model="needVal.stbcbcfJi_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfJi_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-ji.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfJi_standard: '',
					stbcbcfJi_sfxm: '',
					stbcbcfJi_jd: '',
					stbcbcfJi_jtfl: '',
					stbcbcfJi_gclmc: '',
					stbcbcfJi_gcl: '',
					stbcbcfJi_dw: '',
					stbcbcfJi_fl: '',
					stbcbcfJi_discount: '100',
					type: 'stbcbcfJi'
				},
				multiSelector: {
					stbcbcfJi1: [],
					stbcbcfJi_standard: [],
					stbcbcfJi_sfxm: [],
					stbcbcfJi_jd: [],
					stbcbcfJi_jtfl: [],
					stbcbcfJi_gclmc: '',
					stbcbcfJi_dw: '',
					stbcbcfJi_fl: '',
				},
				showSelector: {
					stbcbcfJi1: true,
					stbcbcfJi_standard: true,
					stbcbcfJi_sfxm: true,
					stbcbcfJi_jd: true,
					stbcbcfJi_jtfl: true,
					stbcbcfJi_gclmc: true,
					stbcbcfJi_dw: true,
					stbcbcfJi_fl: false,
				},
				pickerIndex: {
					stbcbcfJi1: 0,
					stbcbcfJi_standard: 0,
					stbcbcfJi_sfxm: 0,
					stbcbcfJi_jd: 0,
					stbcbcfJi_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcji1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcji2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-ji.json',
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


