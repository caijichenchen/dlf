<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1632">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<ytgckcsf-counter-liao></ytgckcsf-counter-liao>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<ytgckcsf-result></ytgckcsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import ytgckcsfCounterLiao from "./ytgckcsf-counter_liao.vue"
	import computing from "@/common/base/computing.vue"
	import ytgckcsfResult from "./ytgckcsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgckcsfLiao',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgckcsfCounterLiao,
			baseLayout,
			computing,
			ytgckcsfResult
		}
	}
</script>

<style>
</style>
