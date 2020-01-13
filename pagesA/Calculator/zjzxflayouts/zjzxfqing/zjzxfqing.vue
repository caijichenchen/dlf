<template>
	<base-layout :detailId='1491'>
		<template v-slot:jsq>
			<zjzxf-counter-qing :title="title"></zjzxf-counter-qing>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQing from "./zjzxf-counter_qing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQing',  //api请求
					count:2  //积分消耗
				},
				title: "青海造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterQing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
