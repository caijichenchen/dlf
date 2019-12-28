<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<pdldzj-counter-guo></pdldzj-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<pdldzj-result></pdldzj-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import pdldzjCounterGuo from "./pdldzj_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import pdldzjResult from "./pdldzj_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pdldzjGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			pdldzjCounterGuo,
			baseLayout,
			computing,
			pdldzjResult
		}
	}
</script>

<style>

</style>
