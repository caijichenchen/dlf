<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">项目技术经济评审费(光伏发电工程)计算器</text>
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
				<input type="digit" v-model="needVal.xmjsjjpsfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.xmjsjjpsfgfGuo_dzzk" /></input>
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
		props:{
			index:{
				type:String,
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
					type: "xmjsjjpsfgfGuo",
					xmjsjjpsfgfGuo_dzzk: "100",
					xmjsjjpsfgfGuo_fl: "1.72|1.18|0.75|0.42|0.26|0.16|0.12|0.10",
					xmjsjjpsfgfGuo_gczj: "",
					xmjsjjpsfgfGuo_jfe: "5000|10000|20000|40000|80000|170000|270000|360000",
					xmjsjjpsfgfGuo_jsyj: "NB/T 32027--2016"
				},
				showModalName: null,
				explain: [
					{
						"id": "xmjsguo1",
						"title": "计算依据",
						"text": "中华人民共和国能源行业标准 NB/T 32027--2016"
					},
					{
						"id": "xmjsguo2",
						"title": "打折折扣",
						"text": "目前市场行情不同，各地区取值略有不同"
					}
				]
			}
		},
		watch:{
			inval(val){
				this.needVal.xmjsjjpsfgfGuo_gczj = val
			}
		}
	}
</script>
	

	