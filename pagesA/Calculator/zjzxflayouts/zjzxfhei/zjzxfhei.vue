<template>
	<base-layout :detailId="112">
		<template v-slot:jsq>
			<zjzxf-counter-hei :title="title"></zjzxf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterHei from "./zjzxf-counter_hei.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfHei',  //api请求
					count:2  //积分消耗
				},
				title: "黑龙江造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterHei,
			zjzxfResult
		}
	}
</script>

<style>
</style>
