<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖北省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left" >
					鄂建监协[2015]7号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(989)">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="text"  v-model="needVal.jlfE_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="text"  v-model="needVal.jlfE_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfE_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.jlfE_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jlfwan-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfwan-fztz>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import explain from '@/common/base/explain.vue'
		import jlfwanFztz from "./jlfE_fztz.vue"
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						jlfE_discount: "50",
						jlfE_jfe: "",
						jlfE_fl: "0.04|0.035|0.03|0.026|0.024|0.022|0.02|0.018|0.017|0.016|0.015|0.014|0.012|0.011",
						jlfE_fztz: 1.0,
						jlfE_standard: "鄂建监协[2015]7号",
						jlfE_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
						type: "jlfE",
					},
					modalData: null,  //查看说明
					showModalName: null,
					explain: [{
							"id": "jlfe1",
							"title": "监理费计费额",
							"text": "计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置 费和联合试运转费之和"
						},
						{
							"id": "jlfe2",
							"title": "打折折扣",
							"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
						},
					]
				}
			},
			components: {
				uniTag,
				explain,
				jlfwanFztz,
			},
			methods:{
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target) 
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>
	
	<style>
	
	</style>
	