<template>
	<base-layout :detailId="1781">
		<template v-slot:jsq>
			<jzzssjsf-counter-guo></jzzssjsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jzzssjsf-result></jzzssjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import jzzssjsfCounterGuo from "./jzzssjsf-counter_guo.vue"
	import jzzssjsfResult from "./jzzssjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jzzssjsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jzzssjsfCounterGuo,
			jzzssjsfResult
		}
	}
</script>

<style>
</style>
