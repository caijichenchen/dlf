<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国铺底流动资金</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">范围</view>
					<picker class="select" v-model="needVal.pdldzjGuo_xzsf" :range="picker">
						<view class="picker" name="pdldzjGuo_xzsf">
							全国
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">取费标准</view>
					<picker class="select" v-model="needVal.pdldzjGuo_standard" :range="picker1">
						<view class="picker" name="pdldzjGuo_standard">
							沪发改投〔2016〕70号
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">流动资金总额</view>
					<input type="text"  id="sjf" v-model="needVal.pdldzjGuo_ldzj"></input>
					<uni-tag text="万元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">资金比例</view>
					<input name="pdldzjGuo_dksc" v-model="needVal.pdldzjGuo_dksc" /></input>
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
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					pdldzjGuo_dksc: "30",
					pdldzjGuo_ldzj: "",
					pdldzjGuo_standard: "建标〔2011〕1号",
					type: "pdldzjGuo",
				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['全国'],
				picker1:['沪发改投〔2016〕70号'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "资金比例",
						"text": "铺底流动资金，即自有流动资金，按流动资金总额的30%作为铺底流动资金列入总投资计划"
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
