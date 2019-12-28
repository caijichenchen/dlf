<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1653">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dzaqpjf-counter-hu></dzaqpjf-counter-hu>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dzaqpjfCounterHu from "./dzaqpjf-counter_hu.vue"
	import computing from "@/common/base/computing.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfHu',  //api请求
					count:4  //积分消耗
				},
				title:'上海'
			}
		},
		components:{
			dzaqpjfCounterHu,
			baseLayout,
			computing,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
