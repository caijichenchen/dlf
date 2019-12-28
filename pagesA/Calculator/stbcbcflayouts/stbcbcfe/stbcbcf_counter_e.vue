<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖北省水土保持补偿费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE1">
				<view class="title">选择省份</view>
				<view class="title m-left">{{multiSelector.stbcbcfE1[pickerIndex.stbcbcfE1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE_standard">
				<view class="title">收费依据</view>
				<view class="title m-left" v-model="needVal.stbcbcfE_standard">{{multiSelector.stbcbcfE_standard[pickerIndex.stbcbcfE_standard]}}</view>
				<button class="m-r" type="primary" size="mini"  @tap="checkDeatil(1693,multiSelector.stbcbcfE_standard[pickerIndex.stbcbcfE_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfE_sfxm" :value="pickerIndex.stbcbcfE_sfxm"
				 :range="multiSelector.stbcbcfE_sfxm">
					<view class="picker">
						{{multiSelector.stbcbcfE_sfxm[pickerIndex.stbcbcfE_sfxm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE_jd">
				<view class="title">阶段</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfE_jd" :value="pickerIndex.stbcbcfE_jd"
				 :range="multiSelector.stbcbcfE_jd">
					<view class="picker">
						{{multiSelector.stbcbcfE_jd[pickerIndex.stbcbcfE_jd]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="stbcbcfE_jtfl" :value="pickerIndex.stbcbcfE_jtfl"
				 :range="multiSelector.stbcbcfE_jtfl">
					<view class="picker">
						{{multiSelector.stbcbcfE_jtfl[pickerIndex.stbcbcfE_jtfl]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.stbcbcfE_gclmc || showSelector.stbcbcfE_dw">
				<view class="title">{{multiSelector.stbcbcfE_gclmc}}</view>
				<input type="text" v-model="needVal.stbcbcfE_gcl"></input>
				<uni-tag :text="multiSelector.stbcbcfE_dw" type="defult" v-model="needVal.stbcbcfE_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="stbcbcfE_discount" v-model="needVal.stbcbcfE_discount" /></input>
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
	import datajson from "@/common/json/stbcbcf/stbcbcf-e.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					stbcbcfE_standard: '',
					stbcbcfE_sfxm: '',
					stbcbcfE_jd: '',
					stbcbcfE_jtfl: '',
					stbcbcfE_gclmc: '',
					stbcbcfE_gcl: '',
					stbcbcfE_dw: '',
					stbcbcfE_fl: '',
					stbcbcfE_discount: '100',
					type:'stbcbcfE'
				},
				multiSelector: {
					stbcbcfE1: [],
					stbcbcfE_standard: [],
					stbcbcfE_sfxm: [],
					stbcbcfE_jd: [],
					stbcbcfE_jtfl: [],
					stbcbcfE_gclmc: '',
					stbcbcfE_dw: '',
					stbcbcfE_fl: '',
				},
				showSelector: {
					stbcbcfE1: true,
					stbcbcfE_standard: true,
					stbcbcfE_sfxm: true,
					stbcbcfE_jd: true,
					stbcbcfE_jtfl: true,
					stbcbcfE_gclmc: true,
					stbcbcfE_dw: true,
					stbcbcfE_fl: false,
				},
				pickerIndex: {
					stbcbcfE1: 0,
					stbcbcfE_standard: 0,
					stbcbcfE_sfxm: 0,
					stbcbcfE_jd: 0,
					stbcbcfE_jtfl: 0
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "stbce1",
						"title": "收费项目",
						"text": "选择收费项目类别"
					},
					{
						"id": "stbce2",
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
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


