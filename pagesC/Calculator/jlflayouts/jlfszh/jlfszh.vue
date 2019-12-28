<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="232">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfszh-counter-guo></jlfszh-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfszh-result></jlfszh-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfszhCounterGuo from "./jlfszh_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfszhResult from "./jlfszh_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfSzh',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfszhCounterGuo,
			baseLayout,
			computing,
			jlfszhResult
		}
	}
</script>

<style>

</style>
