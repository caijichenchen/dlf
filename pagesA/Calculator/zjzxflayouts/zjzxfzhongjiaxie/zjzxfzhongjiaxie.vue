<template>
	<base-layout :detailId='1494'>
		<template v-slot:jsq>
			<zjzxf-counter-zhongjiaxie :title="title"></zjzxf-counter-zhongjiaxie>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterZhongjiaxie from "./zjzxf-counter_zhongjiaxie.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfZhongjiaxie',  //api请求
					count:2  //积分消耗
				},
				title: "中价协造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterZhongjiaxie,
			zjzxfResult
		}
	}
</script>

<style>
</style>
