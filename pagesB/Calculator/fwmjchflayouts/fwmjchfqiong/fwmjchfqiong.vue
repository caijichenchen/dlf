<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="273">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<fwmjchf-counter-qiong></fwmjchf-counter-qiong>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<fwmjchf-result></fwmjchf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import fwmjchfCounterQiong from "./fwmjchf-counter_qiong.vue"
	import computing from "@/common/base/computing.vue"
	import fwmjchfResult from "./fwmjchf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fwmjchfQiong',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			fwmjchfCounterQiong,
			baseLayout,
			computing,
			fwmjchfResult
		}
	}
</script>

<style>
</style>
