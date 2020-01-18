<template>
	<base-layout :detailId="282">
		<template v-slot:jsq>
			<zcpgsf-counter-liao></zcpgsf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterLiao from "./zcpgsf_counter_liao.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfLiao',  //api请求
					count:2  //积分消耗
				},
				title:'辽宁'
			}
		},
		components:{
			zcpgsfCounterLiao,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
