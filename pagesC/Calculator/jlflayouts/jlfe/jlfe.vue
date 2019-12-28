<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="989">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfe-counter-guo></jlfe-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfe-result></jlfe-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfeCounterGuo from "./jlfe_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfeResult from "./jlfe_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfE',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfeCounterGuo,
			baseLayout,
			computing,
			jlfeResult
		}
	}
</script>

<style>

</style>
