<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">社会稳定风险评估收费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" v-model="needVal.shwdfxpgHu_jsyj" :range="picker1">
					<view class="picker" name="shwdfxpgHu_jsyj">
						沪发改投〔2012〕130号
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange" v-model="needVal.shwdfxpgHu_zxfwxm" :range="picker2">
					<view class="picker" name="shwdfxpgHu_zxfwxm">
						{{index>-1?picker2[index]:'编制建设项目社会稳定风险评估报告'}}
					</view>
				</picker>
				<!-- <button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button> -->
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">估算投资额</view>
				<input type="text"  id="sjf" v-model="needVal.shwdfxpgHu_gstze"></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input name="shwdfxpgHu_hytzxs" v-model="needVal.shwdfxpgHu_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">社会稳定风险敏感程度调整系数</view>
				<input name="shwdfxpgHu_fxmgcdtz" v-model="needVal.shwdfxpgHu_fxmgcdtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_fxmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">区域范围调整系数</view>
				<input name="shwdfxpgHu_qyfwtz" v-model="needVal.shwdfxpgHu_qyfwtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="shwdfxpgHu_qyfwtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动</view>
				<input name="shwdfxpgHu_fd" v-model="needVal.shwdfxpgHu_fd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="shwdfxpgHu_yhzk" v-model="needVal.shwdfxpgHu_yhzk" /></input>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
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
				selected: 'A',
				shows: 1,
				picker:['山西'],
				picker1:['沪发改投〔2012〕130号'],
				picker2: ['编制建设项目社会稳定风险评估报告',  '评价建设项目社会稳定风险评估报告'],
				index:'0',
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
			uniTag,
			shwdfxpgHuHytz,
			shwdfxpgHuQyfwtz,
			shwdfxpgHuWdfxtz,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.shwdfxpgHu_zxfwxm = this.picker2[index]
				// console.log(this.needVal.shwdfxpgHu_zxfwxm );
					if(this.needVal.shwdfxpgHu_zxfwxm == "评价建设项目社会稳定风险评估报告"  ){
						this.needVal.shwdfxpgHu_sffl = " 4|0.00015|0.0001|0.000025|25"
					}
				// else if(this.needVal.shwdfxpgHu_zxfwxm == "财政承受能力论证报告"){
				// 		this.needVal.shwdfxpgHu_sfjj = "28|60|88|160|200"
				// 	}else if(this.needVal.shwdfxpgHu_zxfwxm == "PPP合同及配套协议编制"){
				// 		this.needVal.shwdfxpgHu_sfjj = "24|36|48|72|108"
				// 	}else if(this.needVal.shwdfxpgHu_zxfwxm == "编制中期评估报告"){
				// 		this.needVal.shwdfxpgHu_sfjj = "14|30|44|80|100"
				// 	}else if(this.needVal.shwdfxpgHu_zxfwxm == "编制项目后评价报告"){
				// 		this.needVal.shwdfxpgHu_sfjj = "22|48|70|128|160"
				// 	}
  			},
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
