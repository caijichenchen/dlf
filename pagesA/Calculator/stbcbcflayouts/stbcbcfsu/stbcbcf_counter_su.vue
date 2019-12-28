<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.stbcbcfSu1[pickerIndex.stbcbcfSu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu_standard">
				<view class="title">收费依据</view>
					<view class="title m-left" v-model="needVal.stbcbcfSu_standard">
						{{multiSelector.stbcbcfSu_standard[pickerIndex.stbcbcfSu_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1665,multiSelector.stbcbcfSu_standard[pickerIndex.stbcbcfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfSu_sfxm" :value="pickerIndex.stbcbcfSu_sfxm"
				 :range="multiSelector.stbcbcfSu_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfSu_sfxm[pickerIndex.stbcbcfSu_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfSu_jd" :value="pickerIndex.stbcbcfSu_jd"
				 :range="multiSelector.stbcbcfSu_jd">
					<view class="picker">
						{{multiSelector.stbcbcfSu_jd[pickerIndex.stbcbcfSu_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfSu_jtfl" :value="pickerIndex.stbcbcfSu_jtfl"
				 :range="multiSelector.stbcbcfSu_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfSu_jtfl[pickerIndex.stbcbcfSu_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfSu_gclmc || showSelector.stbcbcfSu_dw">
				<view class="title">{{multiSelector.stbcbcfSu_gclmc}}</view>
				<input type="text" v-model="needVal.stbcbcfSu_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfSu_dw" type="defult" v-model="needVal.stbcbcfSu_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="stbcbcfSu_discount" v-model="needVal.stbcbcfSu_discount" /></input>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from "@/common/json/stbcbcf/stbcbcf-su.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfSu_standard: '',
					stbcbcfSu_sfxm: '',
					stbcbcfSu_jd: '',
					stbcbcfSu_jtfl: '',
					stbcbcfSu_gclmc: '',
					stbcbcfSu_gcl: '',
					stbcbcfSu_dw: '',
					stbcbcfSu_fl: '',
					stbcbcfSu_discount: '100',
					type: 'stbcbcfSu'
				},
				multiSelector: {
					stbcbcfSu1: [],
					stbcbcfSu_standard: [],
					stbcbcfSu_sfxm: [],
					stbcbcfSu_jd: [],
					stbcbcfSu_jtfl: [],
					stbcbcfSu_gclmc: '',
					stbcbcfSu_dw: '',
					stbcbcfSu_fl: '',
				},
				showSelector: {
					stbcbcfSu1: true,
					stbcbcfSu_standard: true,
					stbcbcfSu_sfxm: true,
					stbcbcfSu_jd: true,
					stbcbcfSu_jtfl: true,
					stbcbcfSu_gclmc: true,
					stbcbcfSu_dw: true,
					stbcbcfSu_fl: false,
				},
				pickerIndex: {
					stbcbcfSu1: 0,
					stbcbcfSu_standard: 0,
					stbcbcfSu_sfxm: 0,
					stbcbcfSu_jd: 0,
					stbcbcfSu_jtfl: 0
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbcsu1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbcsu2",
						"title": "打折折扣",
						"text": "根据市场行情调整"
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


