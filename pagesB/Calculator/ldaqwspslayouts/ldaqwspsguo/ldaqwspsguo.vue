<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<ldaqwsps-counter-guo></ldaqwsps-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<ldaqwsps-result></ldaqwsps-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import ldaqwspsCounterGuo from "./ldaqwsps_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import ldaqwspsResult from "./ldaqwsps_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/ldaqwspsGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ldaqwspsCounterGuo,
			baseLayout,
			computing,
			ldaqwspsResult
		}
	}
</script>

<style>

</style>
