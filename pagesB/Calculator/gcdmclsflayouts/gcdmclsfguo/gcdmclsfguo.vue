<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcdmclsf-counter-guo></gcdmclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcdmclsf-result></gcdmclsf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcdmclsfCounterGuo from "./gcdmclsf-counter_guo.vue"
	import gcdmclsfResult from "./gcdmclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcdmclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcdmclsfCounterGuo,
			gcdmclsfResult
		}
	}
</script>

<style>
</style>
