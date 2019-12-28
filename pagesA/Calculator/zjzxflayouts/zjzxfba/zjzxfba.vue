<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1063">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-ba :title="title"></zjzxf-counter-ba>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterBa from "./zjzxf-counter_ba.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfBa',  //api请求
					count:2  //积分消耗
				},
				title: "重庆造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterBa,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
