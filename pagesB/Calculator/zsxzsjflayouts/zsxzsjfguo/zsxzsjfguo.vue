<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="136">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zsxzsjf-counter-guo></zsxzsjf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zsxz-result></zsxz-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zsxzsjfCounterGuo from "./zsxzsjf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import zsxzResult from "./zsxz_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/sjfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			zsxzsjfCounterGuo,
			baseLayout,
			computing,
			zsxzResult
		}
	}
</script>

<style>

</style>
