<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市监理费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left">渝监协[2015]44号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfBa_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfBa_fztz" data-index="index0" :value="index0" :range="jlfBa_fztz">
					<view class="picker" name="sjfGui_fztz">
						{{jlfBa_fztz[index0]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfBa_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">施工危险等级</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfBa_sgwxdj" data-index="index1" :value="index1" :range="jlfBa_sgwxdj">
					<view class="picker" name="sjfGui_fztz">
						{{jlfBa_sgwxdj[index1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jlfBa_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfBa_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfBa_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->  
		<explain></explain>
		<jlfqian-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfqian-fjtz>
		<jlfqian-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' ></jlfqian-fztz>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import jlfqianFjtz from "./jlfBa_fjtz.vue"
	import jlfqianFztz from "./jlfBa_fztz.vue"
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
					jlfBa_dzzk: "50",
					jlfBa_jfe: "",
					jlfBa_fjtz: '1.0',
					jlfBa_fl: "0.04|0.033|0.03|0.026|0.024|0.023|0.022|0.02|0.018|0.017|0.016|0.015|0.014|0.013|0.012|0.011|0.010",
					jlfBa_fztz: 'I级',
					jlfBa_sgwxdj: 'I级',
					jlfBa_jsyj: "渝监协[2015]44号",
					type: "jlfBa",
					jlfBa_nums: "",
					jlfBa_gcfztzdj: 'I级|II级|III级',
					jlfBa_gcfztzxs: '0.85|1.0|1.15',
					jlfBa_qjjfe: '500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000',
					jlfBa_sgwxdjs:'I级|II级|III级',
					jlfBa_sgwxdjxs: '1.10|1.05|1.00'
				},
				modalData: null,  //查看说明
				showModalName: null,
				index0:0,
				index1:0,
				jlfBa_fztz: ['I级','II级','III级'],
				jlfBa_sgwxdj: ['I级','II级','III级'],
				explain: [{
						"id": "1",
						"title": "监理费计费额",
						"text": "1.“计费额”是指建设项目的建筑安装工程费、工器具及设备购置叫以如m92x3和,以工程竣工结算总价为准。2.对于设备购置费和联合试运转费超过工程总价40%的工程项目,其建筑安装工程费全部计入计费额,设备购置费和联合试运转费可按40%的比例计入计费额。 "
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
			jlfqianFjtz,
			jlfqianFztz,
		},
		watch:{
			inval(val){
				this.needVal.jlfBa_jfe = val
			}
		}
	}
</script>

<style>

</style>
	