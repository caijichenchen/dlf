<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">江苏招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfSu_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfSu_xzsf" :value="pickerIndex.zbdlfSu_xzsf"
				 :range="multiSelector.zbdlfSu_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfSu_xzsf[pickerIndex.zbdlfSu_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfSu_standard" :value="pickerIndex.zbdlfSu_standard"
				 :range="multiSelector.zbdlfSu_standard">
					<view class="picker">
						{{multiSelector.zbdlfSu_standard[pickerIndex.zbdlfSu_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(241,multiSelector.zbdlfSu_standard[pickerIndex.zbdlfSu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfSu_category" :value="pickerIndex.zbdlfSu_category"
				 :range="multiSelector.zbdlfSu_category">
					<view class="picker">
						{{multiSelector.zbdlfSu_category[pickerIndex.zbdlfSu_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfSu_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.zbdlfSu_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfSu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-su-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-su-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfSuZbxm from "./zbdlfSu_zbxm.vue"
	import datajson from '@/common/json/zbdlf/zbdlf-zhe.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfSu_xzsf: '',
					zbdlfSu_standard: '',
					zbdlfSu_category: '',
					zbdlfSu_graded: '',
					zbdlfSu_fl: '',
					zbdlfSu_gczj: '',
					zbdlfSu_discount: '40',
					type: 'zbdlfSu'
				},
				multiSelector: {
					zbdlfSu_xzsf: [],
					zbdlfSu_standard: [],
					zbdlfSu_graded: '',
					zbdlfSu_category: [],
					zbdlfSu_fl: '',
				},
				showSelector: {
					zbdlfSu_xzsf: true,
					zbdlfSu_standard: true,
					zbdlfSu_graded: false,
					zbdlfSu_category: true,
					zbdlfSu_fl: false,
				},
				pickerIndex: {
					zbdlfSu_xzsf: 0,
					zbdlfSu_standard: 0,
					zbdlfSu_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [{
						"id": "zbdlsu1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlsu2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zbdlfSuZbxm,
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
