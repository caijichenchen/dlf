<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<txgckcf-counter-guo></txgckcf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<txgckcf-result></txgckcf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import txgckcfCounterGuo from "./txgckcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import txgckcfResult from "./txgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl +'/api/txgckcfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			txgckcfCounterGuo,
			baseLayout,
			computing,
			txgckcfResult
		}
	}
</script>

<style>
</style>
