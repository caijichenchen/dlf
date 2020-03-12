<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.stbcbcfGui1[pickerIndex.stbcbcfGui1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui_standard">
				<view class="title">收费依据</view>
				<view class="title m-left" v-model="needVal.stbcbcfGui_standard">{{multiSelector.stbcbcfGui_standard[pickerIndex.stbcbcfGui_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1596,multiSelector.stbcbcfGui_standard[pickerIndex.stbcbcfGui_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfGui_sfxm" :value="pickerIndex.stbcbcfGui_sfxm"
				 :range="multiSelector.stbcbcfGui_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfGui_sfxm[pickerIndex.stbcbcfGui_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfGui_jd" :value="pickerIndex.stbcbcfGui_jd"
				 :range="multiSelector.stbcbcfGui_jd">
					<view class="picker">
						{{multiSelector.stbcbcfGui_jd[pickerIndex.stbcbcfGui_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfGui_jtfl" :value="pickerIndex.stbcbcfGui_jtfl"
				 :range="multiSelector.stbcbcfGui_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfGui_jtfl[pickerIndex.stbcbcfGui_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfGui_gclmc || showSelector.stbcbcfGui_dw">
				<view class="title">{{multiSelector.stbcbcfGui_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfGui_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfGui_dw" type="defult" v-model="needVal.stbcbcfGui_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfGui_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-gui.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfGui_standard: '',
					stbcbcfGui_sfxm: '',
					stbcbcfGui_jd: '',
					stbcbcfGui_jtfl: '',
					stbcbcfGui_gclmc: '',
					stbcbcfGui_gcl: '',
					stbcbcfGui_dw: '',
					stbcbcfGui_fl: '',
					stbcbcfGui_discount: '100',
					type: 'stbcbcfGui'
				},
				multiSelector: {
					stbcbcfGui1: [],
					stbcbcfGui_standard: [],
					stbcbcfGui_sfxm: [],
					stbcbcfGui_jd: [],
					stbcbcfGui_jtfl: [],
					stbcbcfGui_gclmc: '',
					stbcbcfGui_dw: '',
					stbcbcfGui_fl: '',
				},
				showSelector: {
					stbcbcfGui1: true,
					stbcbcfGui_standard: true,
					stbcbcfGui_sfxm: true,
					stbcbcfGui_jd: true,
					stbcbcfGui_jtfl: true,
					stbcbcfGui_gclmc: true,
					stbcbcfGui_dw: true,
					stbcbcfGui_fl: false,
				},
				pickerIndex: {
					stbcbcfGui1: 0,
					stbcbcfGui_standard: 0,
					stbcbcfGui_sfxm: 0,
					stbcbcfGui_jd: 0,
					stbcbcfGui_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "sgbcgui1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "sgbcgui2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-gui.json',
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


