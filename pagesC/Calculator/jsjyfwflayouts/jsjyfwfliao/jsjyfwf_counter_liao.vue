<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">省份</view>
					<view class="title m-left" >
						辽宁省
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfLiao_standard">
						辽价函〔2018〕1号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1630)">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标价</view>
				<input type="digit" v-model="needVal.jsjyfwfLiao_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">收取分配</view>
				<input type="digit" v-model="needVal.jsjyfwfLiao_qfbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfLiao_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsjyfwfLiao_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl-ba :showModalName="showModalName" v-on:hideModal="hideModal"></qfbl-ba>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import qfblBa from './jsjyfwfBa_qfbl.vue'
	export default {
		mixins: [counterMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					jsjyfwfLiao_standard: '',
					jsjyfwfLiao_zbj: '',
					jsjyfwfLiao_qfbl: '100',
					jsjyfwfLiao_discount: '100',
					jsjyfwfLiao_graded : '0|1000|3000',
					jsjyfwfLiao_fl : '0.001|0.0008|0.0005',
					type: 'jsjyfwfLiao'
				},
				showModalName: null,
				explain: [
					{
						"id": "4",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			qfblBa
		},
		watch:{
			inval(val){
				this.needVal.jsjyfwfLiao_zbj = val
			}
		}
	}
</script>

	