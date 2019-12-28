<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1694">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<csjcsspt-counter-hei></csjcsspt-counter-hei>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csjcssptCounterHei from "./csjcsspt_counter_hei.vue"
	import computing from "@/common/base/computing.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptHei',  //api请求
					count:1  //积分消耗
				},
				title:'黑龙江'
			}
		},
		components:{
			csjcssptCounterHei,
			baseLayout,
			computing,
			csjcssptResult
		}
	}
</script>

<style>

</style>
