<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfLiao1[pickerIndex.stbcbcfLiao1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfLiao_standard">
						{{multiSelector.stbcbcfLiao_standard[pickerIndex.stbcbcfLiao_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1628,multiSelector.stbcbcfLiao_standard[pickerIndex.stbcbcfLiao_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLiao_sfxm" :value="pickerIndex.stbcbcfLiao_sfxm"
				 :range="multiSelector.stbcbcfLiao_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfLiao_sfxm[pickerIndex.stbcbcfLiao_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLiao_jd" :value="pickerIndex.stbcbcfLiao_jd"
				 :range="multiSelector.stbcbcfLiao_jd">
					<view class="picker">
						{{multiSelector.stbcbcfLiao_jd[pickerIndex.stbcbcfLiao_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfLiao_jtfl" :value="pickerIndex.stbcbcfLiao_jtfl"
				 :range="multiSelector.stbcbcfLiao_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfLiao_jtfl[pickerIndex.stbcbcfLiao_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfLiao_gclmc || showSelector.stbcbcfLiao_dw">
				<view class="title">{{multiSelector.stbcbcfLiao_gclmc}}</view>
				<input type="text" v-model="needVal.stbcbcfLiao_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfLiao_dw" type="defult" v-model="needVal.stbcbcfLiao_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="stbcbcfLiao_discount" v-model="needVal.stbcbcfLiao_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-liao.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfLiao_standard: '',
					stbcbcfLiao_sfxm: '',
					stbcbcfLiao_jd: '',
					stbcbcfLiao_jtfl: '',
					stbcbcfLiao_gclmc: '',
					stbcbcfLiao_gcl: '',
					stbcbcfLiao_dw: '',
					stbcbcfLiao_fl: '',
					stbcbcfLiao_discount: '100',
					type: 'stbcbcfLiao'
				},
				multiSelector: {
					stbcbcfLiao1: [],
					stbcbcfLiao_standard: [],
					stbcbcfLiao_sfxm: [],
					stbcbcfLiao_jd: [],
					stbcbcfLiao_jtfl: [],
					stbcbcfLiao_fl: '',
					stbcbcfLiao_gclmc: '',
					stbcbcfLiao_dw: '',
				},
				showSelector: {
					stbcbcfLiao1: true,
					stbcbcfLiao_standard: true,
					stbcbcfLiao_sfxm: true,
					stbcbcfLiao_jd: true,
					stbcbcfLiao_jtfl: true,
					stbcbcfLiao_fl: false,
					stbcbcfLiao_gclmc: true,
					stbcbcfLiao_dw: true,
				},
				pickerIndex: {
					stbcbcfLiao1: 0,
					stbcbcfLiao_standard: 0,
					stbcbcfLiao_sfxm: 0,
					stbcbcfLiao_jd: 0,
					stbcbcfLiao_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcliao1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcliao2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-liao.json',
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


