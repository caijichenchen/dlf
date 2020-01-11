<template>
	<base-layout :detailId="1660">
		<template v-slot:jsq>
			<hjyxpjf-counter-zhe></hjyxpjf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterZhe from "./hjyxpj_counter_zhe.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjZhe',  //api请求
					count:2  //积分消耗
				},
				title:'浙江'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterZhe,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
