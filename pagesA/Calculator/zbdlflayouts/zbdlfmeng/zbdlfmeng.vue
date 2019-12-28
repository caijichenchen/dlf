<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="266">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-meng></zbdlf-counter-meng>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-meng-result :title="title"></zbdlf-meng-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterMeng from "./zbdlf_counter_meng.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfMengResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfMeng',  //api请求
					count:2  //积分消耗
				},
				title:'内蒙古'
			}
		},
		components:{
			zbdlfCounterMeng,
			baseLayout,
			computing,
			zbdlfMengResult
		}
	}
</script>

<style>

</style>
