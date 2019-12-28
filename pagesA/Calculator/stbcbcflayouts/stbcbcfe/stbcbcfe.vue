<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1693">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<stbcbcf-counter-e></stbcbcf-counter-e>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import stbcbcfCounterE from "./stbcbcf_counter_e.vue"
	import computing from "@/common/base/computing.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfE',  //api请求
					count:1  //积分消耗
				},
				title:'湖北省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterE,
			baseLayout,
			computing,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
