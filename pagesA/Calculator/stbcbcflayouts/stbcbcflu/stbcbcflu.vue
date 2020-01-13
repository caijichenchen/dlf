<template>
	<base-layout :detailId="1676">
		<template v-slot:jsq>
			<stbcbcf-counter-lu></stbcbcf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterLu from "./stbcbcf_counter_lu.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfLu',  //api请求
					count:1  //积分消耗
				},
				title:山东省
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterLu,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
