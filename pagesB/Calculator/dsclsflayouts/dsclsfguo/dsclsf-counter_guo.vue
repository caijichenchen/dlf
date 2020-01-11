<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">洞室测量收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dsclsfGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="dsclsfGuo_xzlx" :value="pickerIndex.dsclsfGuo_xzlx"
				 :range="multiSelector.dsclsfGuo_xzlx">
					<view class="picker">
						{{multiSelector.dsclsfGuo_xzlx[pickerIndex.dsclsfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dsclsfGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.dsclsfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.dsclsfGuo_swgzldw" type="defult" v-model="needVal.dsclsfGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title" >复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="indexfzcd"
				 :range="dsclsfGuo_fzcd">
					<view class="picker">
						{{dsclsfGuo_fzcd[indexfzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="dsclsfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input v-model="needVal.dsclsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index0"
				 :range="dsclsfGuo_qwfjtz">
					<view class="picker">
						{{dsclsfGuo_qwfjtz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input v-model="needVal.dsclsfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dsclsfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input v-model="needVal.dsclsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.dsclsfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<explain></explain>
		</form>
		<tzxs-guo :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-guo>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/dscls.json'
	import tzxsGuo from './dsclsfGuo_fzcd.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dsclsfGuo_xzlx: '',
					dsclsfGuo_swgzl: '',
					dsclsfGuo_swgzldw: '',
					dsclsfGuo_sfjj: '',
					dsclsfGuo_fzcd: '简单',
					dsclsfGuo_fjtz: '1.0',
					dsclsfGuo_qwfjtz: '1',
					dsclsfGuo_gctz: '1.0',
					dsclsfGuo_fdfd: '80',
					dsclsfGuo_yhzk: '90',
					dsclsfGuo_nums: '',
					type: 'dsclsfGuo'
				},
				multiSelector: {
					dsclsfGuo_xzlx: [],
					dsclsfGuo_swgzldw: '',
					dsclsfGuo_sfjj: '',
				},
				pickerIndex: {
					dsclsfGuo_xzlx: 0,
				},
				showSelector: {
					dsclsfGuo_xzlx: true,
					dsclsfGuo_swgzldw: true,
					dsclsfGuo_sfjj: false,
				},
				title: '洞室测量费',
				modalName: 'dsclsfGuo_gctz',
				dsclsfGuo_fzcd: ['简单','中等','复杂'],
				dsclsfGuo_qwfjtz: ['1','1.2'],
				index0: 0,
				indexfzcd: 0,
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "选择比例",
						"text": "请确定好比例标准"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			tzxsGuo,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.indexfzcd = e.detail.value
				this.needVal.dsclsfGuo_fzcd = this.dsclsfGuo_fzcd[this.indexfzcd]
			},
			PickerChangess(e) {
				this.index0 = e.detail.value
				this.needVal.dsclsfGuo_qwfjtz = this.dsclsfGuo_qwfjtz[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
