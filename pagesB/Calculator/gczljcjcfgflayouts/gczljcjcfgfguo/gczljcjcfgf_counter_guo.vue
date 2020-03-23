<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程质量检查检测费(光伏发电工程)</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						NB/T 32027--2016
					</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建安设备费</view>
				<input type="digit" v-model="needVal.gczljcjcfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.gczljcjcfgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
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
					type: "gczljcjcfgfGuo",
					gczljcjcfgfGuo_dzzk: "100",
					gczljcjcfgfGuo_fl: "0.20",
					gczljcjcfgfGuo_gczj: "",
					gczljcjcfgfGuo_jfe: "",
					gczljcjcfgfGuo_jsyj: "NB/T 32027--2016"
				},
				showModalName: null,
				explain: [
					{
						"id": "1",
						"title": "计算依据",
						"text": "中华人民共和国能源行业标准NB/T 32027--2016"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		watch:{
			inval(val){
				this.needVal.gczljcjcfgfGuo_gczj = val
			}
		}
	}
</script>