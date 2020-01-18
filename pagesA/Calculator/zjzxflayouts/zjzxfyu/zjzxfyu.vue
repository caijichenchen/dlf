<template>
	<base-layout :detailId='111'>
		<template v-slot:jsq>
			<zjzxf-counter-yu :title="title"></zjzxf-counter-yu>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterYu from "./zjzxf-counter_yu.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYu',  //api请求
					count:2  //积分消耗
				},
				title: "河南省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterYu,
			zjzxfResult
		}
	}
</script>

<style>
</style>
