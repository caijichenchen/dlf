<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<txgckcf-counter-guo></txgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<txgckcf-result></txgckcf-result>
		</template>
	</base-layout>
</template>

<script>
	import txgckcfCounterGuo from "./txgckcf-counter_guo.vue"
	import txgckcfResult from "./txgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl +'/api/txgckcfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			txgckcfCounterGuo,
			txgckcfResult
		}
	}
</script>

<style>
</style>
