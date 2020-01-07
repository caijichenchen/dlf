<template>
	<base-layout :detailId="1035">
		<template v-slot:jsq>
			<jlfchuan-counter-guo></jlfchuan-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jlfchuan-result></jlfchuan-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfchuanCounterGuo from "./jlfchuan_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfchuanResult from "./jlfchuan_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfChuan',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfchuanCounterGuo,
			baseLayout,
			computing,
			jlfchuanResult
		}
	}
</script>

<style>

</style>
