<template>
	<base-layout :detailId="1691">
		<template v-slot:jsq>
			<jsjyfwf-counter-xiang></jsjyfwf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterXiang from "./jsjyfwf_counter_xiang.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfXiang',  //api请求
					count:1  //积分消耗
				},
				title:'湖南省'
			}
		},
		components:{
			jsjyfwfCounterXiang,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
