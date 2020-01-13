<template>
	<base-layout :detailId="1587">
		<template v-slot:jsq>
			<stbcbcf-counter-wan></stbcbcf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterWan from "./stbcbcf_counter_wan.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfWan',  //api请求
					count:1  //积分消耗
				},
				title:'安徽省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterWan,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
