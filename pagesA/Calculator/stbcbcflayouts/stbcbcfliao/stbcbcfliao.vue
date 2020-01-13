<template>
	<base-layout :detailId="1628">
		<template v-slot:jsq>
			<stbcbcf-counter-liao></stbcbcf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterLiao from "./stbcbcf_counter_liao.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfLiao',  //api请求
					count:1  //积分消耗
				},
				title:'辽宁省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterLiao,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
