<template>
	<base-layout :detailId="117">
		<template v-slot:jsq>
			<zjzxf-counter-chuan :title="title"></zjzxf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterChuan from "./zjzxf-counter_chuan.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfChuan',  //api请求
					count:2  //积分消耗
				},
				title: "四川省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterChuan,
			zjzxfResult
		}
	}
</script>

<style>
</style>
