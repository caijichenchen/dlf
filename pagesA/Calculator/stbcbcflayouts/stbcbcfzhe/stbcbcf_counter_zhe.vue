<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfZhe1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfZhe1[pickerIndex.stbcbcfZhe1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfZhe_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfZhe_standard">
						{{multiSelector.stbcbcfZhe_standard[pickerIndex.stbcbcfZhe_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1655,multiSelector.stbcbcfZhe_standard[pickerIndex.stbcbcfZhe_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfZhe_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-index='stbcbcfZhe_sfxm' data-name="stbcbcfZhe_sfxm" :value="pickerIndex.stbcbcfZhe_sfxm"
				 :range="multiSelector.stbcbcfZhe_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfZhe_sfxm[pickerIndex.stbcbcfZhe_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfZhe_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfZhe_jd" :value="pickerIndex.stbcbcfZhe_jd"
				 :range="multiSelector.stbcbcfZhe_jd">
					<view class="picker">
						{{multiSelector.stbcbcfZhe_jd[pickerIndex.stbcbcfZhe_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfZhe_gclmc || showSelector.stbcbcfZhe_dw">
				<view class="title">{{multiSelector.stbcbcfZhe_gclmc}}</view>
				<input type="digit" v-model="needVal.stbcbcfZhe_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfZhe_dw" type="defult" v-model="needVal.stbcbcfZhe_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.stbcbcfZhe_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-zhe.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfZhe_standard: '',
					stbcbcfZhe_sfxm: '',
					stbcbcfZhe_jd: '',
					stbcbcfZhe_gclmc: '',
					stbcbcfZhe_gcl: '',
					stbcbcfZhe_dw: '',
					stbcbcfZhe_fl: '',
					stbcbcfZhe_discount: '100',
					type: 'stbcbcfZhe'
				},
				multiSelector: {
					stbcbcfZhe1: [],
					stbcbcfZhe_standard: [],
					stbcbcfZhe_sfxm: [],
					stbcbcfZhe_jd: [],
					stbcbcfZhe_gclmc: '',
					stbcbcfZhe_dw: '',
					stbcbcfZhe_fl: '',
				},
				showSelector: {
					stbcbcfZhe1: true,
					stbcbcfZhe_standard: true,
					stbcbcfZhe_sfxm: true,
					stbcbcfZhe_jd: true,
					stbcbcfZhe_gclmc: true,
					stbcbcfZhe_dw: true,
					stbcbcfZhe_fl: false,
				},
				pickerIndex: {
					stbcbcfZhe1: 0,
					stbcbcfZhe_standard: 0,
					stbcbcfZhe_sfxm: 0,
					stbcbcfZhe_jd: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbczhe1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbczhe2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-zhe.json',
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


