<template>
	<base-layout :detailId="1636">
		<template v-slot:jsq>
			<zbdlf-counter-jilin></zbdlf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterJilin from "./zbdlf_counter_jilin.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfJilin',  //api请求
					count:2  //积分消耗
				},
				title:'吉林'
			}
		},
		methods: {
			
		},
		components:{
			zbdlfCounterJilin,
			zbdlfResult
		}
	}
</script>

<style>

</style>
