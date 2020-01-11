<template>
	<base-layout :detailId="271">
		<template v-slot:jsq>
			<dzaqpjf-counter-qiong></dzaqpjf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterQiong from "./dzaqpjf-counter_qiong.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfQiong',  //api请求
					count:4  //积分消耗
				},
				title:'海南'
			}
		},
		components:{
			dzaqpjfCounterQiong,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
