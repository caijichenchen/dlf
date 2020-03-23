<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省环境影响评价费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						浙价服〔2013〕85号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1660)">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="pickerChoose" data-index="index0" data-arr="hjyxpjZhe_category" :value="index0" :range="hjyxpjZhe_category">
					<view class="picker">
						{{hjyxpjZhe_category[index0]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" >
				<view class="title">估算投资额</view>
				<input type="digit" v-model="needVal.hjyxpjZhe_gstze"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjZhe_hytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjZhe_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">环境敏感程度调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjZhe_hjmgcdtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjZhe_hjmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动</view>
				<input type="digit" v-model="needVal.hjyxpjZhe_fd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.hjyxpjZhe_yhzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-zhe-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-zhe-hytzxs>
		<hjyxpjf-zhe-hjmgxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-zhe-hjmgxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import hjyxpjfZheHytzxs from "./hjyxpjZhe_hjtzxs.vue"
	import hjyxpjfZheHjmgxs from "./hjyxpjZhe_hjmgcdtzxs.vue"
	
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
					hjyxpjZhe_category: "编制环境影响报告书（含大纲）",
					hjyxpjZhe_fd: "100",
					hjyxpjZhe_fl: "3.2|3.9|9.7|22.7|48.7|71.5",
					hjyxpjZhe_graded: "0|0.3|2|10|50|100",
					hjyxpjZhe_gstze: "",
					hjyxpjZhe_hjmgcdtz: "0.8",
					hjyxpjZhe_hytzxs: "1.0",
					hjyxpjZhe_jsyj: "浙价服〔2013〕85号",
					hjyxpjZhe_yhzk: "40",
					type: "hjyxpjZhe"
				},
				showModalName: null,
				hjyxpjZhe_category: ['编制环境影响报告书（含大纲）','编制环境影响报告表'],
				index0:'0',
				explain: [
					{
						"id": "2",
						"title": "估算投资额",
						"text": "估算投资额为项目建议书或可行性研究报告中的估算投资额"
					},
					{
						"id": "3",
						"title": "浮动",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "4",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			hjyxpjfZheHytzxs,
			hjyxpjfZheHjmgxs,
		},
		watch:{
			inval(val){
				this.needVal.hjyxpjZhe_gstze = val*1/1000
			}
		}
	}
</script>

	