<template>
	<base-layout :detailId="1045">
		<template v-slot:jsq>
			<jnpgf-counter-zhe></jnpgf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<jnpgf-result></jnpgf-result>
		</template>
	</base-layout>
</template>

<script>
	import jnpgfCounterZhe from "./jnpgf_counter_zhe.vue"
	import jnpgfResult from "./jnpgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jnpgfZhe',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jnpgfCounterZhe,
			jnpgfResult
		}
	}
</script>

<style>

</style>
