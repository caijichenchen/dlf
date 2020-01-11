<template>
	<base-layout :detailId="1619">
		<template v-slot:jsq>
			<jsjyfwf-counter-ji></jsjyfwf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterJi from "./jsjyfwf_counter_ji.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfJi',  //api请求
					count:1  //积分消耗
				},
				title:'河北省'
			}
		},
		components:{
			jsjyfwfCounterJi,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
