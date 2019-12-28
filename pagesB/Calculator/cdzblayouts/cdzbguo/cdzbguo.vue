<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<cdzb-counter-guo></cdzb-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<cdzb-result></cdzb-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import cdzbCounterGuo from "./cdzb_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import cdzbResult from "./cdzb_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/cdzbGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			cdzbCounterGuo,
			baseLayout,
			computing,
			cdzbResult
		}
	}
</script>

<style>

</style>
