<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山东省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						鲁建监协〔2015〕19号
					</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfLu_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfLu_fztz" data-index="index0" :value="index0" :range="jlfLu_fztz">
					<view class="picker" >
						{{jlfLu_fztz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfLu_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfLu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlflu-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlflu-fztz>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import jlfluFztz from "./jlfLu_fztz.vue"
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
					jlfLu_discount: "50",
					jlfLu_fl: "0.033|0.03|0.026|0.024|0.023|0.022|0.02|0.018|0.017|0.016|0.015|0.014|0.012|0.011|0.011|0.01",
					jlfLu_jfe: "",
					jlfLu_fztz: "I级",
					jlfLu_gcfztzdj:'I级|II级|III级',
					jlfLu_gcfztzxs: "0.85|1.0|1.15",
					jlfLu_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
					jlfLu_standard: "鲁建监协〔2015〕19号",
					type: "jlfLu",
				},
				modalData: null,  //查看说明
				showModalName: null,
				index0:0,
				jlfLu_fztz: ['I级', 'II级', 'III级'],
				explain: [{
						"id": "1",
						"title": "监理费收费计费额",
						"text": "1.计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置费和联合试运转费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			jlfluFztz,
		},
		watch:{
			inval(val){
				this.needVal.jlfLu_jfe = val
			}
		}
	}
</script>

<style>

</style>
	