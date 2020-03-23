<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖北省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">省份</view>
					<view class="title m-left" >
						湖北省
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfE_standard">
						鄂价工服〔2017〕61号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1692)">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">收费项目</view>
				<picker class="select" @change="pickerChoose" data-arr="jsjyfwfE_category" data-index="index0" :value="index0" :range="jsjyfwfE_category">
					<view class="picker" >
						{{jsjyfwfE_category[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标价</view>
				<input type="digit" v-model="needVal.jsjyfwfE_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jsjyfwfE_fjtz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfE_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jsjyfwfE_discount"></input>
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
					jsjyfwfE_standard: '',
					jsjyfwfE_category: '公共资源交易平台信息服务收费',
					jsjyfwfE_zbj: '',
					jsjyfwfE_fjtz: '1',
					jsjyfwfE_discount: '100',
					jsjyfwfJi_graded : '0|100|1000|5000|10000',
					jsjyfwfJi_fl : '0.0007|0.00056|0.00042|0.00028|0.00014',
					type: 'jsjyfwfE'
				},
				showModalName: null,
				jsjyfwfE_category: ['公共资源交易平台信息服务收费'],
				index0:0,
				explain: [
					{
						"id": "2",
						"title": "收费项目",
						"text": "选择建设交易服务收费类别"
					},
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
				this.needVal.jsjyfwfE_zbj = val
			}
		}
	}
</script>

	