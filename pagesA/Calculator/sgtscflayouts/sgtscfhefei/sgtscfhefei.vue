<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="320">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<sgtscf-counter-hefei></sgtscf-counter-hefei>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<sgtscf-result></sgtscf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import sgtscfCounterHefei from "./sgtscf_counter_hefei.vue"
	import computing from "@/common/base/computing.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHefei',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterHefei,
			baseLayout,
			computing,
			sgtscfResult
		}
	}
</script>

<style>

</style>
