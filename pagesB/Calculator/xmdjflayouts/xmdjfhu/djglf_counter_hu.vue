<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市项目代建费计算器</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">地区</view>
					<picker class="select" v-model="needVal.djglfHu_xzsf" :range="picker">
						<view class="picker" name="djglfHu_xzsf">
							上海市
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" v-model="needVal.djglfHu_standard" :range="picker1">
						<view class="picker" name="djglfHu_standard">
							沪发改投〔2016〕70号
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">总投资</view>
					<input type="text"  id="sjf" v-model="needVal.djglfHu_ztz"></input>
					<uni-tag text="万元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">优惠折扣</view>
					<input name="djglfHu_discount" v-model="needVal.djglfHu_discount" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
			</form>
			<!-- 查看说明 --> 
			<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	// import djglfHuZbxm from "./djglfHu_zbxm.vue"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					djglfHu_discount: "100",
					djglfHu_fl: "0.015|0.012|0.01|0.008|0.005|0.002|0.001",
					djglfHu_graded: "0|1000|5000|10000|50000|100000|200000",
					djglfHu_standard: "沪发改投〔2016〕70号",
					djglfHu_ztz: "",
					type: "djglfHu",
				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['上海市'],
				picker1:['沪发改投〔2016〕70号'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					},
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
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
