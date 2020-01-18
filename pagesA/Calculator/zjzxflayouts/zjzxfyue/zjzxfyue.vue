<template>
	<base-layout :detailId="920">
		<template v-slot:jsq>
			<zjzxf-counter-yue :title="title"></zjzxf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterYue from "./zjzxf-counter_yue.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYue',  //api请求
					count:2  //积分消耗
				},
				title: "广东造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterYue,
			zjzxfResult,
		}
	}
</script>

<style>
</style>
