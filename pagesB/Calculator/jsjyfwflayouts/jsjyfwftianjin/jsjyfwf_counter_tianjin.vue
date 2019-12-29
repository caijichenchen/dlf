<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">天津市建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">省份</view>
					<view class="title m-left" >
						天津市
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfTianjin_standard">
						工程建设交易服务收费标准2017
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1572)">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标价</view>
				<input type="text" v-model="needVal.jsjyfwfTianjin_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">收取分配</view>
				<input type="text" v-model="needVal.jsjyfwfTianjin_qfbl"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfTianjin_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsjyfwfTianjin_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl-ba :showModalName="showModalName" v-on:hideModal="hideModal"></qfbl-ba>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import qfblBa from './jsjyfwfBa_qfbl.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jsjyfwfTianjin_standard: '',
					jsjyfwfTianjin_zbj: '',
					jsjyfwfTianjin_qfbl: '100',
					jsjyfwfTianjin_discount: '100',
					jsjyfwfTianjin_graded : '0|100|500|1000|3000|5000|8000|10000',
					jsjyfwfTianjin_fl : '400|1000|3000|7000|15000|25000|35000|50000',
					type: 'jsjyfwfTianjin'
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
			uniTag,
			explain,
			qfblBa
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

	