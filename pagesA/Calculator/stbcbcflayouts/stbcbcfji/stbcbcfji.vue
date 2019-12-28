<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1615">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<stbcbcf-counter-ji></stbcbcf-counter-ji>
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
	import stbcbcfCounterJi from "./stbcbcf_counter_ji.vue"
	import computing from "@/common/base/computing.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfJi',  //api请求
					count:1  //积分消耗
				},
				title:'河北省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterJi,
			baseLayout,
			computing,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
