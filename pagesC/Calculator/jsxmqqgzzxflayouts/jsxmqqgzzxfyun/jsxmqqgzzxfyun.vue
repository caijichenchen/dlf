<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1925">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmqqgzzxf-counter-yun></jsxmqqgzzxf-counter-yun>
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
	import jsxmqqgzzxfCounterYun from "./jsxmqqgzzxf_counter_yun.vue"
	import jsxmqqgzzxfResult from "../jsxmqqgzzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfYun',  //api请求
					count:2  //积分消耗
				},
				title:'云南省'
			}
		},
		components:{
			jsxmqqgzzxfCounterYun,
			baseLayout,
			computing,
			jsxmqqgzzxfResult
		}
	}
</script>

<style>

</style>
