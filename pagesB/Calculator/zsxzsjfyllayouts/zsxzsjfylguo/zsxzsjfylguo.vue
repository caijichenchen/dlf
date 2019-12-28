<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zsxzsjfyl-counter-guo></zsxzsjfyl-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zsxzsjfyl-result></zsxzsjfyl-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zsxzsjfylCounterGuo from "./zsxzsjfyl_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import zsxzsjfylResult from "./zsxzsjfyl_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zsxzsjfylGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			zsxzsjfylCounterGuo,
			baseLayout,
			computing,
			zsxzsjfylResult
		}
	}
</script>

<style>

</style>
