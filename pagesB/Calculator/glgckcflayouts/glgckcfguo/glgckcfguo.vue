<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<glgckcf-counter-guo></glgckcf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<glgckcf-result></glgckcf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import glgckcfCounterGuo from "./glgckcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import glgckcfResult from "./glgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/glgckcfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			glgckcfCounterGuo,
			baseLayout,
			computing,
			glgckcfResult
		}
	}
</script>

<style>
</style>
