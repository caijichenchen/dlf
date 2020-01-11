<template>
	<base-layout :detailId="1650">
		<template v-slot:jsq>
			<hjyxpjf-counter-meng></hjyxpjf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterMeng from "./hjyxpj_counter_meng.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjMeng',  //api请求
					count:2  //积分消耗
				},
				title:'内蒙古'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterMeng,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
