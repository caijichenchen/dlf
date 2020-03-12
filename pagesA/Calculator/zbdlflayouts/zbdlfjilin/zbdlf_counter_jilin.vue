<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">吉林招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfJilin_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJilin_xzsf" :value="pickerIndex.zbdlfJilin_xzsf"
				 :range="multiSelector.zbdlfJilin_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfJilin_xzsf[pickerIndex.zbdlfJilin_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJilin_standard" :value="pickerIndex.zbdlfJilin_standard"
				 :range="multiSelector.zbdlfJilin_standard">
					<view class="picker">
						{{multiSelector.zbdlfJilin_standard[pickerIndex.zbdlfJilin_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1636,multiSelector.zbdlfJilin_standard[pickerIndex.zbdlfJilin_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfJilin_category" :value="pickerIndex.zbdlfJilin_category"
				 :range="multiSelector.zbdlfJilin_category">
					<view class="picker">
						{{multiSelector.zbdlfJilin_category[pickerIndex.zbdlfJilin_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfJilin_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.zbdlfJilin_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zbdlfJilin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-jilin-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-jilin-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfJilinZbxm from "./zbdlfjilin_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-jilin.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfJilin_xzsf: '',
					zbdlfJilin_standard: '',
					zbdlfJilin_category: '',
					zbdlfJilin_graded: '',
					zbdlfJilin_fl: '',
					zbdlfJilin_gczj: '',
					zbdlfJilin_discount: '40',
					type: 'zbdlfJilin'
				},
				multiSelector: {
					zbdlfJilin_xzsf: [],
					zbdlfJilin_standard: [],
					zbdlfJilin_graded: '',
					zbdlfJilin_category: [],
					zbdlfJilin_fl: '',
				},
				showSelector: {
					zbdlfJilin_xzsf: true,
					zbdlfJilin_standard: true,
					zbdlfJilin_graded: false,
					zbdlfJilin_category: true,
					zbdlfJilin_fl: false,
				},
				pickerIndex: {
					zbdlfJilin_xzsf: 0,
					zbdlfJilin_standard: 0,
					zbdlfJilin_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdljilin1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdljilin2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zbdlfJilinZbxm,
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-jilin.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
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
