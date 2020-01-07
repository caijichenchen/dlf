<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1686">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmbjf-counter-zhuzhou></jsxmbjf-counter-zhuzhou>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsxmbjf-result></jsxmbjf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jsxmbjfCounterZhuzhou from "./jsxmbjf_counter_zhuzhou.vue"
	import computing from "@/common/base/computing.vue"
	import jsxmbjfResult from "./jsxmbjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsxmbjfZhuzhou',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jsxmbjfCounterZhuzhou,
			baseLayout,
			computing,
			jsxmbjfResult
		}
	}
</script>

<style>

</style>
