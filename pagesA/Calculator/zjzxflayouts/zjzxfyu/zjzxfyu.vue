<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='111'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-yu :title="title"></zjzxf-counter-yu>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterYu from "./zjzxf-counter_yu.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYu',  //api请求
					count:2  //积分消耗
				},
				title: "河南省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterYu,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
