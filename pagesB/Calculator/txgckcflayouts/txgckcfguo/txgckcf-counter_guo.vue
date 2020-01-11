<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">通信工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.txgckcfGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="txgckcfGuo_xzxm" :value="pickerIndex.txgckcfGuo_xzxm"
				 :range="multiSelector.txgckcfGuo_xzxm">
					<view class="picker">
						{{multiSelector.txgckcfGuo_xzxm[pickerIndex.txgckcfGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">比例表</view>
				<input v-model="needVal.txgckcfGuo_blb" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="txgckcfGuo_blb">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.txgckcfGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="txgckcfGuo_xzlx" :value="pickerIndex.txgckcfGuo_xzlx"
				 :range="multiSelector.txgckcfGuo_xzlx">
					<view class="picker">
						{{multiSelector.txgckcfGuo_xzlx[pickerIndex.txgckcfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实际工作量</view>
				<input type="text" v-model="needVal.txgckcfGuo_sjgzl" /></input>
				<uni-tag :text="multiSelector.txgckcfGuo2" type="defult" v-model="multiSelector.txgckcfGuo2"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.txgckcfGuo_xmjb">
				<view class="title">项目级别</view>
				<picker class="select" @change="PickerChange" data-name="txgckcfGuo_xmjb" :value="pickerIndex.txgckcfGuo_xmjb"
				 :range="multiSelector.txgckcfGuo_xmjb">
					<view class="picker">
						{{multiSelector.txgckcfGuo_xmjb[pickerIndex.txgckcfGuo_xmjb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="text" v-model="needVal.txgckcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="txgckcfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChanges" :value="index3" :range="txgckcfGuo_qwfjtz">
					<view class="picker">
						{{txgckcfGuo_qwfjtz[index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.txgckcfGuo_gctj" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="txgckcfGuo_gctj">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.txgckcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.txgckcfGuo_yjzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			
			<explain></explain>
			<txgc-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></txgc-blb>
			<txgc-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></txgc-fjtz>
			<gctz-guo :showModalName="showModalName" v-on:hideModal='hideModal' :title="title" :modalName="modalName"></gctz-guo>
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
	import txgcBlb from './txgckcfGuo_blb.vue'
	import txgcFjtz from './txgckcfGuo_fjtz.vue'
	import datajson from '@/common/json/txgcs/txgcs-all.json'
	import gctzGuo from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					txgckcfGuo_xzxm: '',
					txgckcfGuo_blb: '100',
					txgckcfGuo_xzlx: '',
					txgckcfGuo_sjgzl: '',
					txgckcfGuo_xmjb: '',
					txgckcfGuo_jj: '',
					txgckcfGuo_ncz: '',
					txgckcfGuo_fjtz: '1.0',
					txgckcfGuo_qwfjtz: '1',
					txgckcfGuo_gctj: '1.0',
					txgckcfGuo_fdfd: '80',
					txgckcfGuo_yjzk: '90',
					type: 'txgckcfGuo'
				},
				multiSelector: {
					txgckcfGuo_xzxm: [],
					txgckcfGuo2: '',
					txgckcfGuo_xzlx: [],
					txgckcfGuo_xmjb: [],
					txgckcfGuo_jj: '',
					txgckcfGuo_ncz: '',
				},
				showSelector: {
					txgckcfGuo_xzxm: true,
					txgckcfGuo2: true,
					txgckcfGuo_xzlx: true,
					txgckcfGuo_xmjb: true,
					txgckcfGuo_jj: false,
					txgckcfGuo_ncz: false,
				},
				pickerIndex: {
					txgckcfGuo_xzxm: 0,
					txgckcfGuo_xzlx: 0,
					txgckcfGuo_xmjb: 0
				},
				modalData: null,  //查看说明
				index3: 0,
				modalName: 'txgckcfGuo_gctj',
				title: '勘察费',
				txgckcfGuo_qwfjtz: ['1','1.2'],
				showModalName: null,
				datajson:datajson,
				explain: [{
						"id": "1",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "项目级别",
						"text": "请确定好计算的类型"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温(以当地气象站的气象报告为准,≥35℃或者≤-10℃的条件下进行勘察作业时,气温附加调整系数为1.2)"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准:80%~120%"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "各地区取值不同,当地行情决定"
					}
				]
			}
		},
		components: {
			txgcBlb,
			txgcFjtz,
			gctzGuo
		},
		methods:{
			PickerChanges(e) {
				this.index3 = e.detail.value
				this.needVal.dsclsfGuo_qwfjtz = this.txgckcfGuo_qwfjtz[this.index3]
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
