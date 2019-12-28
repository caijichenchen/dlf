<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">省份</view>
				<view class="title m-left">
					重庆市
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="title">
					渝价〔2004〕737号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1548)">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChanges" :value="index" :range="fljcfBa_sfxm">
					<view class="picker">
						{{fljcfBa_sfxm[index]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" v-model="needVal.fljcfBa_gclmc">工程量</view>
				<input v-model="needVal.fljcfBa_gcl" /></input>
				<uni-tag text="套" type="defult" v-model="needVal.fljcfBa_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfBa_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
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
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfBa_standard: '渝价〔2004〕737号',
					fljcfBa_sfxm: '建(构)筑物防雷设施检测',
					fljcfBa_gclmc: '',
					fljcfBa_gcl: '',
					fljcfBa_dw: '',
					fljcfBa_jj: 45,
					fljcfBa_discount: '50',
					type: 'fljcfBa'
				},
				showModalName: null,
				modalData: null,
				fljcfBa_sfxm: ['建(构)筑物防雷设施检测','已建成的建(构)筑物防雷装置每年进行的检测'],
				index:0,
				explain: [
					{
						"id": "fljcchuan1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "fljcchuan3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			PickerChanges(e){
				this.index =e.detail.value
				this.needVal.fljcfBa_sfxm = this.fljcfBa_sfxm[this.index]
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
