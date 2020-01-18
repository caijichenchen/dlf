<template>
	<base-layout :detailId='318'>
		<template v-slot:jsq>
			<zjzxf-counter-tianjin :title="title"></zjzxf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterTianjin from "./zjzxf-counter_tianjin.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfTianjin',  //api请求
					count:2  //积分消耗
				},
				title: "天津造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterTianjin,
			zjzxfResult
		}
	}
</script>

<style>
</style>
