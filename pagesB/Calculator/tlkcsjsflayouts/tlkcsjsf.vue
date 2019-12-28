<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<tlkcsjsf-counter-guo></tlkcsjsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<tlkcsjsf-result></tlkcsjsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import tlkcsjsfCounterGuo from "./tlkcsjsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import tlkcsjsfResult from "./tlkcsjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: 'https://www.dulifei.com/api/tlkcsjsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			tlkcsjsfCounterGuo,
			baseLayout,
			computing,
			tlkcsjsfResult
		}
	}
</script>

<style>
</style>
