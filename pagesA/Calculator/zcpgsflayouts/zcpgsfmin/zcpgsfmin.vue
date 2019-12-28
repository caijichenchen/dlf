<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1557">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zcpgsf-counter-min></zcpgsf-counter-min>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zcpgsfCounterMin from "./zcpgsf_counter_min.vue"
	import computing from "@/common/base/computing.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfMin',  //api请求
					count:2  //积分消耗
				},
				title:'福建'
			}
		},
		components:{
			zcpgsfCounterMin,
			baseLayout,
			computing,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
