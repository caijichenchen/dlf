<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<gcbxfgf-counter-guo></gcbxfgf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<gcbxfgf-result></gcbxfgf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcbxfgfCounterGuo from "./gcbxfgf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcbxfgfResult from "./gcbxfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcbxfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcbxfgfCounterGuo,
			baseLayout,
			computing,
			gcbxfgfResult
		}
	}
</script>

<style>

</style>
