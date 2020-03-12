<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfZhe_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfZhe_xzsf" :value="pickerIndex.zbdlfZhe_xzsf"
				 :range="multiSelector.zbdlfZhe_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfZhe_xzsf[pickerIndex.zbdlfZhe_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfZhe_standard" :value="pickerIndex.zbdlfZhe_standard"
				 :range="multiSelector.zbdlfZhe_standard">
					<view class="picker">
						{{multiSelector.zbdlfZhe_standard[pickerIndex.zbdlfZhe_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(34,multiSelector.zbdlfZhe_standard[pickerIndex.zbdlfZhe_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfZhe_category" :value="pickerIndex.zbdlfZhe_category"
				 :range="multiSelector.zbdlfZhe_category">
					<view class="picker">
						{{multiSelector.zbdlfZhe_category[pickerIndex.zbdlfZhe_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfZhe_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">中标价</view>
				<input type="digit" v-model="needVal.zbdlfZhe_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zbdlfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-zhe-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-zhe-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfZheZbxm from "./zbdlfZhe_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-zhe.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfZhe_xzsf: '',
					zbdlfZhe_standard: '',
					zbdlfZhe_category: '',
					zbdlfZhe_graded: '',
					zbdlfZhe_fl: '',
					zbdlfZhe_gczj: '',
					zbdlfZhe_discount: '40',
					type: 'zbdlfZhe'
				},
				multiSelector: {
					zbdlfZhe_xzsf: [],
					zbdlfZhe_standard: [],
					zbdlfZhe_graded: '',
					zbdlfZhe_category: [],
					zbdlfZhe_fl: '',
				},
				showSelector: {
					zbdlfZhe_xzsf: true,
					zbdlfZhe_standard: true,
					zbdlfZhe_graded: false,
					zbdlfZhe_category: true,
					zbdlfZhe_fl: false,
				},
				pickerIndex: {
					zbdlfZhe_xzsf: 0,
					zbdlfZhe_standard: 0,
					zbdlfZhe_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlzhe1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlzhe2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-zhe.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfZheZbxm,
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
