<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1583">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<hjjcf-counter-wan></hjjcf-counter-wan>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<hjjcf-result :title="title"></hjjcf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import hjjcfCounterWan from "./hjjcf_counter_wan.vue"
	import computing from "@/common/base/computing.vue"
	import hjjcfResult from "../hjjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfWan',  //api请求
					count:2  //积分消耗
				},
				title:'安徽'
			}
		},
		methods: {
			
		},
		components:{
			hjjcfCounterWan,
			baseLayout,
			computing,
			hjjcfResult
		}
	}
</script>

<style>

</style>
