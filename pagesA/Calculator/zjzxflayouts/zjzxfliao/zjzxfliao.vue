<template>
	<base-layout :detailId="1487">
		<template v-slot:jsq>
			<zjzxf-counter-liao :title="title"></zjzxf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterLiao from "./zjzxf-counter_liao.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfLiao',  //api请求
					count:2  //积分消耗
				},
				title: "辽宁省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterLiao,
			zjzxfResult
		}
	}
</script>

<style>
</style>
