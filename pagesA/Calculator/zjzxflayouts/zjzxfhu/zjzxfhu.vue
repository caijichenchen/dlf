<template>
	<base-layout :detailId="1485">
		<template v-slot:jsq>
			<zjzxf-counter-hu :title="title"></zjzxf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterHu from "./zjzxf-counter_hu.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfHu',  //api请求
					count:2  //积分消耗
				},
				title: "上海造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterHu,
			zjzxfResult
		}
	}
</script>

<style>
</style>
