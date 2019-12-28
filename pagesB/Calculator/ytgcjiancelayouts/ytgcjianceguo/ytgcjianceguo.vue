<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<ytgcjiance-counter-guo></ytgcjiance-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<ytgcjiance-result></ytgcjiance-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import ytgcjianceCounterGuo from "./ytgcjiance-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import ytgcjianceResult from "./ytgcjiance_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcjianceGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgcjianceCounterGuo,
			baseLayout,
			computing,
			ytgcjianceResult
		}
	}
</script>

<style>
</style>
