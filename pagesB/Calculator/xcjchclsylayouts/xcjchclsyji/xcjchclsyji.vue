<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xcjchclsy-counter-ji></xcjchclsy-counter-ji>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xcjchclsy-result></xcjchclsy-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xcjchclsyCounterJi from "./xcjchclsy_counter_ji.vue"
	import computing from "@/common/base/computing.vue"
	import xcjchclsyResult from "./xcjchclsy_result.vue"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyJi',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xcjchclsyCounterJi,
			uniTag,
			baseLayout,
			computing,
			xcjchclsyResult
		}
	}
</script>

<style>

</style>
