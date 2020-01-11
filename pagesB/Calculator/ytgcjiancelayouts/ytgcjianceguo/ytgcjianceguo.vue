<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcjiance-counter-guo></ytgcjiance-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<ytgcjiance-result></ytgcjiance-result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcjianceCounterGuo from "./ytgcjiance-counter_guo.vue"
	import ytgcjianceResult from "./ytgcjiance_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcjianceGuo',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgcjianceCounterGuo,
			ytgcjianceResult
		}
	}
</script>

<style>
</style>
