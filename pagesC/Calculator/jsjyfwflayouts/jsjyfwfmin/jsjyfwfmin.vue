<template>
	<base-layout :detailId="1680">
		<template v-slot:jsq>
			<jsjyfwf-counter-min></jsjyfwf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterMin from "./jsjyfwf_counter_min.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfMin',  //api请求
					count:1  //积分消耗
				},
				title:'福建省'
			}
		},
		components:{
			jsjyfwfCounterMin,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
