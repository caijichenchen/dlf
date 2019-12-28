<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="290">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmqqgzzxf-counter-chuan></jsxmqqgzzxf-counter-chuan>
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
	import jsxmqqgzzxfCounterChuan from "./jsxmqqgzzxf_counter_chuan.vue"
	import jsxmqqgzzxfResult from "../jsxmqqgzzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfChuan',  //api请求
					count:2  //积分消耗
				},
				title:'四川省'
			}
		},
		components:{
			jsxmqqgzzxfCounterChuan,
			baseLayout,
			computing,
			jsxmqqgzzxfResult
		}
	}
</script>

<style>

</style>
