<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<gcsyclsf-counter-guo></gcsyclsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<gcsyclsf-result></gcsyclsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcsyclsfCounterGuo from "./gcsyclsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcsyclsfResult from "./gcsyclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcsyclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcsyclsfCounterGuo,
			baseLayout,
			computing,
			gcsyclsfResult
		}
	}
</script>

<style>
</style>
