<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfMeng1[pickerIndex.stbcbcfMeng1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfMeng_standard">
						{{multiSelector.stbcbcfMeng_standard[pickerIndex.stbcbcfMeng_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1647,multiSelector.stbcbcfMeng_standard[pickerIndex.stbcbcfMeng_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfMeng_sfxm" :value="pickerIndex.stbcbcfMeng_sfxm"
				 :range="multiSelector.stbcbcfMeng_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfMeng_sfxm[pickerIndex.stbcbcfMeng_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfMeng_jd" :value="pickerIndex.stbcbcfMeng_jd"
				 :range="multiSelector.stbcbcfMeng_jd">
					<view class="picker">
						{{multiSelector.stbcbcfMeng_jd[pickerIndex.stbcbcfMeng_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfMeng_jtfl" :value="pickerIndex.stbcbcfMeng_jtfl"
				 :range="multiSelector.stbcbcfMeng_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfMeng_jtfl[pickerIndex.stbcbcfMeng_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfMeng_gclmc || showSelector.stbcbcfMeng_dw">
				<view class="title">{{multiSelector.stbcbcfMeng_gclmc}}</view>
				<input type="text" v-model="needVal.stbcbcfMeng_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfMeng_dw" type="defult" v-model="needVal.stbcbcfMeng_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="stbcbcfMeng_discount" v-model="needVal.stbcbcfMeng_discount" /></input>
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
	// import datajson from "@/common/json/stbcbcf/stbcbcf-meng.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfMeng_standard: '',
					stbcbcfMeng_sfxm: '',
					stbcbcfMeng_jd: '',
					stbcbcfMeng_jtfl: '',
					stbcbcfMeng_gclmc: '',
					stbcbcfMeng_gcl: '',
					stbcbcfMeng_dw: '',
					stbcbcfMeng_fl: '',
					stbcbcfMeng_discount: '100',
					type: 'stbcbcfMeng'
				},
				multiSelector: {
					stbcbcfMeng1: [],
					stbcbcfMeng_standard: [],
					stbcbcfMeng_sfxm: [],
					stbcbcfMeng_jd: [],
					stbcbcfMeng_jtfl: [],
					stbcbcfMeng_gclmc: '',
					stbcbcfMeng_dw: '',
					stbcbcfMeng_fl: '',
				},
				showSelector: {
					stbcbcfMeng1: true,
					stbcbcfMeng_standard: true,
					stbcbcfMeng_sfxm: true,
					stbcbcfMeng_jd: true,
					stbcbcfMeng_jtfl: true,
					stbcbcfMeng_gclmc: true,
					stbcbcfMeng_dw: true,
					stbcbcfMeng_fl: false,
				},
				pickerIndex: {
					stbcbcfMeng1: 0,
					stbcbcfMeng_standard: 0,
					stbcbcfMeng_sfxm: 0,
					stbcbcfMeng_jd: 0,
					stbcbcfMeng_jtfl: 0
				},
				datajson:'',
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcmeng1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcmeng2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/stbcbcf/stbcbcf-meng.json',
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


