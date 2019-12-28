<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xmjs-counter-guo></xmjs-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xmjs-result></xmjs-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xmjsCounterGuo from "./xmjs_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import xmjsResult from "./xmjs_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: 'http://dlf.test/api/sjfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmjsCounterGuo,
			baseLayout,
			computing,
			xmjsResult
		}
	}
</script>

<style>

</style>
