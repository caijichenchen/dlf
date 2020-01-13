<template>
	<base-layout :detailId='120'>
		<template v-slot:jsq>
			<sgtscf-counter-e></sgtscf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterE from "./sgtscf_counter_e.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfE',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterE,
			sgtscfResult
		}
	}
</script>

<style>

</style>
