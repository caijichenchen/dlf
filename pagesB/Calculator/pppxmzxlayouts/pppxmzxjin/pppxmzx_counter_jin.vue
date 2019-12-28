<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省ppp咨询费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">选择区域</view>
					<picker class="select" v-model="needVal.pppxmzxJin_xzsf" :range="picker">
						<view class="picker" name="pppxmzxJin_xzsf">
							山西
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" v-model="needVal.pppxmzxJin_standard" :range="picker1">
						<view class="picker" name="pppxmzxJin_standard">
							晋促[2018] 26号
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">项目投资规模</view>
					<input type="text"  id="sjf" v-model="needVal.pppxmzxJin_gczj"></input>
					<uni-tag text="亿元" type="defult"></uni-tag>
					<!-- <button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">点击查看</button> -->
				</view>
				<view class="cu-form-group">
					<view class="title">项目类别</view>
					<picker class="select" @change="PickerChange" v-model="needVal.pppxmzxJin_category" :range="picker2">
						<view class="picker" name="pppxmzxJin_category">
							{{index>-1?picker2[index]:'实施方案编制'}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">复杂调整系数</view>
					<input name="pppxmzxJin_fztz" v-model="needVal.pppxmzxJin_fztz" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxJin_fztz">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">其他附加系数</view>
					<input name="pppxmzxJin_fjxs" v-model="needVal.pppxmzxJin_fjxs" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="pppxmzxJin_fjxs">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">浮动幅度</view>
					<input name="pppxmzxJin_fdfd" v-model="needVal.pppxmzxJin_fdfd" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">优惠折扣</view>
					<input name="pppxmzxJin_discount" v-model="needVal.pppxmzxJin_discount" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import pppxmzxJinSffj from "./pppxmzxJin_sffj.vue"
	import pppxmzxJinZytz from "./pppxmzxJin_zytz.vue"
	export default {
		mixins: [counterMixin],
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
				selected: 'A',
				shows: 1,
				picker:['山西'],
				picker1:['晋促[2018] 26号'],
				picker2: ['实施方案编制',  '物有所值评价报告','财政承受能力论证报告', 'PPP合同及配套协议编制'],
				index:'0',
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
			uniTag,
			pppxmzxJinSffj,
			pppxmzxJinZytz,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.pppxmzxJin_category = this.picker2[index]
				// console.log(this.needVal.pppxmzxJin_category );
				// 	if(this.needVal.pppxmzxJin_category == "编制物有所值评估"  ){
				// 		this.needVal.pppxmzxJin_sfjj = "17|22|33|60|75"
				// 	}else if(this.needVal.pppxmzxJin_category == "物有所值评价报告"){
				// 		this.needVal.pppxmzxJin_sfjj = "14|18.5|27.5|50|62.5"
				// 	}else if(this.needVal.pppxmzxJin_category == "财政承受能力论证报告"){
				// 		this.needVal.pppxmzxJin_sfjj = "28|60|88|160|200"
				// 	}else if(this.needVal.pppxmzxJin_category == "PPP合同及配套协议编制"){
				// 		this.needVal.pppxmzxJin_sfjj = "24|36|48|72|108"
				// 	}else if(this.needVal.pppxmzxJin_category == "编制中期评估报告"){
				// 		this.needVal.pppxmzxJin_sfjj = "14|30|44|80|100"
				// 	}else if(this.needVal.pppxmzxJin_category == "编制项目后评价报告"){
				// 		this.needVal.pppxmzxJin_sfjj = "22|48|70|128|160"
				// 	}
  			},
			//查看说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
