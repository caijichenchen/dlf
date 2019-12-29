<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1889">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<pppxmzx-counter-jin></pppxmzx-counter-jin>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<pppxmzx-result :title="title"></pppxmzx-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import pppxmzxCounterJin from "./pppxmzx_counter_jin.vue"
	import computing from "@/common/base/computing.vue"
	import pppxmzxResult from "../pppxmzx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxJin',  //api请求
					count:2  //积分消耗
				},
				title:'山西'
			}
		},
		methods: {
			
		},
		components:{
			pppxmzxCounterJin,
			baseLayout,
			computing,
			pppxmzxResult
		}
	}
</script>

<style>

</style>
