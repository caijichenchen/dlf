<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">甘肃省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfLong1">
				<view class="title">省份</view>
					<view class="title m-left" >
						{{multiSelector.jsjyfwfLong1[pickerIndex.jsjyfwfLong1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfLong_standard">
				<view class="title">选择标准</view>
					<picker class="select" @change="PickerChange" data-name="jsjyfwfLong_standard" :value="pickerIndex.jsjyfwfLong_standard"
					 :range="multiSelector.jsjyfwfLong_standard">
						<view class="picker" >
							{{multiSelector.jsjyfwfLong_standard[pickerIndex.jsjyfwfLong_standard]}}
						</view>
					</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1727,multiSelector.jsjyfwfLong_standard[pickerIndex.jsjyfwfLong_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfLong_category">
				<view class="title">分类</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfLong_category" :value="pickerIndex.jsjyfwfLong_category"
				 :range="multiSelector.jsjyfwfLong_category">
					<view class="picker" >
						{{multiSelector.jsjyfwfLong_category[pickerIndex.jsjyfwfLong_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfLong_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfLong_sfxm" :value="pickerIndex.jsjyfwfLong_sfxm"
				 :range="multiSelector.jsjyfwfLong_sfxm">
					<view class="picker" >
						{{multiSelector.jsjyfwfLong_sfxm[pickerIndex.jsjyfwfLong_sfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标价/成交金额</view>
				<input type="text" v-model="needVal.jsjyfwfLong_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">收取分配</view>
				<input type="text" v-model="needVal.jsjyfwfLong_qfbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfLong_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsjyfwfLong_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfblLong :showModalName="showModalName" v-on:hideModal="hideModal"></qfblLong>
	</view>
</template>
	
<script>
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/jsjyfwf/jsjyfwf-long.json'
	import explain from '@/common/base/explain.vue'
	import qfblLong from './jsjyfwfLong_qfbl.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jsjyfwfLong_standard: '',
					jsjyfwfLong_category: '',
					jsjyfwfLong_sfxm: '',
					jsjyfwfLong_graded: '',
					jsjyfwfLong_jj: '',
					jsjyfwfLong_zbj: '',
					jsjyfwfLong_qfbl: '100',
					jsjyfwfLong_discount: '100',
					type: 'jsjyfwfLong'
				},
				multiSelector: {
					jsjyfwfLong1: [],
					jsjyfwfLong_standard: [],
					jsjyfwfLong_category: [],
					jsjyfwfLong_sfxm: [],
					jsjyfwfLong_graded: '',
					jsjyfwfLong_jj: '',
				},
				showSelector: {
					jsjyfwfLong1: true,
					jsjyfwfLong_standard: true,
					jsjyfwfLong_category: true,
					jsjyfwfLong_sfxm: true,
					jsjyfwfLong_graded: false,
					jsjyfwfLong_jj: false,
				},
				pickerIndex: {
					jsjyfwfLong1: 0,
					jsjyfwfLong_standard: 0,
					jsjyfwfLong_category: 0,
					jsjyfwfLong_sfxm: 0
				},
				showModalName: null,
				datajson: datajson,
				explain: [{
						"id": "1",
						"title": "分类",
						"text": "选择建设交易服务收费类别"
					},
					{
						"id": "2",
						"title": "收费项目",
						"text": "选择建设交易服务收费类别"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			qfblLong
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

	