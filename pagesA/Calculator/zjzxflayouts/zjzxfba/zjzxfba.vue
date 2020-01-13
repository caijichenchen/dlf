<template>
	<base-layout :detailId="1063">
		<template v-slot:jsq>
			<zjzxf-counter-ba :title="title"></zjzxf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterBa from "./zjzxf-counter_ba.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfBa',  //api请求
					count:2  //积分消耗
				},
				title: "重庆造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterBa,
			zjzxfResult
		}
	}
</script>

<style>
</style>
