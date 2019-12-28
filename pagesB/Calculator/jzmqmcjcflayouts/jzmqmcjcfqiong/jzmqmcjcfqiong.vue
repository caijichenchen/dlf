<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jzmqmcjcf-counter-qiong></jzmqmcjcf-counter-qiong>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jzmqmcjcf-result></jzmqmcjcf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jzmqmcjcfCounterQiong from "./jzmqmcjcf-counter_qiong.vue"
	import computing from "@/common/base/computing.vue"
	import jzmqmcjcfResult from "./jzmqmcjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jzmqmcjcfQiong',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jzmqmcjcfCounterQiong,
			baseLayout,
			computing,
			jzmqmcjcfResult
		}
	}
</script>

<style>
</style>
