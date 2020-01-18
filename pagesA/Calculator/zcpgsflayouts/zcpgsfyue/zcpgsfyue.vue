<template>
	<base-layout :detailId="264">
		<template v-slot:jsq>
			<zcpgsf-counter-yue></zcpgsf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterYue from "./zcpgsf_counter_yue.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfYue',  //api请求
					count:2  //积分消耗
				},
				title:'广东'
			}
		},
		components:{
			zcpgsfCounterYue,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
