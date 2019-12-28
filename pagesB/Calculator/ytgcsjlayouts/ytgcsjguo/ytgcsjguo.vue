<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<ytgcsj-counter-guo></ytgcsj-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<ytgcsj-result></ytgcsj-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import ytgcsjCounterGuo from "./ytgcsj-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import ytgcsjResult from "./ytgcsj_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcsjGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgcsjCounterGuo,
			baseLayout,
			computing,
			ytgcsjResult
		}
	}
</script>

<style>
</style>
