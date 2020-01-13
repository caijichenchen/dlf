<template>
	<base-layout :detailId="1696">
		<template v-slot:jsq>
			<stbcbcf-counter-hei></stbcbcf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterHei from "./stbcbcf_counter_hei.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfHei',  //api请求
					count:1  //积分消耗
				},
				title:'黑龙江'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterHei,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
