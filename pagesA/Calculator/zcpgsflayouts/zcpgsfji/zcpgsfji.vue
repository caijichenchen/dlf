<template>
	<base-layout :detailId="1617">
		<template v-slot:jsq>
			<zcpgsf-counter-ji></zcpgsf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJi from "./zcpgsf_counter_ji.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJi',  //api请求
					count:2  //积分消耗
				},
				title:'河北'
			}
		},
		components:{
			zcpgsfCounterJi,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
