<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省城市基础设施配套费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csjcssptJin_sfxz">
				<view class="title">省份选择</view>
				<view class="title">{{multiSelector.csjcssptJin_sfxz[pickerIndex.csjcssptJin_sfxz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title" v-model="needVal.csjcssptJin_standard">{{multiSelector.csjcssptJin_standard[pickerIndex.csjcssptJin_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1622,multiSelector.csjcssptJin_standard[pickerIndex.csjcssptJin_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">征收方式</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJin_zsfs" :value="pickerIndex.csjcssptJin_zsfs"
				 :range="multiSelector.csjcssptJin_zsfs">
					<view class="picker">
						{{multiSelector.csjcssptJin_zsfs[pickerIndex.csjcssptJin_zsfs]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.csjcssptJin4 ||showSelector.csjcssptJin5">
				<view class="title">{{multiSelector.csjcssptJin4}}</view>
				<input type="text"  v-model="needVal.csjcssptJin_bjmj"></input>
				<uni-tag :text="multiSelector.csjcssptJin5" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择类别</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJin_category" :value="pickerIndex.csjcssptJin_category"
				 :range="multiSelector.csjcssptJin_category">
					<view class="picker">
						{{multiSelector.csjcssptJin_category[pickerIndex.csjcssptJin_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">报建区域</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJin_bjqy" :value="pickerIndex.csjcssptJin_bjqy"
				 :range="multiSelector.csjcssptJin_bjqy">
					<view class="picker">
						{{multiSelector.csjcssptJin_bjqy[pickerIndex.csjcssptJin_bjqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择等级</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptJin_graded" :value="pickerIndex.csjcssptJin_graded"
				 :range="multiSelector.csjcssptJin_graded">
					<view class="picker">
						{{multiSelector.csjcssptJin_graded[pickerIndex.csjcssptJin_graded]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="csjcssptJin_discount" v-model="needVal.csjcssptJin_discount" /></input>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/csjcsspts/csjcsspts-jin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csjcssptJin_sfxz: '',
					csjcssptJin_standard: '',
					csjcssptJin_zsfs: '',
					csjcssptJin_bjmj: '',
					csjcssptJin_bjqy: '',
					csjcssptJin_category: '',
					csjcssptJin_graded: '',
					csjcssptJin_fl: '',
					csjcssptJin_discount: "40",
					type: "csjcssptJin"
				},
				multiSelector: {
					csjcssptJin_sfxz: [],
					csjcssptJin_standard: [],
					csjcssptJin_zsfs: [],
					csjcssptJin4: '',
					csjcssptJin5: '',
					csjcssptJin_category: [],
					csjcssptJin_bjqy: [],
					csjcssptJin_graded: [],
					csjcssptJin_fl: '',
				},
				pickerIndex: {
					csjcssptJin_sfxz: 0,
					csjcssptJin_standard: 0,
					csjcssptJin_zsfs: 0,
					csjcssptJin_bjqy: 0,
					csjcssptJin_category: 0,
				},
				showSelector: {
					csjcssptJin_sfxz: true,
					csjcssptJin_standard: true,
					csjcssptJin_zsfs: true,
					csjcssptJin4: true,
					csjcssptJin5: true,
					csjcssptJin_category: true,
					csjcssptJin_bjqy: true,
					csjcssptJin_graded: true,
					csjcssptJin_fl: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "2",
						"title": "报建面积",
						"text": "请确定好报建面积"
					},
					{
						"id": "3",
						"title": "报建区域",
						"text": "请确定报建区域"
					},
					{
						"id": "4",
						"title": "选择等级",
						"text": "Ⅰ级指城市中心地段,Ⅱ级指城市中心区以外的地段,Ⅲ级指城市边缘地段"
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
