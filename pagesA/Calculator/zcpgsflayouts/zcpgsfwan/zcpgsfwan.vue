<template>
	<base-layout :detailId="313">
		<template v-slot:jsq>
			<zcpgsf-counter-wan></zcpgsf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterWan from "./zcpgsf_counter_wan.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfWan',  //api请求
					count:2  //积分消耗
				},
				title: '安徽'
			}
		},
		components:{
			zcpgsfCounterWan,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
