<template>
	<base-layout :detailId="1644">
		<template v-slot:jsq>
			<sgtscf-counter-hei></sgtscf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHei from "./sgtscf_counter_hei.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHei',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterHei,
			sgtscfResult
		}
	}
</script>

<style>

</style>
