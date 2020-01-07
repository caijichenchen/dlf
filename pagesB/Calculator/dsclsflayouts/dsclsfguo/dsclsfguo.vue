<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dsclsf-counter-guo></dsclsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dsclsf-result></dsclsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dsclsfCounterGuo from "./dsclsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import dsclsfResult from "./dsclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dsclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			dsclsfCounterGuo,
			baseLayout,
			computing,
			dsclsfResult
		}
	}
</script>

<style>
</style>
