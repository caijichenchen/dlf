<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfGuo_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGuo_xzsf" :value="pickerIndex.zbdlfGuo_xzsf"
				 :range="multiSelector.zbdlfGuo_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfGuo_xzsf[pickerIndex.zbdlfGuo_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGuo_standard" :value="pickerIndex.zbdlfGuo_standard"
				 :range="multiSelector.zbdlfGuo_standard">
					<view class="picker">
						{{multiSelector.zbdlfGuo_standard[pickerIndex.zbdlfGuo_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(34,multiSelector.zbdlfGuo_standard[pickerIndex.zbdlfGuo_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGuo_category" :value="pickerIndex.zbdlfGuo_category"
				 :range="multiSelector.zbdlfGuo_category">
					<view class="picker">
						{{multiSelector.zbdlfGuo_category[pickerIndex.zbdlfGuo_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfGuo_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.zbdlfGuo_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zbdlfGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-guo-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-guo-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfGuoZbxm from "./zbdlfGuo_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-guo.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfGuo_xzsf: '',
					zbdlfGuo_standard: '',
					zbdlfGuo_category: '',
					zbdlfGuo_graded: '',
					zbdlfGuo_fl: '',
					zbdlfGuo_gczj: '',
					zbdlfGuo_discount: '40',
					type: 'zbdlfGuo'
				},
				multiSelector: {
					zbdlfGuo_xzsf: [],
					zbdlfGuo_standard: [],
					zbdlfGuo_graded: '',
					zbdlfGuo_category: [],
					zbdlfGuo_fl: '',
				},
				showSelector: {
					zbdlfGuo_xzsf: true,
					zbdlfGuo_standard: true,
					zbdlfGuo_graded: false,
					zbdlfGuo_category: true,
					zbdlfGuo_fl: false,
				},
				pickerIndex: {
					zbdlfGuo_xzsf: 0,
					zbdlfGuo_standard: 0,
					zbdlfGuo_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlguo1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlguo2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-guo.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfGuoZbxm,
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
