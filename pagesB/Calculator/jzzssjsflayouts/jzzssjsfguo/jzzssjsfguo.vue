<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1781">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jzzssjsf-counter-guo></jzzssjsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jzzssjsf-result></jzzssjsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jzzssjsfCounterGuo from "./jzzssjsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jzzssjsfResult from "./jzzssjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jzzssjsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jzzssjsfCounterGuo,
			baseLayout,
			computing,
			jzzssjsfResult
		}
	}
</script>

<style>
</style>
