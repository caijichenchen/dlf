<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<gcdebzbzglfgf-counter-guo></gcdebzbzglfgf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<gcdebzbzglfgf-result></gcdebzbzglfgf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcdebzbzglfgfCounterGuo from "./gcdebzbzglfgf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcdebzbzglfgfResult from "./gcdebzbzglfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcdebzbzglfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcdebzbzglfgfCounterGuo,
			baseLayout,
			computing,
			gcdebzbzglfgfResult
		}
	}
</script>

<style>

</style>
