<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<qtsssysf-counter-guo></qtsssysf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<qtsssysf-result></qtsssysf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import qtsssysfCounterGuo from "./qtsssysf-counter-guo.vue"
	import computing from "@/common/base/computing.vue"
	import qtsssysfResult from "./qtsssysf-result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/qtsssysfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			qtsssysfCounterGuo,
			baseLayout,
			computing,
			qtsssysfResult
		}
	}
</script>

<style>

</style>
