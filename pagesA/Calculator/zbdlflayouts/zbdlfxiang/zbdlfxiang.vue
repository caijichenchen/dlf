<template>
	<base-layout :detailId="1567">
		<template v-slot:jsq>
			<zbdlf-counter-xiang></zbdlf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterXiang from "./zbdlf_counter_xiang.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfXiang',  //api请求
					count:2  //积分消耗
				},
				title:'湖南'
			}
		},
		components:{
			zbdlfCounterXiang,
			zbdlfResult
		}
	}
</script>

<style>

</style>
