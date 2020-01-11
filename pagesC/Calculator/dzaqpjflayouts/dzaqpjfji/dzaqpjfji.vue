<template>
	<base-layout :detailId="1599">
		<template v-slot:jsq>
			<dzaqpjf-counter-ji></dzaqpjf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterJi from "./dzaqpjf-counter_ji.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfJi',  //api请求
					count:4  //积分消耗
				},
				title:'河北'
			}
		},
		components:{
			dzaqpjfCounterJi,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
