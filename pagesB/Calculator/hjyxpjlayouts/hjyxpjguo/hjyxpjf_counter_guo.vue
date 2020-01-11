<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">环境影响评价费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker" v-model="needVal.hjyxpjf_jsyj">
					计价格[2002]125号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="hjyxpjGuo_zxfwxm">
					<view class="picker">
						{{hjyxpjGuo_zxfwxm[index0]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">估算投资额</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjGuo_gstze"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input name="sjfGuo_discount" v-model="needVal.hjyxpjGuo_hytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjGuo_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">环境敏感程度调整系数</view>
				<input name="sjfGuo_discount" v-model="needVal.hjyxpjGuo_hjmgcdtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjGuo_hjmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">浮动</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjGuo_fd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">优惠折扣</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjGuo_yhzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-guo-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-guo-hytzxs>
		<hjyxpjf-guo-hjmgxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-guo-hjmgxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import hjyxpjfGuoHytzxs from "./hjyxpjfGuo_hytzxs.vue"
	import hjyxpjfGuoHjmgxs from "./hjyxpjfGuo_hjmgxs.vue"
	
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					hjyxpjGuo_fd: "100",
					hjyxpjGuo_gstze: "",
					hjyxpjGuo_hjmgcdtz: "0.8",
					hjyxpjGuo_hytzxs: "1.0",
					hjyxpjGuo_jsyj: "计价格[2002]125号",
					hjyxpjGuo_nums: "",
					hjyxpjGuo_yhzk: "40",
					hjyxpjGuo_zxfwxm: "评估环境影响报告表",
					type: "hjyxpjGuo"
				},
				showModalName: null,
				hjyxpjGuo_zxfwxm: ['编制环境影响报告书（含大纲）','编制环境影响报告表','评估环境影响报告书（含大纲）','评估环境影响报告表'],
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
			hjyxpjfGuoHytzxs,
			hjyxpjfGuoHjmgxs,
		},
		methods:{
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.hjyxpjGuo_zxfwxm = this.hjyxpjGuo_zxfwxm[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
