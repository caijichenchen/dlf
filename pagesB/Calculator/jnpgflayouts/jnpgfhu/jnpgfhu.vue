<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1021">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jnpgf-counter-hu></jnpgf-counter-hu>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jnpgf-result></jnpgf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jnpgfCounterHu from "./jnpgf_counter_hu.vue"
	import computing from "@/common/base/computing.vue"
	import jnpgfResult from "./jnpgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jnpgfHu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jnpgfCounterHu,
			baseLayout,
			computing,
			jnpgfResult
		}
	}
</script>

<style>

</style>
