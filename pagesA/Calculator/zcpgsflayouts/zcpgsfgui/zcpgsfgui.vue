<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1597">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zcpgsf-counter-gui></zcpgsf-counter-gui>
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
	import zcpgsfCounterGui from "./zcpgsf_counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		components:{
			zcpgsfCounterGui,
			baseLayout,
			computing,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
