<template>
	<base-layout :detailId="248">
		<template v-slot:jsq>
			<sgtscf-counter-ji></sgtscf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterJi from "./sgtscf_counter_ji.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfJi',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterJi,
			sgtscfResult
		}
	}
</script>

<style>

</style>
