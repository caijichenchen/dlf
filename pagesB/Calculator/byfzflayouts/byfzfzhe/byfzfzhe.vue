<template>
	<base-layout :detailId="1656">
		<template v-slot:jsq>
			<byfzf-counter-zhe></byfzf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<byfzf-result></byfzf-result>
		</template>
	</base-layout>
</template>

<script>
	import byfzfCounterZhe from "./byfzf_counter_zhe.vue"
	import byfzfResult from "./byfzf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/byfzfZhe',  //api请求
					count:1  //积分消耗
				}
			}
		},
		components:{
			byfzfCounterZhe,
			byfzfResult
		}
	}
</script>

<style>

</style>
