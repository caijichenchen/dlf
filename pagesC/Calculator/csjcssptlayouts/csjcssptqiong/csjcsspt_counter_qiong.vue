<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省城市基础设施配套费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csjcssptQiong_sfxz">
				<view class="title">省份选择</view>
				<view class="title">{{multiSelector.csjcssptQiong_sfxz[pickerIndex.csjcssptQiong_sfxz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title" v-model="needVal.csjcssptQiong_jsyj">{{multiSelector.csjcssptQiong_jsyj[pickerIndex.csjcssptQiong_jsyj]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">报建面积</view>
				<input type="text"  v-model="needVal.csjcssptQiong_bjmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">报建区域</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptQiong_bjqy" :value="pickerIndex.csjcssptQiong_bjqy"
				 :range="multiSelector.csjcssptQiong_bjqy">
					<view class="picker">
						{{multiSelector.csjcssptQiong_bjqy[pickerIndex.csjcssptQiong_bjqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="csjcssptQiong_yhzk" v-model="needVal.csjcssptQiong_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
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
	import datajson from '@/common/json/csjcsspts/csjcsspts-qiong.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csjcssptQiong_sfxz: '',
					csjcssptQiong_jsyj: '',
					csjcssptQiong_bjmj: '',
					csjcssptQiong_bjqy: '',
					csjcssptQiong_jg: '',
					csjcssptQiong_yhzk: "40",
					csjcssptQiong_nums: '',
					type: "csjcssptQiong"
				},
				multiSelector: {
					csjcssptQiong_sfxz: [],
					csjcssptQiong_jsyj: [],
					csjcssptQiong_bjqy: [],
					csjcssptQiong_jg: '',
				},
				pickerIndex: {
					csjcssptQiong_sfxz: 0,
					csjcssptQiong_jsyj: 0,
					csjcssptQiong_bjqy: 0,
				},
				showSelector: {
					csjcssptQiong_sfxz: true,
					csjcssptQiong_jsyj: true,
					csjcssptQiong_bjqy: true,
					csjcssptQiong_jg: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "3",
						"title": "计算依据",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "3",
						"title": "报建面积",
						"text": "请确定好报建面积"
					},
					{
						"id": "4",
						"title": "报建区域",
						"text": "请确定报建区域"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
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

<style>

</style>
