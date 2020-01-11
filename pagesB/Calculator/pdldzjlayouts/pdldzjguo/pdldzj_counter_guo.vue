<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国铺底流动资金</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">范围</view>
				<view class="picker m-left">
					全国
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">取费标准</view>
					<view class="picker m-left" >
						建标〔2011〕1号
					</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">流动资金总额</view>
				<input type="text"  v-model="needVal.pdldzjGuo_ldzj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">资金比例</view>
				<input v-model="needVal.pdldzjGuo_dksc" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
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
				explain: [
					{
						"id": "0",
						"title": "流动资金计算方法",
						"text": "流动资金指运营期内长期占用并周转使用的营运资金，可采用扩大指标估算法或分项详细估算法。在初步设计概算阶段，流动资金可参照类仪的生产企业的扩大指标进行估算。1)按年产值(或年营业收入)估算:流动资金=年产值(或年营业收入) ×流动资金占用率流动资金占用率可由同类企业百元产值(或营业收入)中流动资金占用额确定。2)按年经营成本的周转天数估算:流动资金=(年经营成本/360) ×流动资金周转天数"
					},
					{
						"id": "1",
						"title": "资金比例",
						"text": "铺底流动资金，即自有流动资金，按流动资金总额的30%作为铺底流动资金列入总投资计划"
					},
				]
			}
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
