<template>
	<base-layout :detailId="1638">
		<template v-slot:jsq>
			<zcpgsf-counter-jilin></zcpgsf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJilin from "./zcpgsf_counter_jilin.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJilin',  //api请求
					count:2  //积分消耗
				},
				title:'吉林'
			}
		},
		components:{
			zcpgsfCounterJilin,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
