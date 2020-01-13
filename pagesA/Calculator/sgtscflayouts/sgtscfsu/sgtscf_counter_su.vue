<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.sgtscfSu1[pickerIndex.sgtscfSu1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu_standard">
				<view class="title">选择标准</view>
					<picker class="select" @change="PickerChange" data-name="sgtscfSu_standard" :value="pickerIndex.sgtscfSu_standard"
					 :range="multiSelector.sgtscfSu_standard">
						<view class="picker">
							{{multiSelector.sgtscfSu_standard[pickerIndex.sgtscfSu_standard]}}
						</view>
					</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1688,multiSelector.sgtscfSu_standard[pickerIndex.sgtscfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu_category">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfSu_category" :value="pickerIndex.sgtscfSu_category"
				 :range="multiSelector.sgtscfSu_category">
					<view class="picker">
						{{multiSelector.sgtscfSu_category[pickerIndex.sgtscfSu_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu_xmdj">
				<view class="title">项目等级</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfSu_xmdj" :value="pickerIndex.sgtscfSu_xmdj"
				 :range="multiSelector.sgtscfSu_xmdj">
					<view class="picker">
						{{multiSelector.sgtscfSu_xmdj[pickerIndex.sgtscfSu_xmdj]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu4 || showSelector.sgtscfSu_dw">
				<view class="title">{{multiSelector.sgtscfSu4}}</view>
				<input type="text" v-model="needVal.sgtscfSu_gcl"></input>
				<uni-tag :text="multiSelector.sgtscfSu_dw" type="defult" v-model="multiSelector.sgtscfSu_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfSu_iskz">
				<view class="title">是否抗震</view>
				<picker class="select" @change="PickerChange" data-name="sgtscfSu_iskz" :value="pickerIndex.sgtscfSu_iskz"
				 :range="multiSelector.sgtscfSu_iskz">
					<view class="picker">
						{{multiSelector.sgtscfSu_iskz[pickerIndex.sgtscfSu_iskz]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input v-model="needVal.sgtscfSu_tzxs" /></input>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="sgtscfSu_tzxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfSu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<tzxs-su :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-su>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/sgtscfs/sgtscfs-su.json'
	import tzxsSu from './sgtscfSu_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					sgtscfSu_standard: '',
					sgtscfSu_category: '',
					sgtscfSu_xmdj: '',
					sgtscfSu_gcl: '',
					sgtscfSu_graded: '',
					sgtscfSu_fl: '',
					sgtscfSu_iskz: '',
					sgtscfSu_kzxs: '',
					sgtscfSu_tzxs: '1',
					sgtscfSu_discount: '100',
					type: 'sgtscfSu'
				},
				multiSelector: {
					sgtscfSu1: [],
					sgtscfSu_standard: [],
					sgtscfSu_category: [],
					sgtscfSu4: '',
					sgtscfSu_dw: '',
					sgtscfSu_xmdj: [],//6
					sgtscfSu_graded: '',
					sgtscfSu_fl: '',
					sgtscfSu_iskz: [],
					sgtscfSu_kzxs: '',
				},
				showSelector: {
					sgtscfSu1: true,
					sgtscfSu_standard: true,
					sgtscfSu_category: true,
					sgtscfSu4: true,
					sgtscfSu_dw: true,
					sgtscfSu_xmdj: true,
					sgtscfSu_graded: false,
					sgtscfSu_fl: false,
					sgtscfSu_iskz: true,
					sgtscfSu_kzxs: false,
				},
				pickerIndex: {
					sgtscfSu1: 0,
					sgtscfSu_standard: 0,
					sgtscfSu_category: 0,
					sgtscfSu_iskz: 0,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [
					{
						"id": "sgsu1",
						"title": "计算类别",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgsu2",
						"title": "项目等级",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgsu3",
						"title": "是否抗震",
						"text": "请选择对应的收费基准"
					},
					{
						"id": "sgsu4",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components: {
			tzxsSu
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
