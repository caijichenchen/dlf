<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1637">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<fkdxyjjsf-counter-jilin></fkdxyjjsf-counter-jilin>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import fkdxyjjsfCounterJilin from "./fkdxyjjsf_counter_jilin.vue"
	import computing from "@/common/base/computing.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfJilin',  //api请求
					count:1  //积分消耗
				},
				title:'吉林'
			}
		},
		components:{
			fkdxyjjsfCounterJilin,
			baseLayout,
			computing,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
