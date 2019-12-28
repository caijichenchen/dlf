<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<hjyxpjf-counter-gui></hjyxpjf-counter-gui>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import hjyxpjfCounterGui from "./hjyxpj_counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterGui,
			baseLayout,
			computing,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
