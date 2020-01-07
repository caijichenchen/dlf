<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">铁路勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">计算依据</view>
					<view class="title m-left">
						{{tlkcfGuo_jsyj[index0]}}
					</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange2"  :value="index1"
				 :range="tlkcfGuo_xzxm">
					<view class="picker">
						{{tlkcfGuo_xzxm[index1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.tlkcfGuo_swgzl" /></input>
				<uni-tag text="正线公里" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂分值</view>
				<input v-model="needVal.tlkcfGuo_fzfz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="tlkcfGuo_fzfz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.tlkcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="tlkcfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChange3"  :value="index3"
				 :range="tlkcfGuo_qwfjtz">
					<view class="picker">
						{{tlkcfGuo_qwfjtz[index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.tlkcfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="tlkcfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.tlkcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.tlkcfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
		<fzfz :showModalName="showModalName" v-on:hideModal="hideModal"></fzfz>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/tlkcsjsfs/tlkcsjsfs-all.json'
	import gctz from '@/common/base/gctz.vue'
	import fjtz from './tlkcfGuo_fjtz.vue'
	import fzfz from './tlkcfGuo_fzfz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					tlkcfGuo_jsyj: '计价格[2002]10号',
					tlkcfGuo_xzxm: '初测',
					tlkcfGuo_swgzl: '',
					tlkcfGuo_fzfz: '4',
					tlkcfGuo_fjtz: '1.0',
					tlkcfGuo_qwfjtz: '1.0',
					tlkcfGuo_gctz: '1.0',
					tlkcfGuo_fdfd: '80',
					tlkcfGuo_yhzk: '90',
					type: 'tlkcfGuo'
				},
				index0: 0,
				index1: 0,
				index3: 0,
				title: '铁路勘察费',
				modalName:'tlkcfGuo_gctz',
				tlkcfGuo_jsyj: ['计价格[2002]10号'],
				tlkcfGuo_xzxm: ['初测','定测','一次勘察'],
				tlkcfGuo_qwfjtz: ['1','1.2'],
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "3",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "4",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			gctz,
			fjtz,
			fzfz
		},
		methods:{
			PickerChange2(e) {
				this.index1 = e.detail.value
				this.needVal.tlkcfGuo_xzxm = this.tlkcfGuo_xzxm[this.index1]
			},
			PickerChange3(e) {
				this.index3 = e.detail.value
				this.needVal.tlkcfGuo_qwfjtz = this.tlkcfGuo_qwfjtz[this.index3]
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
