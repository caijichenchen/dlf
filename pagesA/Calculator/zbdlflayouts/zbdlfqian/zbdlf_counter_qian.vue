<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">贵州招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfQian_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQian_xzsf" :value="pickerIndex.zbdlfQian_xzsf"
				 :range="multiSelector.zbdlfQian_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfQian_xzsf[pickerIndex.zbdlfQian_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQian_standard" :value="pickerIndex.zbdlfQian_standard"
				 :range="multiSelector.zbdlfQian_standard">
					<view class="picker">
						{{multiSelector.zbdlfQian_standard[pickerIndex.zbdlfQian_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(265,multiSelector.zbdlfQian_standard[pickerIndex.zbdlfQian_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfQian_category" :value="pickerIndex.zbdlfQian_category"
				 :range="multiSelector.zbdlfQian_category">
					<view class="picker">
						{{multiSelector.zbdlfQian_category[pickerIndex.zbdlfQian_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfQian_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.zbdlfQian_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfQian_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-qian-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-qian-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfQianZbxm from "./zbdlfQian_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-qian.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfQian_xzsf: '',
					zbdlfQian_standard: '',
					zbdlfQian_category: '',
					zbdlfQian_graded: '',
					zbdlfQian_fl: '',
					zbdlfQian_gczj: '',
					zbdlfQian_discount: '40',
					type: 'zbdlfQian'
				},
				multiSelector: {
					zbdlfQian_xzsf: [],
					zbdlfQian_standard: [],
					zbdlfQian_graded: '',
					zbdlfQian_category: [],
					zbdlfQian_fl: '',
				},
				showSelector: {
					zbdlfQian_xzsf: true,
					zbdlfQian_standard: true,
					zbdlfQian_graded: false,
					zbdlfQian_category: true,
					zbdlfQian_fl: false,
				},
				pickerIndex: {
					zbdlfQian_xzsf: 0,
					zbdlfQian_standard: 0,
					zbdlfQian_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlqian1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlqian2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-qian.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfQianZbxm,
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
