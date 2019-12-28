<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1700">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dzaqpjf-counter-qian></dzaqpjf-counter-qian>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dzaqpjfCounterQian from "./dzaqpjf-counter_qian.vue"
	import computing from "@/common/base/computing.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfQian',  //api请求
					count:4  //积分消耗
				},
				title:'贵州'
			}
		},
		components:{
			dzaqpjfCounterQian,
			baseLayout,
			computing,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
