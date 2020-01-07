<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国建设期利息</text>
		</div>
		<view class="cu-form-group">
			<view class="title">范围</view>
				<view class="picker m-left">
					全国
				</view>
		</view>
		<view class="cu-form-group" >
			<view class="title">取费标准</view>
				<view class="picker m-left">
					建标〔2011〕1号
				</view>
		</view>
		<view class="cu-form-group">
			<view class="title">贷款比例</view>
			<input v-model="needVal.tlkcsjsfGuo_fzfz" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
		</view>
		<view class="cu-form-group">
			<view class="title">贷款利率</view>
			<input v-model="needVal.jsqlxGuo_dkll" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showModal" data-target="jsqlxGuo_dkll">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">浮动幅度</view>
			<input v-model="needVal.jsqlxGuo_sf" /></input>
			<uni-tag text="%" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">投资总额</view>
			<input v-model="needVal.jsqlxGuo_gcjsqtfy" /></input>
			<uni-tag text="万元" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">建设期(贷款时长)</view>
			<input v-model="needVal.jsqlxGuo_dksc" /></input>
			<uni-tag text="年" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
		</view>
		<view class="cu-form-group">
			<view class="title">建设期最后一年</view>
			<input v-model="needVal.jsqlxGuo_zhynys" /></input>
			<uni-tag text="月" type="defult"></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
		</view>
		<view class="cu-form-group" >
			<view class="title">还款方式</view>
			<picker class="select" @change="PickerChange1" :value="index0" :range="jsqlxGuo_fkfs">
				<view class="picker">
					{{jsqlxGuo_fkfs[index0]}}
				</view>
			</picker>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
		</view>
		<explain></explain>
		<dkll :showModalName="showModalName" v-on:hideModal="hideModal"></dkll>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import dkll from './jsqlxGuo_dkll.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jsqlxGuo_standard: '建标〔2011〕1号',
					jsqlxGuo_dkbl: '40',
					jsqlxGuo_dkll: '4.75',
					jsqlxGuo_sf: '100',
					jsqlxGuo_gcjsqtfy: '',
					jsqlxGuo_dksc: '',
					jsqlxGuo_zhynys: '',
					jsqlxGuo_fkfs: '等额本息',
					type: 'jsqlxGuo'
				},
				jsqlxGuo_fkfs: ['等额本息','等额本金'],
				index0: 0,
				showModalName: null,
				explain: [
					{
						"id": "2",
						"title": "浮动幅度",
						"text": "贷款利率浮动幅度,如110%,相当于上浮10%"
					},
					{
						"id": "3",
						"title": "投资总额",
						"text": "计算利息的投资总额,一键计算中默认取前三部分总额"
					},
					{
						"id": "4",
						"title": "建设期(贷款时长)",
						"text": "不包含最后一年的整数年份"
					},
					{
						"id": "5",
						"title": "建设期最后一年",
						"text": "最后一年不满一年的具体月数"
					},
					{
						"id": "6",
						"title": "还款方式",
						"text": "等额本息还款：把按揭贷款的本金总额与利息总额相加，然后平均分摊到还款期限的每个月中。作为还款人，每个月还给银行固定金额，但每月还款额中的本金比重逐月递增、利息比重逐月递减。等额本金还款：将本金分摊到每个月内,同时付清上一交易日至本次还款日之间的利息。这种还款方式相对等额本息而言,总的利息支出较低,但是前期支付的本金和利息较多,还款负担逐月递减。"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			dkll
		},
		methods:{
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.jsqlxGuo_fkfs = this.jsqlxGuo_fkfs[this.index0]
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
