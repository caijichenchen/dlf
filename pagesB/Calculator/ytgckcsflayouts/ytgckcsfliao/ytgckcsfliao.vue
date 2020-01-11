<template>
	<base-layout :detailId="1632">
		<template v-slot:jsq>
			<ytgckcsf-counter-liao></ytgckcsf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<ytgckcsf-result></ytgckcsf-result>
		</template>
	</base-layout>
</template>

<script>
	import ytgckcsfCounterLiao from "./ytgckcsf-counter_liao.vue"
	import ytgckcsfResult from "./ytgckcsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgckcsfLiao',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgckcsfCounterLiao,
			ytgckcsfResult
		}
	}
</script>

<style>
</style>
