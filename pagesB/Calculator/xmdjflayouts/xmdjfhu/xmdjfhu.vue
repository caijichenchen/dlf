<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<djglf-counter-hu></djglf-counter-hu>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<djglf-result></djglf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import djglfCounterHu from "./djglf_counter_hu.vue"
	import computing from "@/common/base/computing.vue"
	import djglfResult from "./djglf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/djglfHu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			djglfCounterHu,
			baseLayout,
			computing,
			djglfResult
		}
	}
</script>

<style>

</style>
