<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1715">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<hjjcf-counter-chuan></hjjcf-counter-chuan>
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
	import hjjcfCounterChuan from "./hjjcf_counter_chuan.vue"
	import computing from "@/common/base/computing.vue"
	import hjjcfResult from "../hjjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfChuan',  //api请求
					count:3  //积分消耗
				},
				title:"四川"
			}
		},
		methods: {
			
		},
		components:{
			hjjcfCounterChuan,
			baseLayout,
			computing,
			hjjcfResult
		}
	}
</script>

<style>

</style>
