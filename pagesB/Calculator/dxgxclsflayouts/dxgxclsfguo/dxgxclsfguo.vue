<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dxgxclsf-counter-guo></dxgxclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<dxgxclsf-result></dxgxclsf-result>
		</template>
	</base-layout>
</template>

<script>
	import dxgxclsfCounterGuo from "./dxgxclsf-counter_guo.vue"
	import dxgxclsfResult from "./dxgxclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dxgxclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			dxgxclsfCounterGuo,
			dxgxclsfResult
		}
	}
</script>

<style>
</style>
