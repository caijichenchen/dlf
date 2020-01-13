<template>
	<base-layout :detailId='286'>
		<template v-slot:jsq>
			<sgtscf-counter-chuan></sgtscf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterChuan from "./sgtscf_counter_chuan.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfChuan',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterChuan,
			sgtscfResult
		}
	}
</script>

<style>

</style>
