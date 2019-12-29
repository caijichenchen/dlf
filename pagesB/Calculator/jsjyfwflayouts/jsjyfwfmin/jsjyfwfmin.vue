<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1680">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsjyfwf-counter-min></jsjyfwf-counter-min>
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
	import jsjyfwfCounterMin from "./jsjyfwf_counter_min.vue"
	import computing from "@/common/base/computing.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfMin',  //api请求
					count:1  //积分消耗
				},
				title:'福建省'
			}
		},
		components:{
			jsjyfwfCounterMin,
			baseLayout,
			computing,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
