<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dlgckcf-counter-guo></dlgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<dlgckcf-result></dlgckcf-result>
		</template>
	</base-layout>
</template>

<script>
	import dlgckcfCounterGuo from "./dlgckcf_counter_guo.vue"
	import dlgckcfResult from "./dlgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/dlgckcGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			dlgckcfCounterGuo,
			dlgckcfResult
		}
	}
</script>

<style>

</style>
