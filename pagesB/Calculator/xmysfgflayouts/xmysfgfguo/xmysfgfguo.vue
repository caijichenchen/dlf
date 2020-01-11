<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<xmysfgf-counter-guo></xmysfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<xmysfgf-result></xmysfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import xmysfgfCounterGuo from "./xmysfgf_counter_guo.vue"
	import xmysfgfResult from "./xmysfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmysfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmysfgfCounterGuo,
			xmysfgfResult
		}
	}
</script>

<style>

</style>
