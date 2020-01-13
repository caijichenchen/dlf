<template>
	<base-layout :detailId="1688">
		<template v-slot:jsq>
			<sgtscf-counter-su></sgtscf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterSu from "./sgtscf_counter_su.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfSu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterSu,
			sgtscfResult
		}
	}
</script>

<style>

</style>
