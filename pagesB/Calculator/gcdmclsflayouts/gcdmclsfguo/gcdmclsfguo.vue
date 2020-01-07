<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<gcdmclsf-counter-guo></gcdmclsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<gcdmclsf-result></gcdmclsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcdmclsfCounterGuo from "./gcdmclsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcdmclsfResult from "./gcdmclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcdmclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcdmclsfCounterGuo,
			baseLayout,
			computing,
			gcdmclsfResult
		}
	}
</script>

<style>
</style>
