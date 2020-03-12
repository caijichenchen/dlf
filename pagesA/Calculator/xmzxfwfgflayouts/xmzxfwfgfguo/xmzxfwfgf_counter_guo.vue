<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">项目咨询服务费(光伏发电工程)计算器</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left" >
					NB/T 32027--2016
				</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建安设备费</view>
				<input type="digit" v-model="needVal.xmzxfwfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.xmzxfwfgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					type: "xmzxfwfgfGuo",
					xmzxfwfgfGuo_dzzk: "100",
					xmzxfwfgfGuo_fl: "2.16|1.62|1.07|0.56|0.33|0.18|0.13|0.11",
					xmzxfwfgfGuo_gczj: "",
					xmzxfwfgfGuo_jfe: "5000|10000|20000|40000|80000|170000|270000|360000",
					xmzxfwfgfGuo_jsyj: "NB/T 32027--2016"
				},
				explain: [
					{
						"id": "xmzxguo1",
						"title": "计算依据",
						"text": "中华人民共和国能源行业标准NB/T 32027--2016"
					},
					{
						"id": "xmzxguo2",
						"title": "打折折扣",
						"text": "目前市场行情不同，各地区取值略有不同"
					}
				]
			}
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
