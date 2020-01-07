<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">建设管理费(光伏电工程)计算器</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker" >
					NB/T 32027--2016
				</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">建安设备费</view>
				<input type="text" v-model="needVal.gcjsglgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.gcjsglgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					gcjsglgfGuo_dzzk: '40',
					gcjsglgfGuo_gczj: '',
					gcjsglgfGuo_jsyj: 'NB/T 32027--2016',
					type: 'gcjsglgfGuo',
					gcjsglgfGuo_jfe: '5000|10000|20000|40000|80000|170000|270000|360000',
					gcjsglgfGuo_fl: '3.58|2.32|1.53|0.94|0.68|0.43|0.35|0.32'
				},
				showModalName: null,
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>