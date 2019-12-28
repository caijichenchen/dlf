<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfjilin-counter-guo></jlfjilin-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfjilin-result></jlfjilin-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfjilinCounterGuo from "./jlfjilin_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfjilinResult from "./jlfjilin_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfJilin',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfjilinCounterGuo,
			baseLayout,
			computing,
			jlfjilinResult
		}
	}
</script>

<style>

</style>
