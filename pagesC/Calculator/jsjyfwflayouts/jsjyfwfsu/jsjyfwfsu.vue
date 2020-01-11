<template>
	<base-layout :detailId="1671">
		<template v-slot:jsq>
			<jsjyfwf-counter-su></jsjyfwf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterSu from "./jsjyfwf_counter_su.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfSu',  //api请求
					count:1  //积分消耗
				},
				title:'江苏'
			}
		},
		components:{
			jsjyfwfCounterSu,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
