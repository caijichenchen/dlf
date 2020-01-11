<template>
	<base-layout :detailId="1727">
		<template v-slot:jsq>
			<jsjyfwf-counter-long></jsjyfwf-counter-long>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterLong from "./jsjyfwf_counter_long.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfLong',  //api请求
					count:1  //积分消耗
				},
				title:'甘肃'
			}
		},
		components:{
			jsjyfwfCounterLong,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
