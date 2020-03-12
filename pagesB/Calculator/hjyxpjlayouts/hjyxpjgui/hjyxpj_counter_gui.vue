<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西省环境影响评价费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						桂建标[2018]37号
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="hjyxpjGui_zxfwxm">
					<view class="picker">
						{{hjyxpjGui_zxfwxm[index0]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">估算投资额</view>
				<input type="digit" v-model="needVal.hjyxpjGui_gstze"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjGui_hytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjGui_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">环境敏感程度调整系数</view>
				<input type="digit" v-model="needVal.hjyxpjGui_hjmgcdtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjGui_hjmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">评价专题附加</view>
				<input type="digit" v-model="needVal.hjyxpjGui_fd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.hjyxpjGui_yhzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-gui-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-gui-hytzxs>
		<hjyxpjf-gui-hjmgxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-gui-hjmgxs>
			
	</view>
</template>
	
<script>
		import {counterMixin} from "@/common/base/counterMixin"
		import hjyxpjfGuiHytzxs from "./hjyxpjGui_hytzxs.vue"
		import hjyxpjfGuiHjmgxs from "./hjyxpjGui_hjmgcdtzxs.vue"
		
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						hjyxpjGui_zxfwxm: "编制环境影响报告书",
						hjyxpjGui_fd: "0",
						hjyxpjGui_fl: "3|3.6|9|21|45|66",
						hjyxpjGui_graded: "0|0.3|2|10|50|100",
						hjyxpjGui_gstze: "",
						hjyxpjGui_hjmgcdtz: "0.8",
						hjyxpjGui_hytzxs: "1.0",
						hjyxpjGui_jsyj: "桂建标[2018]37号",
						hjyxpjGui_yhzk: "100",
						hjyxpjGui_nums: "",
						type: "hjyxpjGui",
					},
					showModalName: null,
					hjyxpjGui_zxfwxm: ['编制环境影响报告书','编制环境影响报告表'],
					index0:'0',
					explain: [
						{
							"id": "2",
							"title": "估算投资额",
							"text": "估算投资额为项目建议书或可行性研究报告中的估算投资额"
						},
						{
							"id": "3",
							"title": "评价专题附加",
							"text": "本表所列编制环境影响报告表收费为不设评价专题的基准价,每增加一个专题增加50%"
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
				hjyxpjfGuiHytzxs,
				hjyxpjfGuiHjmgxs,
			},
			methods:{
				PickerChange1(e) {
					this.index0 = e.detail.value
					this.needVal.hjyxpjGui_zxfwxm = this.hjyxpjGui_zxfwxm[this.index0]
				},
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target) 
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>

	