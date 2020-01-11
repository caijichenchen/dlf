<template>
	<base-layout :detailId="1692">
		<template v-slot:jsq>
			<jsjyfwf-counter-e></jsjyfwf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterE from "./jsjyfwf_counter_e.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfE',  //api请求
					count:1  //积分消耗
				},
				title:'湖北省'
			}
		},
		components:{
			jsjyfwfCounterE,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
