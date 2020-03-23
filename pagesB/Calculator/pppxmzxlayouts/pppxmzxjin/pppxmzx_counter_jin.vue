<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省ppp咨询费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择区域</view>
				<view class="picker m-left">
					山西
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker m-left">
					晋促[2018] 26号
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">项目投资规模</view>
				<input type="digit" v-model="needVal.pppxmzxJin_gczj"></input>
				<uni-tag text="亿元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="pickerChoose" data-index="index0" data-arr="pppxmzxJin_category" :value="index0" :range="pppxmzxJin_category">
					<view class="picker">
						{{pppxmzxJin_category[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整系数</view>
				<input type="digit" v-model="needVal.pppxmzxJin_fztz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxJin_fztz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">其他附加系数</view>
				<input type="digit" v-model="needVal.pppxmzxJin_fjxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxJin_fjxs">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.pppxmzxJin_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.pppxmzxJin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<pppxmzx-jin-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></pppxmzx-jin-zytz>
		<pppxmzx-jin-sffj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></pppxmzx-jin-sffj>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	// import pppxmzxJinZbxm from "./pppxmzxJin_zbxm.vue"
	import pppxmzxJinSffj from "./pppxmzxJin_sffj.vue"
	import pppxmzxJinZytz from "./pppxmzxJin_zytz.vue"
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
					pppxmzxJin_category: "实施方案编制",
					pppxmzxJin_discount: "90",
					pppxmzxJin_gczj: "",
					pppxmzxJin_graded: "10000|50000|100000|500000",
					pppxmzxJin_fdfd: "80",
					pppxmzxJin_sfjj: "11|24|35|64|80",
					pppxmzxJin_standard: "晋促[2018] 26号",
					pppxmzxJin_fztz: "1.0",
					pppxmzxJin_fjxs: "0",
					type: "pppxmzxJin",
				},
				modalData: null,  //查看说明
				showModalName: null,
				pppxmzxJin_category: ['实施方案编制',  '物有所值评价报告','财政承受能力论证报告', 'PPP合同及配套协议编制'],
				index0:'0',
				explain: [{
						"id": "1",
						"title": "项目类别",
						"text": "请确定好计算类别"
					},
					{
							"id": "2",
							"title": "浮动幅度",
							"text": "咨询服务费应根据咨询机构的资信、品牌、业绩等在服务费指导价的基础上浮动±20%的区间内协商约定。"
						},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			pppxmzxJinSffj,
			pppxmzxJinZytz,
		},
		watch:{
			inval(val){
				this.needVal.pppxmzxJin_gczj = val*1/1000
			}
		}
	}
</script>

<style>

</style>
