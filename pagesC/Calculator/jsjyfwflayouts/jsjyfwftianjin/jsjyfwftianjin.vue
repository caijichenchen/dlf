<template>
	<base-layout :detailId="1572">
		<template v-slot:jsq>
			<jsjyfwf-counter-tianjin></jsjyfwf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterTianjin from "./jsjyfwf_counter_tianjin.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfTianjin',  //api请求
					count:1  //积分消耗
				},
				title:'天津市'
			}
		},
		components:{
			jsjyfwfCounterTianjin,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
