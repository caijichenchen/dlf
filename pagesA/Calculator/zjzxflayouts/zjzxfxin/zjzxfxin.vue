<template>
	<base-layout :detailId="1493">
		<template v-slot:jsq>
			<zjzxf-counter-xin :title="title"></zjzxf-counter-xin>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterXin from "./zjzxf-counter_xin.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfXin',  //api请求
					count:2  //积分消耗
				},
				title: "新疆造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterXin,
			zjzxfResult
		}
	}
</script>

<style>
</style>
