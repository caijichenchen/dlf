<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsjyfwf-counter-ba></jsjyfwf-counter-ba>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jsjyfwfCounterBa from "./jsjyfwf_counter_ba.vue"
	import computing from "@/common/base/computing.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfBa',  //api请求
					count:2  //积分消耗
				},
				title:'重庆市'
			}
		},
		components:{
			jsjyfwfCounterBa,
			baseLayout,
			computing,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
