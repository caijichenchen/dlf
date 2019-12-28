<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfmeng-counter-guo></jlfmeng-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfmeng-result></jlfmeng-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfmengCounterGuo from "./jlfmeng_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfmengResult from "./jlfmeng_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfMeng',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfmengCounterGuo,
			baseLayout,
			computing,
			jlfmengResult
		}
	}
</script>

<style>

</style>
