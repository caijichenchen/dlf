<template>
	<base-layout :detailId="1695">
		<template v-slot:jsq>
			<jsjyfwf-counter-qiong></jsjyfwf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterQiong from "./jsjyfwf_counter_qiong.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfQiong',  //api请求
					count:1  //积分消耗
				},
				title:'海南'
			}
		},
		components:{
			jsjyfwfCounterQiong,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
