<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="977">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfyu-counter-guo></jlfyu-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfyu-result></jlfyu-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfyuCounterGuo from "./jlfyu_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfyuResult from "./jlfyu_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfYu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfyuCounterGuo,
			baseLayout,
			computing,
			jlfyuResult
		}
	}
</script>

<style>

</style>
