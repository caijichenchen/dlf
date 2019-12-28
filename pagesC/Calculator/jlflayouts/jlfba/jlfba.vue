<template>
	<base-layout :detailId="952">
		<template v-slot:jsq>
			<jlfba-counter-guo></jlfba-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jlfba-result></jlfba-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfbaCounterGuo from "./jlfba_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfbaResult from "./jlfba_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfBa',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfbaCounterGuo,
			baseLayout,
			computing,
			jlfbaResult
		}
	}
</script>

<style>

</style>
