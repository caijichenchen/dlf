<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<ldaqwsps-counter-guo></ldaqwsps-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<ldaqwsps-result></ldaqwsps-result>
		</template>
	</base-layout>
</template>

<script>
	import ldaqwspsCounterGuo from "./ldaqwsps_counter_guo.vue"
	import ldaqwspsResult from "./ldaqwsps_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/ldaqwspsGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ldaqwspsCounterGuo,
			ldaqwspsResult
		}
	}
</script>

<style>

</style>
