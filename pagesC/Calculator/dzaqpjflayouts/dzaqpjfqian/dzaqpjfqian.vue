<template>
	<base-layout :detailId="1700">
		<template v-slot:jsq>
			<dzaqpjf-counter-qian></dzaqpjf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterQian from "./dzaqpjf-counter_qian.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfQian',  //api请求
					count:4  //积分消耗
				},
				title:'贵州'
			}
		},
		components:{
			dzaqpjfCounterQian,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
