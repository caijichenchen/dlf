<template>
	<base-layout :detailId="1624">
		<template v-slot:jsq>
			<stbcbcf-counter-jin></stbcbcf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterJin from "./stbcbcf_counter_jin.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfJin',  //api请求
					count:1  //积分消耗
				},
				title:山西省
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterJin,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
