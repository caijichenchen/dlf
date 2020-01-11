<template>
	<base-layout :detailId="1663">
		<template v-slot:jsq>
			<jsjyfwf-counter-zhe></jsjyfwf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterZhe from "./jsjyfwf_counter_zhe.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfZhe',  //api请求
					count:1  //积分消耗
				},
				title:'浙江省'
			}
		},
		components:{
			jsjyfwfCounterZhe,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
