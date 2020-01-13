<template>
	<base-layout :detailId='1420'>
		<template v-slot:jsq>
			<zjzxf-counter-min :title="title"></zjzxf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterMin from "./zjzxf-counter_min.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfMin',  //api请求
					count:2  //积分消耗
				},
				title: "福建省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterMin,
			zjzxfResult
		}
	}
</script>

<style>
</style>
