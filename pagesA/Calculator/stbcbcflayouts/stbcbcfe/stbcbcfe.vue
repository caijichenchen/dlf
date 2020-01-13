<template>
	<base-layout :detailId="1693">
		<template v-slot:jsq>
			<stbcbcf-counter-e></stbcbcf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterE from "./stbcbcf_counter_e.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfE',  //api请求
					count:1  //积分消耗
				},
				title:'湖北省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterE,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
