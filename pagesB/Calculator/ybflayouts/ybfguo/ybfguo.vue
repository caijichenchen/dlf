<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<ybf-counter-guo></ybf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<ybf-result></ybf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import ybfCounterGuo from "./ybf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import ybfResult from "./ybf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ybfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ybfCounterGuo,
			baseLayout,
			computing,
			ybfResult
		}
	}
</script>

<style>
</style>
