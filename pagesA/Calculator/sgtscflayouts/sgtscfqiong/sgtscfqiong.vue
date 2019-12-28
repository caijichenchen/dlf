<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="246">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<sgtscf-counter-qiong></sgtscf-counter-qiong>
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
	import sgtscfCounterQiong from "./sgtscf_counter_qiong.vue"
	import computing from "@/common/base/computing.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQiong',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterQiong,
			baseLayout,
			computing,
			sgtscfResult
		}
	}
</script>

<style>

</style>
