<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1676">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<stbcbcf-counter-lu></stbcbcf-counter-lu>
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
	import stbcbcfCounterLu from "./stbcbcf_counter_lu.vue"
	import computing from "@/common/base/computing.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfLu',  //api请求
					count:1  //积分消耗
				},
				title:山东省
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterLu,
			baseLayout,
			computing,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
