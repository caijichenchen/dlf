<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<xmzxfwfgf-counter-guo></xmzxfwfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<xmzxfwfgf-result></xmzxfwfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import xmzxfwfgfCounterGuo from "./xmzxfwfgf_counter_guo.vue"
	import xmzxfwfgfResult from "./xmzxfwfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmzxfwfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmzxfwfgfCounterGuo,
			xmzxfwfgfResult
		}
	}
</script>

<style>

</style>
