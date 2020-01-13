<template>
	<base-layout :detailId="1651">
		<template v-slot:jsq>
			<sgtscf-counter-hu></sgtscf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHu from "./sgtscf_counter_hu.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHu',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterHu,
			sgtscfResult
		}
	}
</script>

<style>

</style>
