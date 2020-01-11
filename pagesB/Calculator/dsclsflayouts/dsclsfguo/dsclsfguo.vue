<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dsclsf-counter-guo></dsclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<dsclsf-result></dsclsf-result>
		</template>
	</base-layout>
</template>

<script>
	import dsclsfCounterGuo from "./dsclsf-counter_guo.vue"
	import dsclsfResult from "./dsclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dsclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			dsclsfCounterGuo,
			dsclsfResult
		}
	}
</script>

<style>
</style>
