<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<tlkcf-counter-guo></tlkcf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<tlkcf-result></tlkcf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import tlkcfCounterGuo from "./tlkcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import tlkcfResult from "./tlkcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/tlkcfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			tlkcfCounterGuo,
			baseLayout,
			computing,
			tlkcfResult
		}
	}
</script>

<style>
</style>
