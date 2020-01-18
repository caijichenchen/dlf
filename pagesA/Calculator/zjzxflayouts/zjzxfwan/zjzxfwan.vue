<template>
	<base-layout :detailId='905'>
		<template v-slot:jsq>
			<zjzxf-counter-wan :title="title"></zjzxf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterWan from "./zjzxf-counter_wan.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfWan',  //api请求
					count:2  //积分消耗
				},
				title: "安徽造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterWan,
			zjzxfResult
		}
	}
</script>

<style>
</style>
