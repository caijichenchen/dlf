<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="329">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfgszf-counter-guo></jlfgszf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfgszf-result></jlfgszf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfgszfCounterGuo from "./jlfgszf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfgszfResult from "./jlfgszf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGszf',  //api请求
					count:3 //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfgszfCounterGuo,
			baseLayout,
			computing,
			jlfgszfResult
		}
	}
</script>

<style>

</style>
