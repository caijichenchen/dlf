<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="959">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-ji :title="title"></zjzxf-counter-ji>
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
	import zjzxfCounterJi from "./zjzxf-counter_ji.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJi',  //api请求
					count:2  //积分消耗
				},
				title: "河北造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterJi,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
