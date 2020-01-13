<template>
	<base-layout :detailId="114">
		<template v-slot:jsq>
			<zjzxf-counter-jilin :title="title"></zjzxf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJilin from "./zjzxf-counter_jilin.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJilin',  //api请求
					count:2  //积分消耗
				},
				title: "吉林省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterJilin,
			zjzxfResult
		}
	}
</script>

<style>
</style>
