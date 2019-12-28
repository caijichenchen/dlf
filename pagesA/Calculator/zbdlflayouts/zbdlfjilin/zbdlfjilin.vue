<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1636">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-jilin></zbdlf-counter-jilin>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterJilin from "./zbdlf_counter_jilin.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfJilin',  //api请求
					count:2  //积分消耗
				},
				title:'吉林'
			}
		},
		methods: {
			
		},
		components:{
			zbdlfCounterJilin,
			baseLayout,
			computing,
			zbdlfResult
		}
	}
</script>

<style>

</style>
