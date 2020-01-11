<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">社会稳定风险评估收费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						沪发改投〔2012〕130号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="shwdfxpgHu_zxfwxm">
					<view class="picker" >
						{{shwdfxpgHu_zxfwxm[index0]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" >
				<view class="title">估算投资额</view>
				<input type="text"  v-model="needVal.shwdfxpgHu_gstze"></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input v-model="needVal.shwdfxpgHu_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">社会稳定风险敏感程度调整系数</view>
				<input v-model="needVal.shwdfxpgHu_fxmgcdtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_fxmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">区域范围调整系数</view>
				<input v-model="needVal.shwdfxpgHu_qyfwtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_qyfwtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动</view>
				<input v-model="needVal.shwdfxpgHu_fd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input  v-model="needVal.shwdfxpgHu_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<shwdfxpg-hu-hytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></shwdfxpg-hu-hytz>
		<shwdfxpg-hu-qyfwtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></shwdfxpg-hu-qyfwtz>
		<shwdfxpg-hu-wdfxtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></shwdfxpg-hu-wdfxtz>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	// import shwdfxpgHuZbxm from "./shwdfxpgHu_zbxm.vue"
	import shwdfxpgHuHytz from "./shwdfxpgHu_hytzxs.vue"
	import shwdfxpgHuQyfwtz from "./shwdfxpgHu_qyfwtz.vue"
	import shwdfxpgHuWdfxtz from "./shwdfxpgHu_fxmgcdtz.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					shwdfxpgHu_fd: "100",
					shwdfxpgHu_fxmgcdtz: "0.8",
					shwdfxpgHu_gstze: "",
					shwdfxpgHu_hytzxs: "1.0",
					shwdfxpgHu_jsyj: "计价格[2002]125号",
					shwdfxpgHu_nums: "",
					shwdfxpgHu_qyfwtz: "0.8",
					shwdfxpgHu_sffl: "6|0.00025|0.00018|0.0000625|50",
					shwdfxpgHu_sffw: "0|10000|50000|100000|500000",
					shwdfxpgHu_yhzk: "40",
					shwdfxpgHu_zxfwxm: "编制建设项目社会稳定风险评估报告",
					type: "shwdfxpgHu",
				},
				modalData: null,  //查看说明
				showModalName: null,
				shwdfxpgHu_zxfwxm: ['编制建设项目社会稳定风险评估报告',  '评价建设项目社会稳定风险评估报告'],
				shwdfxpgHu_sffl: ['6|0.00025|0.00018|0.0000625|50','4|0.00015|0.0001|0.000025|25'],
				index0:'0',
				explain: [{
						"id": "1",
						"title": "计算依据",
						"text": "不同市县标准可能不一样"
					},
					{
							"id": "2",
							"title": "估算投资额",
							"text": "估算投资额为社会稳定风险评估报告费中的估算投资额"
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
			shwdfxpgHuHytz,
			shwdfxpgHuQyfwtz,
			shwdfxpgHuWdfxtz,
		},
		methods:{
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.shwdfxpgHu_zxfwxm = this.shwdfxpgHu_zxfwxm[this.index0]
				this.needVal.shwdfxpgHu_sffl = this.shwdfxpgHu_sffl[this.index0]
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
