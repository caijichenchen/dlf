<template>
	<base-layout :detailId="1528">
		<template v-slot:jsq>
			<zjzxf-counter-changge :title="title"></zjzxf-counter-changge>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterChangge from "./zjzxf-counter_changge.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfChangge',  //api请求
					count:2  //积分消耗
				},
				title: "长葛造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterChangge,
			zjzxfResult
		}
	}
</script>

<style>
</style>
