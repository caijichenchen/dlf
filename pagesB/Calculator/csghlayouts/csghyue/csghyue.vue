<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<csgh-counter-yue></csgh-counter-yue>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<csgh-result></csgh-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csghCounterYue from "./csgh-counter_yue.vue"
	import computing from "@/common/base/computing.vue"
	import csghResult from "./csgh_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/csghYue',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			csghCounterYue,
			baseLayout,
			computing,
			csghResult
		}
	}
</script>

<style>
</style>
