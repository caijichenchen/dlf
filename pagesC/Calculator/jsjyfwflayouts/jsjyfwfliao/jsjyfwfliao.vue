<template>
	<base-layout :detailId="1630">
		<template v-slot:jsq>
			<jsjyfwf-counter-liao></jsjyfwf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterLiao from "./jsjyfwf_counter_liao.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfLiao',  //api请求
					count:1  //积分消耗
				},
				title:'辽宁省'
			}
		},
		components:{
			jsjyfwfCounterLiao,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
