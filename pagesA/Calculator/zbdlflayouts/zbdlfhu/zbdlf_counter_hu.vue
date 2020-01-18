<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfHu_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfHu_xzsf" :value="pickerIndex.zbdlfHu_xzsf"
				 :range="multiSelector.zbdlfHu_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfHu_xzsf[pickerIndex.zbdlfHu_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfHu_standard" :value="pickerIndex.zbdlfHu_standard"
				 :range="multiSelector.zbdlfHu_standard">
					<view class="picker">
						{{multiSelector.zbdlfHu_standard[pickerIndex.zbdlfHu_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(34,multiSelector.zbdlfHu_standard[pickerIndex.zbdlfHu_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfHu_category" :value="pickerIndex.zbdlfHu_category"
				 :range="multiSelector.zbdlfHu_category">
					<view class="picker">
						{{multiSelector.zbdlfHu_category[pickerIndex.zbdlfHu_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfHu_category">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zbdlfHu4">
				<view class="title">{{multiSelector.zbdlfHu4}}</view>
				<input type="text"  v-model="needVal.zbdlfHu_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfHu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-hu-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-hu-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfHuZbxm from "./zbdlfHu_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-hu.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfHu_xzsf: '',
					zbdlfHu_standard: '',
					zbdlfHu_category: '',
					zbdlfHu_graded: '',
					zbdlfHu_fl: '',
					zbdlfHu_gczj: '',
					zbdlfHu_discount: '40',
					type: 'zbdlfHu'
				},
				multiSelector: {
					zbdlfHu_xzsf: [],
					zbdlfHu_standard: [],
					zbdlfHu_category: [],
					zbdlfHu4: '',
					zbdlfHu_graded: '',
					zbdlfHu_fl: '',
				},
				showSelector: {
					zbdlfHu_xzsf: true,
					zbdlfHu_standard: true,
					zbdlfHu_category: true,
					zbdlfHu4: true,
					zbdlfHu_graded: false,
					zbdlfHu_fl: false,
				},
				pickerIndex: {
					zbdlfHu_xzsf: 0,
					zbdlfHu_standard: 0,
					zbdlfHu_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlhu1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlhu2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-hu.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfHuZbxm,
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
