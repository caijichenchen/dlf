<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcjc-counter-guo></ytgcjc-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<ytgcjc-result></ytgcjc-result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcjcCounterGuo from "./ytgcjc-counter_guo.vue"
	import ytgcjcResult from "./ytgcjc_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcjcGuo',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgcjcCounterGuo,
			ytgcjcResult
		}
	}
</script>

<style>
</style>
