<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1665">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<stbcbcf-counter-su></stbcbcf-counter-su>
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
	import stbcbcfCounterSu from "./stbcbcf_counter_su.vue"
	import computing from "@/common/base/computing.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfSu',  //api请求
					count:1  //积分消耗
				},
				title:'江苏'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterSu,
			baseLayout,
			computing,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
