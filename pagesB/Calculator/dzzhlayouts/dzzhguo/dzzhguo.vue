<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dzzh-counter-guo></dzzh-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dzzh-result></dzzh-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dzzhCounterGuo from "./dzzh-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import dzzhResult from "./dzzh_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzzhGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		components:{
			dzzhCounterGuo,
			baseLayout,
			computing,
			dzzhResult
		}
	}
</script>

<style>
</style>
