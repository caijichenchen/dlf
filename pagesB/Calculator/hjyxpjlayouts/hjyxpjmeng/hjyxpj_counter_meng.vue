<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古环境影响评价费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker m-left" >
					内环函〔2012〕88号
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">建设项目类别</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="hjyxpjMeng_category">
					<view class="picker">
						{{hjyxpjMeng_category[index0]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">总投资</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjMeng_gtz"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">优惠折扣</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjMeng_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1]) ">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-meng-jsxmlb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-meng-jsxmlb>
			
	</view>
</template>
	
<script>
		import {counterMixin} from "@/common/base/counterMixin"
		import hjyxpjfMengJsxmlb from "./hjyxpjMeng_jsxmlb.vue"
		
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						hjyxpjMeng_category: "生态类",
						hjyxpjMeng_discount: "40",
						hjyxpjMeng_fl: "0.003|0.0025|0.0015|0.00075",
						hjyxpjMeng_graded: "0|1|10|100",
						hjyxpjMeng_gtz: "",
						hjyxpjMeng_jsyj: "内环函〔2012〕88号",
						type: "hjyxpjMeng",
					},
					showModalName: null,
					hjyxpjMeng_category: ['生态类','工业类'],
					index0:'0',
					explain: [
						{
							"id": "2",
							"title": "招标代理费计算类别",
							"text": "1 生态类项目包括：铁路、公路、石油天然气开采及输送管道、煤矿、矿产、水利水电、风电、尾矿库、垃圾固废（危废）处理场等  2.工业类项目包括：火电、水泥、造纸、生物化工(医药、农药)、冶炼、化工、煤化工等。"
						},
						{
							"id": "3",
							"title": "优惠折扣",
							"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
						},
					]
				}
			},
			components: {
				// hjyxpjfMengHytzxs,
				// hjyxpjfMengHjmgxs,
				hjyxpjfMengJsxmlb,
			},
			methods:{
				PickerChange1(e) {
					this.index0 = e.detail.value
					this.needVal.hjyxpjMeng_category = this.hjyxpjMeng_category[this.index0]
				},
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target) 
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>
	
	<style>
	
	</style>
	