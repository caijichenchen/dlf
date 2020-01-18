<template>
	<base-layout :detailId='120'>
		<template v-slot:jsq>
			<zjzxf-counter-zhe :title="title"></zjzxf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterZhe from "./zjzxf-counter_zhe.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfZhe',  //api请求
					count:2  //积分消耗
				},
				title: "浙江省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterZhe,
			zjzxfResult
		}
	}
</script>

<style>
</style>
