<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北环境影响评价费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker" v-model="needVal.hjyxpjf_jsyj">
					冀建工〔2018〕53号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="hjyxpjJi_zxfwxm">
					<view class="picker">
						{{hjyxpjJi_zxfwxm[index0]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">估算投资额</view>
				<input type="digit" v-model="needVal.hjyxpjJi_gstze"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjJi_hytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjJi_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">环境敏感程度调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjJi_hjmgcdtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjJi_hjmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">浮动</view>
				<input type="digit" v-model="needVal.hjyxpjJi_fd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.hjyxpjJi_yhzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-ji-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-ji-hytzxs>
		<hjyxpjf-ji-hjmgxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-ji-hjmgxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import hjyxpjfJiHytzxs from "./hjyxpjfJi_hytzxs.vue"
	import hjyxpjfJiHjmgxs from "./hjyxpjfJi_hjmgxs.vue"
	
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					hjyxpjJi_fd: "100",
					hjyxpjJi_gstze: "",
					hjyxpjJi_hjmgcdtz: "0.8",
					hjyxpjJi_hytzxs: "1.0",
					hjyxpjJi_jsyj: "冀建工〔2018〕53号",
					hjyxpjJi_nums: "",
					hjyxpjJi_yhzk: "40",
					hjyxpjJi_zxfwxm: "评估环境影响报告表",
					type: "hjyxpjJi"
				},
				showModalName: null,
				hjyxpjJi_zxfwxm: ['编制环境影响报告书（含大纲）','编制环境影响报告表','评估环境影响报告书（含大纲）','评估环境影响报告表'],
				index0:'0',
				explain: [{
						"id": "1",
						"title": "计算依据",
						"text": "不同市县标准可能不一样"
					},
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
			hjyxpjfJiHytzxs,
			hjyxpjfJiHjmgxs,
		},
		methods:{
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.hjyxpjJi_zxfwxm = this.hjyxpjJi_zxfwxm[this.index0]
			},
		}
	}
</script>
	
