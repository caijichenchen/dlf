<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国铁路设计费</text>
		</div>
		<view class="cu-form-group">
			<view class="title">工程类别</view>
			<picker class="select" @change="PickerChanges" :value="index0" :range="tlsjGuo_gclb">
				<view class="picker">
					{{tlsjGuo_gclb[index0]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-if="index0 == 0">
			<view class="title" >正线公里</view>
			<input v-model="needVal.tlsjGuo_zxgl" /></input>
			<uni-tag text="公里" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-if="index0 == 1">
			<view class="title" >计费额</view>
			<input v-model="needVal.tlsjGuo_zxgl" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-if="index0 == 0">
			<view class="title">细分类型</view>
			<picker class="select" @change="PickerChangess" :value="index1" :range="tlsjGuo_xflx">
				<view class="picker">
					{{tlsjGuo_xflx[index1]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group" v-if="index0 == 0">
			<view class="title">复杂分值</view>
			<input v-model="needVal.tlsjGuo_fzfz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlsjGuo_fzfz">点击查看</button>
		</view>
		<!-- <view class="cu-form-group">
			<view class="title">基价系数</view>
			<input v-model="needVal.tlsjGuo_jjxs" /></input>
		</view> -->
		<view class="cu-form-group">
			<view class="title">设计阶段</view>
			<picker class="select" @change="PickerChangesss" :value="index2" :range="tlsjGuo_sjjd">
				<view class="picker">
					{{tlsjGuo_sjjd[index2]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<view class="cu-form-group" >
			<view class="title">附加调整</view>
			<input v-model="needVal.tlsjGuo_fjtz" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="tlsjGuo_fjtz">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.tlsjGuo_dzzk" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">点击查看</button>
		</view>
		<explain></explain>
		<fjtz :showModalName="showModalName"  v-on:hideModal="hideModal" :index="index0"></fjtz>
		<fzfz :showModalName="showModalName"  v-on:hideModal="hideModal"></fzfz>
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
	import fjtz from './tlsjGuo_fjtz.vue'
	import fzfz from './tlsjGuo_fzfz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					tlsjGuo_gclb: '铁路的线路、电气化和通信信号工程',
					tlsjGuo_zxgl: '',
					tlsjGuo_xflx: '新建单线非电气化铁路工程',
					tlsjGuo_fzfz: '4',
					tlsjGuo_jjxs: '0.8',
					tlsjGuo_sjjd: '初步设计',
					tlsjGuo_fjtz: '1.0',
					tlsjGuo_dzzk: '50',
					type:'tlsjGuo'
				},
				showModalName: null,
				tlsjGuo_gclb:['铁路的线路、电气化和通信信号工程','铁路枢纽、特大桥、长隧道工程'],
				tlsjGuo_xflx: ['新建单线非电气化铁路工程','单线铁路电气化工程','单线铁路通信信号工程','新建非电气化双线铁路','非电气化铁路增建第二线','非电气化铁路技术改造','新建双线铁路电气化','增建二线电气化','新建双线铁路电气化'],
				tlsjGuo_sjjd:['初步设计','施工图设计'],
				index0: 0,
				index1: 0,
				index2: 0,
				explain: [
					{
						"id": "1",
						"title": "工程类别",
						"text": "不同工程类别,计算方法不同"
					},
					{
						"id": "2",
						"title": "细分类型",
						"text": "不同类别计算基价不同"
					},
					{
						"id": "3",
						"title": "设计阶段",
						"text": "不同阶段基价不同"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			fjtz,
			fzfz
		},
		methods:{
			PickerChanges(e){
				this.index0 = e.detail.value
				this.needVal.tlsjGuo_gclb = this.tlsjGuo_gclb[this.index0]
			},
			PickerChangess(e){
				this.index1 = e.detail.value
				this.needVal.tlsjGuo_xflx = this.tlsjGuo_xflx[this.index1]
			},
			PickerChangesss(e){
				this.index2 = e.detail.value
				this.needVal.tlsjGuo_sjjd = this.tlsjGuo_sjjd[this.index2]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>
</style>
