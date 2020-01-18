<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖北省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfE1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfE1[pickerIndex.sgtscfE1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfE_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfE_standard">
						{{multiSelector.sgtscfE_standard[pickerIndex.sgtscfE_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(120,multiSelector.sgtscfE_standard[pickerIndex.sgtscfE_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfE_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfE_category" :value="pickerIndex.sgtscfE_category"
				 :range="multiSelector.sgtscfE_category">
					<view class="picker">
						{{multiSelector.sgtscfE_category[pickerIndex.sgtscfE_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfE_gcgm">
				<view class="title">项目规模</view>
				<picker class="select" @change="PickerChange" data-index='sgtscfE_gcgm' data-name="sgtscfE_gcgm" :value="pickerIndex.sgtscfE_gcgm"
				 :range="multiSelector.sgtscfE_gcgm">
					<view class="picker">
						{{multiSelector.sgtscfE_gcgm[pickerIndex.sgtscfE_gcgm]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfE_mjorje || showSelector.sgtscfE_units">
				<view class="title">{{multiSelector.sgtscfE_mjorje}}</view>
				<input type="text" v-model="needVal.sgtscfE_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfE_units" type="defult" v-model="multiSelector.sgtscfE_units"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input v-model="needVal.sgtscfE_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfE_tzxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfE_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<tzxs-e :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-e>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/sgtscfs/sgtscfs-e.json'
	import tzxsE from './sgtscfE_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfE_standard: '',
					sgtscfE_category: '',
					sgtscfE_gcgm: '',
					sgtscfE_mjorje: '',
					sgtscfE_gcl: '',
					sgtscfE_graded: '',
					sgtscfE_fl: '',
					sgtscfE_tzxs: '1',
					sgtscfE_discount: '100',
					type: 'sgtscfE'
				},
				multiSelector: {
					sgtscfE1: [],
					sgtscfE_standard: [],
					sgtscfE_category: [],
					sgtscfE_mjorje: '',
					sgtscfE_units: '',
					sgtscfE_graded: '',
					sgtscfE_gcgm: [],//7
					sgtscfE_fl: '',
				},
				showSelector: {
					sgtscfE1: true,
					sgtscfE_standard: true,
					sgtscfE_category: true,
					sgtscfE_mjorje: true,
					sgtscfE_units: true,
					sgtscfE_graded: false,
					sgtscfE_gcgm: true,
					sgtscfE_fl: false,
				},
				pickerIndex: {
					sgtscfE1: 0,
					sgtscfE_standard: 0,
					sgtscfE_category: 0,
					sgtscfE_gcgm: 0,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgte1",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgte2",
						"title": "项目规模",
						"text": "大、中、小型项目分类按建设部《工程设计资质标准》（建市[2007]86号）执行"
					},
					{
						"id": "sgte3",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/sgtscfs/sgtscfs-e.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			tzxsE
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
