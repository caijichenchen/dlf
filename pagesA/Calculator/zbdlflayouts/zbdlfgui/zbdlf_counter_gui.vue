<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfGui_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGui_xzsf" :value="pickerIndex.zbdlfGui_xzsf"
				 :range="multiSelector.zbdlfGui_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfGui_xzsf[pickerIndex.zbdlfGui_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGui_standard" :value="pickerIndex.zbdlfGui_standard"
				 :range="multiSelector.zbdlfGui_standard">
					<view class="picker">
						{{multiSelector.zbdlfGui_standard[pickerIndex.zbdlfGui_standard]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1924,multiSelector.zbdlfGui_standard[pickerIndex.zbdlfGui_standard])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfGui_category" :value="pickerIndex.zbdlfGui_category"
				 :range="multiSelector.zbdlfGui_category">
					<view class="picker">
						{{multiSelector.zbdlfGui_category[pickerIndex.zbdlfGui_category]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="zbdlfGui_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="text"  v-model="needVal.zbdlfGui_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfGui_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-gui-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-gui-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfGuiZbxm from "./zbdlfGui_zbxm.vue"
	// import datajson from '@/common/json/zbdlf/zbdlf-gui.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfGui_xzsf: '',
					zbdlfGui_standard: '',
					zbdlfGui_category: '',
					zbdlfGui_graded: '',
					zbdlfGui_fl: '',
					zbdlfGui_gczj: '',
					zbdlfGui_discount: '40',
					type: 'zbdlfGui'
				},
				multiSelector: {
					zbdlfGui_xzsf: [],
					zbdlfGui_standard: [],
					zbdlfGui_graded: '',
					zbdlfGui_category: [],
					zbdlfGui_fl: '',
				},
				showSelector: {
					zbdlfGui_xzsf: true,
					zbdlfGui_standard: true,
					zbdlfGui_graded: false,
					zbdlfGui_category: true,
					zbdlfGui_fl: false,
				},
				pickerIndex: {
					zbdlfGui_xzsf: 0,
					zbdlfGui_standard: 0,
					zbdlfGui_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:'',
				explain: [{
						"id": "zbdlgui1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "zbdlgui2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/zbdlf/zbdlf-gui.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			zbdlfGuiZbxm,
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
