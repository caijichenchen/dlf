<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1039">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xcjchclsy-counter-yue></xcjchclsy-counter-yue>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xcjchclsy-result></xcjchclsy-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xcjchclsyCounterYue from "./xcjchclsy_counter_yue.vue"
	import computing from "@/common/base/computing.vue"
	import xcjchclsyResult from "./xcjchclsy_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyYue',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xcjchclsyCounterYue,
			baseLayout,
			computing,
			xcjchclsyResult
		}
	}
</script>

<style>

</style>
