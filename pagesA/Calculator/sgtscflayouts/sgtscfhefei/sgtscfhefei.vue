<template>
	<base-layout :detailId="320">
		<template v-slot:jsq>
			<sgtscf-counter-hefei></sgtscf-counter-hefei>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHefei from "./sgtscf_counter_hefei.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHefei',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterHefei,
			sgtscfResult
		}
	}
</script>

<style>

</style>
