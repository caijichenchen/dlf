<template>
	<base-layout :detailId="1590">
		<template v-slot:jsq>
			<dzaqpjf-counter-jing></dzaqpjf-counter-jing>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterJing from "./dzaqpjf-counter_jing.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfJing',  //api请求
					count:4  //积分消耗
				},
				title:'北京'
			}
		},
		components:{
			dzaqpjfCounterJing,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
