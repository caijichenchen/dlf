<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">株洲建设项目报建费计算器</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsxmbjfZhuzhou1">
				<view class="title">选择省份</view>
					<view class="title m-left">
						{{multiSelector.jsxmbjfZhuzhou1[pickerIndex.jsxmbjfZhuzhou1]}}
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="title m-left">
						{{multiSelector.jsxmbjfZhuzhou_standard[pickerIndex.jsxmbjfZhuzhou_standard]}}
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算项目</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmbjfZhuzhou_category" :value="pickerIndex.jsxmbjfZhuzhou_category"
				 :range="multiSelector.jsxmbjfZhuzhou_category">
					<view class="picker">
						{{multiSelector.jsxmbjfZhuzhou_category[pickerIndex.jsxmbjfZhuzhou_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">报建面积</view>
				<input type="text"  v-model="needVal.jsxmbjfZhuzhou_bjmj"></input>
				<uni-tag text="m2" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.jsxmbjfZhuzhou_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
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
	import datajson from '@/common/json/jsxmbjfs/jsxmbjfs-zhuzhou.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jsxmbjfZhuzhou_standard: '',
					jsxmbjfZhuzhou_category: '',
					jsxmbjfZhuzhou_bl: '',
					jsxmbjfZhuzhou_fl: '',
					jsxmbjfZhuzhou_bjmj: '',
					jsxmbjfZhuzhou_discount: '100',
					type: 'jsxmbjfZhuzhou'
				},
				multiSelector: {
					jsxmbjfZhuzhou1: [],
					jsxmbjfZhuzhou_standard: [],
					jsxmbjfZhuzhou_category: [],
					jsxmbjfZhuzhou_bl: '',
					jsxmbjfZhuzhou_fl: ''
				},
				showSelector: {
					jsxmbjfZhuzhou1: true,
					jsxmbjfZhuzhou_standard: true,
					jsxmbjfZhuzhou_category: true,
					jsxmbjfZhuzhou_bl: false,
					jsxmbjfZhuzhou_fl: false,
				},
				pickerIndex: {
					jsxmbjfZhuzhou1: 0,
					jsxmbjfZhuzhou_standard: 0,
					jsxmbjfZhuzhou_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
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
