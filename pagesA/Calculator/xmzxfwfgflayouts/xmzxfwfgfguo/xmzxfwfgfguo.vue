<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xmzxfwfgf-counter-guo></xmzxfwfgf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xmzxfwfgf-result></xmzxfwfgf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xmzxfwfgfCounterGuo from "./xmzxfwfgf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import xmzxfwfgfResult from "./xmzxfwfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmzxfwfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmzxfwfgfCounterGuo,
			baseLayout,
			computing,
			xmzxfwfgfResult
		}
	}
</script>

<style>

</style>
