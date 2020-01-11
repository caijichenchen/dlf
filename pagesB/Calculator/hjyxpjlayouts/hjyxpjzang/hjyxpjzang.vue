<template>
	<base-layout :detailId="1568">
		<template v-slot:jsq>
			<hjyxpjf-counter-zang></hjyxpjf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterZang from "./hjyxpj_counter_zang.vue"
	import hjyxpjfResult from "../hjyxpjf_result"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjZang',  //api请求
					count:2  //积分消耗
				},
				title:'西藏'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterZang,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
