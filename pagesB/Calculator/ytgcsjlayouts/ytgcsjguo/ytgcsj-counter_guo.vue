<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">岩土工程设计收费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">岩土工程概算额</view>
				<input type="digit" v-model="needVal.ytgcsjGuo_gse"/></input>
				<uni-tag text="万元" type="defult" ></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index" :range="ytgcsjGuo_fzcd">
					<view class="picker">
						{{ytgcsjGuo_fzcd[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcsjGuo_fzcd">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.ytgcsjGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.ytgcsjGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fzcd from './ytgcsjGuo_fzcd.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					ytgcsjGuo_gse: '',
					ytgcsjGuo_fzcd: 'I级',
					ytgcsjGuo_sffw: '10|50|100|500|1000|2000',
					ytgcsjGuo_sfjj: '0.64|2.8|5.4|23|43|78',
					ytgcsjGuo_fdfd: '80',
					ytgcsjGuo_dzzk: '50',
					ytgcsjGuo_nums: '',
					type: 'ytgcsjGuo'
				},
				ytgcsjGuo_fzcd:['I级','II级','III级'],
				sfjj:['0.64|2.8|5.4|23|43|78','0.75|3.3|6.3|27|50|92','0.86|3.8|7.2|31|58|106'],
				index: 0,
				showModalName: null,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "6",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "7",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			fzcd
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.ytgcsjGuo_fzcd = this.ytgcsjGuo_fzcd[this.index]
				this.needVal.ytgcsjGuo_sfjj = this.sfjj[this.index]
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
