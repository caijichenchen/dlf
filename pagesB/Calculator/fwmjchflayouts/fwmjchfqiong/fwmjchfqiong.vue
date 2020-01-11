<template>
	<base-layout :detailId="273">
		<template v-slot:jsq>
			<fwmjchf-counter-qiong></fwmjchf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<fwmjchf-result></fwmjchf-result>
		</template>
	</base-layout>
</template>

<script>
	import fwmjchfCounterQiong from "./fwmjchf-counter_qiong.vue"
	import fwmjchfResult from "./fwmjchf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fwmjchfQiong',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			fwmjchfCounterQiong,
			fwmjchfResult
		}
	}
</script>

<style>
</style>
