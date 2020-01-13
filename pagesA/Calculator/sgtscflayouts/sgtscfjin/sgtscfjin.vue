<template>
	<base-layout :detailId="1556">
		<template v-slot:jsq>
			<sgtscf-counter-jin></sgtscf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterJin from "./sgtscf_counter_jin.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfJin',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterJin,
			sgtscfResult
		}
	}
</script>

<style>

</style>
