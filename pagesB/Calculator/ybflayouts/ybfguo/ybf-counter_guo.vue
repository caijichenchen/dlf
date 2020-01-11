<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">预备费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.ybfGuo1">
				<view class="title">范围</view>
				<view class="title m-left">{{multiSelector.ybfGuo1[pickerIndex.ybfGuo1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo_standard">
				<view class="title">取费标准</view>
				<view class="title" v-model="needVal.ybfGuo_standard">{{multiSelector.ybfGuo_standard[pickerIndex.ybfGuo_standard]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="ybfGuo_standard">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo_category">
				<view class="title">计算分类</view>
				<picker class="select" @change="PickerChange" data-name="ybfGuo_category" :value="pickerIndex.ybfGuo_category"
				 :range="multiSelector.ybfGuo_category">
					<view class="picker">
						{{multiSelector.ybfGuo_category[pickerIndex.ybfGuo_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="ybfGuo_category">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程费用</view>
				<input v-model="needVal.ybfGuo_gcfy" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo4">
				<view class="title">{{multiSelector.ybfGuo4}}</view>
				<input v-model="needVal.ybfGuo_gcjsqtfy" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo5">
				<view class="title">{{multiSelector.ybfGuo5}}</view>
				<input v-model="needVal.ybfGuo_jsqns" /></input>
				<uni-tag text="年" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo6">
				<view class="title">{{multiSelector.ybfGuo6}}</view>
				<input v-model="needVal.ybfGuo_wjszxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ybfGuo7">
				<view class="title">{{multiSelector.ybfGuo7}}</view>
				<input v-model="needVal.ybfGuo_jbybfl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">点击查看</button>
			</view>
			<explain></explain>
			<ybf-category :showModalName="showModalName"  v-on:hideModal="hideModal" ></ybf-category>
		</form>
		
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import ybfCategory from './ybfGuo_category.vue'
	import datajson from '@/common/json/ybfs/ybfs-guo.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					ybfGuo_standard: '',
					ybfGuo_category: '',
					ybfGuo_gcfy: '',
					ybfGuo_gcjsqtfy: '',
					ybfGuo_wjszxs: '0.06',
					ybfGuo_jbybfl: '5',
					type: 'ybfGuo'
				},
				multiSelector: {
					ybfGuo1: [],
					ybfGuo_standard: [],
					ybfGuo_category: [],
					ybfGuo4: '',
					ybfGuo5: '',
					ybfGuo6: '',
					ybfGuo7: '',
				},
				pickerIndex: {
					ybfGuo1: 0,
					ybfGuo_standard: 0,
					ybfGuo_category: 0,
				},
				showSelector: {
					ybfGuo1: true,
					ybfGuo_standard: true,
					ybfGuo_category: true,
					ybfGuo4: true,
					ybfGuo5: true,
					ybfGuo6: true,
					ybfGuo7: true
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "工程建设其他费用",
						"text": "工程建设其他费用的总和,单独计算需要手动输入,一键计算中直接取第二部分工程建设其他费用计算出来的结果"
					},
					{
						"id": "2",
						"title": "计算期年数",
						"text": "以编制初步设计报告的年份为基数，计算至项目建成的年份"
					},
					{
						"id": "3",
						"title": "物价上涨系数",
						"text": "物价上涨系数"
					},
					{
						"id": "4",
						"title": "基本预备费率",
						"text": "基本预备费率5%-8%,预备费费率的取值应按工程具体情况在规定的幅度内确定。"
					}
				]
			}
		},
		components: {
			ybfCategory
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
