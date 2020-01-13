<template>
	<base-layout :detailId="1488">
		<template v-slot:jsq>
			<zjzxf-counter-lu :title="title"></zjzxf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterLu from "./zjzxf-counter_lu.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfLu',  //api请求
					count:2  //积分消耗
				},
				title: "山东省造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterLu,
			zjzxfResult
		}
	}
</script>

<style>
</style>
