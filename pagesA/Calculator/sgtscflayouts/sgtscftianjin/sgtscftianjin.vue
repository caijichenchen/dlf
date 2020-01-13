<template>
	<base-layout :detailId="252">
		<template v-slot:jsq>
			<sgtscf-counter-tianjin></sgtscf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterTianjin from "./sgtscf_counter_tianjin.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfTianjin',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterTianjin,
			sgtscfResult
		}
	}
</script>

<style>

</style>
