<template>
	<base-layout :detailId="1582">
		<template v-slot:jsq>
			<jlfwan-counter-guo></jlfwan-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jlfwan-result></jlfwan-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfwanCounterGuo from "./jlfwan_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfwanResult from "./jlfwan_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfWan',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfwanCounterGuo,
			baseLayout,
			computing,
			jlfwanResult
		}
	}
</script>

<style>

</style>
