<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1618">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmqqgzzxf-counter-ji></jsxmqqgzzxf-counter-ji>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsxmqqgzzxf-result :title="title"></jsxmqqgzzxf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import computing from "@/common/base/computing.vue"
	import jsxmqqgzzxfCounterJi from "./jsxmqqgzzxf_counter_ji.vue"
	import jsxmqqgzzxfResult from "../jsxmqqgzzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfJi',  //api请求
					count:2  //积分消耗
				},
				title:'河北省'
			}
		},
		components:{
			jsxmqqgzzxfCounterJi,
			baseLayout,
			computing,
			jsxmqqgzzxfResult
		}
	}
</script>

<style>

</style>
