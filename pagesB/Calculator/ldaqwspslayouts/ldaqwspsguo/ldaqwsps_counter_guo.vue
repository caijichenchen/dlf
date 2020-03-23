<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">劳动安全卫生评审费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						建标〔2011〕1号
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">工程费用</view>
				<input type="digit" v-model="needVal.ldaqwspsGuo_gcfy"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="ldaqwspsGuo_gcfy">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">比例系数</view>
				<input type="digit" v-model="needVal.ldaqwspsGuo_blxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ldaqwspsGuo_blxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.ldaqwspsGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<ldaqwsps-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></ldaqwsps-blb>
		<ldaqwsps-gcfy v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></ldaqwsps-gcfy>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import ldaqwspsBlb from "./ldaqwspsGuo_blb.vue"
	import ldaqwspsGcfy from "./ldaqwspsGuo_gcfy.vue"
	export default {
		mixins: [counterMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[String,Number],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					type: "xmzxfwfgfGuo",
					ldaqwspsGuo_blxs: "0.003",
					ldaqwspsGuo_gcfy: "",
					ldaqwspsGuo_jsyj: "建标〔2011〕1号",
					ldaqwspsGuo_nums: "",
					ldaqwspsGuo_yhzk: "90",
					type: "ldaqwspsGuo",
				},
				showModalName: null,
				explain:[
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			ldaqwspsBlb,
			ldaqwspsGcfy
		},
		watch:{
			inval(val){
				this.needVal.ldaqwspsGuo_gcfy = val
			}
		}
	}
</script>
	
	
	