<template>
	<base-layout :detailId='153'>
		<template v-slot:jsq>
			<sgtscf-counter-guo></sgtscf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
		
	</base-layout>
</template>

<script>
	import sgtscfCounterGuo from "./sgtscf_counter_guo.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterGuo,
			sgtscfResult
		}
	}
</script>

<style>

</style>
