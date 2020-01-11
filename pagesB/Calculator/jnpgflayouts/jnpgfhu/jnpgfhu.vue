<template>
	<base-layout :detailId="1021">
		<template v-slot:jsq>
			<jnpgf-counter-hu></jnpgf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<jnpgf-result></jnpgf-result>
		</template>
	</base-layout>
</template>

<script>
	import jnpgfCounterHu from "./jnpgf_counter_hu.vue"
	import jnpgfResult from "./jnpgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jnpgfHu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jnpgfCounterHu,
			jnpgfResult
		}
	}
</script>

<style>

</style>
