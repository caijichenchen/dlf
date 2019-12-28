<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">长葛市造价咨询费计算器</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfChangge1">
			<view class="title">选择区域</view>
			<view class="title m-left">
				{{multiSelector.zjzxfChangge1[pickerIndex.zjzxfChangge1]}}
			</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChangge_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfChangge_standard" :value="pickerIndex.zjzxfChangge_standard"
			 :range="multiSelector.zjzxfChangge_standard">
				<view class="picker">
					{{multiSelector.zjzxfChangge_standard[pickerIndex.zjzxfChangge_standard]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChangge_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfChangge_category" :value="pickerIndex.zjzxfChangge_category"
			 :range="multiSelector.zjzxfChangge_category">
				<view class="picker">
					{{multiSelector.zjzxfChangge_category[pickerIndex.zjzxfChangge_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfChangge5 ">
			<view class="title">{{multiSelector.zjzxfChangge5}}</view>
			<input v-model="needVal.zjzxfChangge_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfChangge_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-changge.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zjzxfChangge_standard: '',
					zjzxfChangge_graded: '',
					zjzxfChangge_category: '',
					zjzxfChangge_ztz: '',
					zjzxfChangge_fl: '',
					zjzxfChangge_discount: '80',
					type: 'zjzxfChangge'
				},
				multiSelector: {
					zjzxfChangge1: [],
					zjzxfChangge_standard: [],
					zjzxfChangge_graded: [],
					zjzxfChangge_category: [],
					zjzxfChangge5: '',
					zjzxfChangge_fl: '',
				},
				pickerIndex: {
					zjzxfChangge1: 0,
					zjzxfChangge_standard: 0,
					zjzxfChangge_category: 0,
				},
				showSelector: {
					zjzxfChangge1: true,
					zjzxfChangge_standard: true,
					zjzxfChangge_graded: false,
					zjzxfChangge_category: true,
					zjzxfChangge5: true,
					zjzxfChangge_fl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "zjzxcg1",
						"title": "打折折扣",
						"text": "目前长葛市地区折扣为80%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
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
