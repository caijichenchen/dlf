<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省城市基础设施配套费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csjcssptJi_sfxz">
				<view class="title">省份选择</view>
				<view class="title">{{multiSelector.csjcssptJi_sfxz[pickerIndex.csjcssptJi_sfxz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJi_standard" :value="pickerIndex.csjcssptJi_standard"
				 :range="multiSelector.csjcssptJi_standard">
					<view class="picker">
						{{multiSelector.csjcssptJi_standard[pickerIndex.csjcssptJi_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1598,multiSelector.csjcssptJi_standard[pickerIndex.csjcssptJi_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">报建面积</view>
				<input type="digit" v-model="needVal.csjcssptJi_bjmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">报建区域</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJi_bjqy" :value="pickerIndex.csjcssptJi_bjqy"
				 :range="multiSelector.csjcssptJi_bjqy">
					<view class="picker">
						{{multiSelector.csjcssptJi_bjqy[pickerIndex.csjcssptJi_bjqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.csjcssptJi_discount" /></input>
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
	// import datajson from '@/common/json/csjcsspts/csjcsspts-ji.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/csjcsspts/csjcsspts-ji.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					csjcssptJi_sfxz: '',
					csjcssptJi_standard: '',
					csjcssptJi_bjmj: '',
					csjcssptJi_bjqy: '',
					csjcssptJi_jg: '',
					csjcssptJi_discount: "40",
					type: "csjcssptJi"
				},
				multiSelector: {
					csjcssptJi_sfxz: [],
					csjcssptJi_standard: [],
					csjcssptJi_bjqy: [],
					csjcssptJi_jg: '',
				},
				pickerIndex: {
					csjcssptJi_sfxz: 0,
					csjcssptJi_standard: 0,
					csjcssptJi_bjqy: 0,
				},
				showSelector: {
					csjcssptJi_sfxz: true,
					csjcssptJi_standard: true,
					csjcssptJi_bjqy: true,
					csjcssptJi_jg: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
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
