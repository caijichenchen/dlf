<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-gui></zbdlf-counter-gui>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-result :titl="title"></zbdlf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterGui from "./zbdlf_counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		components:{
			zbdlfCounterGui,
			baseLayout,
			computing,
			zbdlfResult
		}
	}
</script>

<style>

</style>
