<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dxgxclsf-counter-guo></dxgxclsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dxgxclsf-result></dxgxclsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dxgxclsfCounterGuo from "./dxgxclsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import dxgxclsfResult from "./dxgxclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dxgxclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			dxgxclsfCounterGuo,
			baseLayout,
			computing,
			dxgxclsfResult
		}
	}
</script>

<style>
</style>
