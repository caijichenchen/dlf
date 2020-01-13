<template>
	<base-layout :detailId="322">
		<template v-slot:jsq>
			<sgtscf-counter-zhe></sgtscf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterZhe from "./sgtscf_counter_zhe.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfZhe',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterZhe,
			sgtscfResult
		}
	}
</script>

<style>

</style>
