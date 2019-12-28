<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xmdjf-counter-xiang></xmdjf-counter-xiang>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xmdjf-result></xmdjf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xmdjfCounterXiang from "./xmdjf_counter_xiang.vue"
	import computing from "@/common/base/computing.vue"
	import xmdjfResult from "./xmdjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmdjfXiang',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmdjfCounterXiang,
			baseLayout,
			computing,
			xmdjfResult
		}
	}
</script>

<style>

</style>
