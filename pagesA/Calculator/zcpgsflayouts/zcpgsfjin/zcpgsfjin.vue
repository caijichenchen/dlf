<template>
	<base-layout :detailId="1505">
		<template v-slot:jsq>
			<zcpgsf-counter-jin></zcpgsf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJin from "./zcpgsf_counter_jin.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJin',  //api请求
					count:2  //积分消耗
				},
				title: '山西'
			}
		},
		components:{
			zcpgsfCounterJin,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
