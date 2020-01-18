<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfQiong_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQiong_xzsf" :value="pickerIndex.zbdlfQiong_xzsf"
				 :range="multiSelector.zbdlfQiong_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfQiong_xzsf[pickerIndex.zbdlfQiong_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQiong_standard" :value="pickerIndex.zbdlfQiong_standard"
				 :range="multiSelector.zbdlfQiong_standard">
					<view class="picker">
						{{multiSelector.zbdlfQiong_standard[pickerIndex.zbdlfQiong_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(241,multiSelector.zbdlfQiong_standard[pickerIndex.zbdlfQiong_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQiong_category" :value="pickerIndex.zbdlfQiong_category"
				 :range="multiSelector.zbdlfQiong_category">
					<view class="picker">
						{{multiSelector.zbdlfQiong_category[pickerIndex.zbdlfQiong_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfQiong_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.zbdlfQiong_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfQiong_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-qiong-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-qiong-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfQiongZbxm from "./zbdlfQiong_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-qiong.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfQiong_xzsf: '',
					zbdlfQiong_standard: '',
					zbdlfQiong_category: '',
					zbdlfQiong_graded: '',
					zbdlfQiong_fl: '',
					zbdlfQiong_gczj: '',
					zbdlfQiong_discount: '40',
					type: 'zbdlfQiong'
				},
				multiSelector: {
					zbdlfQiong_xzsf: [],
					zbdlfQiong_standard: [],
					zbdlfQiong_graded: '',
					zbdlfQiong_category: [],
					zbdlfQiong_fl: '',
				},
				showSelector: {
					zbdlfQiong_xzsf: true,
					zbdlfQiong_standard: true,
					zbdlfQiong_graded: false,
					zbdlfQiong_category: true,
					zbdlfQiong_fl: false,
				},
				pickerIndex: {
					zbdlfQiong_xzsf: 0,
					zbdlfQiong_standard: 0,
					zbdlfQiong_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlqiong1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlqiong2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-qiong.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfQiongZbxm,
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
