<template>
	<base-layout :detailId="253">
		<template v-slot:jsq>
			<sgtscf-counter-min></sgtscf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterMin from "./sgtscf_counter_min.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfMin',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterMin,
			sgtscfResult
		}
	}
</script>

<style>

</style>
