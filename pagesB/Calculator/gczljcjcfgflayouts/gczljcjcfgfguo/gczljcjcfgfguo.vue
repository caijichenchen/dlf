<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gczljcjcfgf-counter-guo></gczljcjcfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gczljcjcfgf-result></gczljcjcfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import gczljcjcfgfCounterGuo from "./gczljcjcfgf_counter_guo.vue"
	import gczljcjcfgfResult from "./gczljcjcfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gczljcjcfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gczljcjcfgfCounterGuo,
			gczljcjcfgfResult
		}
	}
</script>

<style>

</style>
