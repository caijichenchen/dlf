<template>
	<base-layout :detailId="1820">
		<template v-slot:jsq>
			<jsjyfwf-counter-ba></jsjyfwf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterBa from "./jsjyfwf_counter_ba.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfBa',  //api请求
					count:1  //积分消耗
				},
				title:'重庆市'
			}
		},
		components:{
			jsjyfwfCounterBa,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
