<template>
	<base-layout :detailId="1588">
		<template v-slot:jsq>
			<jsjyfwf-counter-jing></jsjyfwf-counter-jing>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterJing from "./jsjyfwf_counter_jing.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfJing',  //api请求
					count:1  //积分消耗
				},
				title:'北京市'
			}
		},
		components:{
			jsjyfwfCounterJing,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
