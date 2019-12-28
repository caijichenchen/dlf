<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<hjyxpjf-counter-zang></hjyxpjf-counter-zang>
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
	import hjyxpjfCounterZang from "./hjyxpj_counter_zang.vue"
	import computing from "@/common/base/computing.vue"
	import hjyxpjfResult from "../hjyxpjf_result"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjZang',  //api请求
					count:2  //积分消耗
				},
				title:'西藏'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterZang,
			baseLayout,
			computing,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
