<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="327">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfxiang-counter-guo></jlfxiang-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfxiang-result></jlfxiang-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfxiangCounterGuo from "./jlfxiang_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfxiangResult from "./jlfxiang_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfXiang',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfxiangCounterGuo,
			baseLayout,
			computing,
			jlfxiangResult
		}
	}
</script>

<style>

</style>
