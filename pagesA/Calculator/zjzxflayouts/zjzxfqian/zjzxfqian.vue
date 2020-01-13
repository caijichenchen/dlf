<template>
	<base-layout :detailId='109'>
		<template v-slot:jsq>
			<zjzxf-counter-qian :title="title"></zjzxf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQian from "./zjzxf-counter_qian.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQian',  //api请求
					count:2  //积分消耗
				},
				title: "贵州省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterQian,
			zjzxfResult
		}
	}
</script>

<style>
</style>
