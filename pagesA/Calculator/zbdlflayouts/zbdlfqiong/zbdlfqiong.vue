<template>
	<base-layout :detailId="241">
		<template v-slot:jsq>
			<zbdlf-counter-qiong></zbdlf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterQiong from "./zbdlf_counter_qiong.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfQiong',  //api请求
					count:2  //积分消耗
				},
				title:'海南'
			}
		},
		components:{
			zbdlfCounterQiong,
			zbdlfResult
		}
	}
</script>

<style>

</style>
