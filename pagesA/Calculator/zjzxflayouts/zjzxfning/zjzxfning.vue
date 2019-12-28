<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-ning :title="title"></zjzxf-counter-ning>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="1490" @tap="setDetailId">宁夏|建设工程造价咨询服务收费有关问题|宁价费发[2003]第204号</view>
			<view class="a-text" :data-id="1554" @tap="setDetailId">宁夏|建设工程造价咨询服务收费标准|宁价费发〔2010〕87号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterNing from "./zjzxf-counter_ning.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfNing',  //api请求
					count:2  //积分消耗
				},
				title: "宁夏造价咨询费",
				id:1490
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterNing,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
