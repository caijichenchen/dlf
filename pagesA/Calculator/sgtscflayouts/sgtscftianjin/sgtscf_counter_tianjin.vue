<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">天津市施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfTianjin1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfTianjin1[pickerIndex.sgtscfTianjin1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfTianjin_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.sgtscfTianjin_standard[pickerIndex.sgtscfTianjin_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(252,multiSelector.sgtscfTianjin_standard[pickerIndex.sgtscfTianjin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfTianjin_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfTianjin_category" :value="pickerIndex.sgtscfTianjin_category"
				 :range="multiSelector.sgtscfTianjin_category">
					<view class="picker">
						{{multiSelector.sgtscfTianjin_category[pickerIndex.sgtscfTianjin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfTianjin_gcgm">
				<view class="title">项目规模</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfTianjin_gcgm" :value="pickerIndex.sgtscfTianjin_gcgm"
				 :range="multiSelector.sgtscfTianjin_gcgm">
					<view class="picker">
						{{multiSelector.sgtscfTianjin_gcgm[pickerIndex.sgtscfTianjin_gcgm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfTianjin_mjorje || showSelector.sgtscfTianjin_units">
				<view class="title">{{multiSelector.sgtscfTianjin_mjorje}}</view>
				<input type="text" v-model="needVal.sgtscfTianjin_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfTianjin_units" type="defult" v-model="multiSelector.sgtscfTianjin_units"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.sgtscfTianjin_fjtz" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfTianjin_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfTianjin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz-tianjin :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz-tianjin>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/sgtscfs/sgtscfs-tianjin.json'
	import fjtzTianjin from './sgtscfTianjin_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfTianjin_standard: '',
					sgtscfTianjin_category: '',
					sgtscfTianjin_gcgm: '',
					sgtscfTianjin_mjorje: '',
					sgtscfTianjin_gcl: '',
					sgtscfTianjin_fl: '',
					sgtscfTianjin_fjtz: '1',
					sgtscfTianjin_discount: '100',
					type: 'sgtscfTianjin'
				},
				multiSelector: {
					sgtscfTianjin1: [],
					sgtscfTianjin_standard: [],
					sgtscfTianjin_category: [],
					sgtscfTianjin_mjorje: '',
					sgtscfTianjin_units: '',
					sgtscfTianjin_gcgm: [],//6
					sgtscfTianjin_fl: '',
					sgtscfTianjin_fjtz: '',
				},
				showSelector: {
					sgtscfTianjin1: true,
					sgtscfTianjin_standard: true,
					sgtscfTianjin_category: true,
					sgtscfTianjin_mjorje: true,
					sgtscfTianjin_units: true,
					sgtscfTianjin_gcgm: true,
					sgtscfTianjin_fl: false,
					sgtscfTianjin_fjtz: false,
				},
				pickerIndex: {
					sgtscfTianjin1: 0,
					sgtscfTianjin_standard: 0,
					sgtscfTianjin_category: 0,
					sgtscfTianjin_gcgm: 0,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgtj1",
						"title": "计算类别",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgtj2",
						"title": "项目规模",
						"text": "大、中、小型项目分类按建设部《工程设计资质标准》（建市[2007]86号）执行"
					},
					{
						"id": "sgtj3",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components: {
			fjtzTianjin
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
