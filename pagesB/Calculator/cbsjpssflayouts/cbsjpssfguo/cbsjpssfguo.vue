<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<cbsjpssf-counter-guo></cbsjpssf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<cbsjpssf-result></cbsjpssf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import cbsjpssfCounterGuo from "./cbsjpssf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import cbsjpssfResult from "./cbsjpssf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/cbsjpssfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			cbsjpssfCounterGuo,
			baseLayout,
			computing,
			cbsjpssfResult
		}
	}
</script>

<style>
</style>
