<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="315">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmqqgzzxf-counter-ba></jsxmqqgzzxf-counter-ba>
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
	import jsxmqqgzzxfCounterBa from "./jsxmqqgzzxf_counter_ba.vue"
	import jsxmqqgzzxfResult from "../jsxmqqgzzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfBa',  //api请求
					count:2  //积分消耗
				},
				title:'重庆市'
			}
		},
		methods: {
			
		},
		components:{
			jsxmqqgzzxfCounterBa,
			baseLayout,
			computing,
			jsxmqqgzzxfResult
		}
	}
</script>

<style>

</style>
