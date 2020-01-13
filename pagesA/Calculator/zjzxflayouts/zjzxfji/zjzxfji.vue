<template>
	<base-layout :detailId="959">
		<template v-slot:jsq>
			<zjzxf-counter-ji :title="title"></zjzxf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJi from "./zjzxf-counter_ji.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJi',  //api请求
					count:2  //积分消耗
				},
				title: "河北造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterJi,
			zjzxfResult
		}
	}
</script>

<style>
</style>
