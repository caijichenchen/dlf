<template>
	<base-layout :detailId="283">
		<template v-slot:jsq>
			<zcpgsf-counter-lu></zcpgsf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterLu from "./zcpgsf_counter_lu.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfLu',  //api请求
					count:2  //积分消耗
				},
				title:'山东'
			}
		},
		components:{
			zcpgsfCounterLu,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
