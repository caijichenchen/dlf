<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江省城市基础设施配套费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csjcssptHei_sfxz">
				<view class="title">省份选择</view>
				<view class="title">{{multiSelector.csjcssptHei_sfxz[pickerIndex.csjcssptHei_sfxz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title" v-model="needVal.csjcssptHei_standard">{{multiSelector.csjcssptHei_standard[pickerIndex.csjcssptHei_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1694,multiSelector.csjcssptHei_standard[pickerIndex.csjcssptHei_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">报建面积</view>
				<input type="text"  v-model="needVal.csjcssptHei_bjmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">报建区域</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptHei_bjqy" :value="pickerIndex.csjcssptHei_bjqy"
				 :range="multiSelector.csjcssptHei_bjqy">
					<view class="picker">
						{{multiSelector.csjcssptHei_bjqy[pickerIndex.csjcssptHei_bjqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="csjcssptHei_discount" v-model="needVal.csjcssptHei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
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
	import datajson from '@/common/json/csjcsspts/csjcsspts-hei.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csjcssptHei_sfxz: '',
					csjcssptHei_standard: '',
					csjcssptHei_bjmj: '',
					csjcssptHei_bjqy: '',
					csjcssptHei_jg: '',
					csjcssptHei_discount: "40",
					type: "csjcssptHei"
				},
				multiSelector: {
					csjcssptHei_sfxz: [],
					csjcssptHei_standard: [],
					csjcssptHei_bjqy: [],
					csjcssptHei_jg: '',
				},
				pickerIndex: {
					csjcssptHei_sfxz: 0,
					csjcssptHei_standard: 0,
					csjcssptHei_bjqy: 0,
				},
				showSelector: {
					csjcssptHei_sfxz: true,
					csjcssptHei_standard: true,
					csjcssptHei_bjqy: true,
					csjcssptHei_jg: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
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

<style>

</style>
