<template>
	<base-layout :detailId="1665">
		<template v-slot:jsq>
			<stbcbcf-counter-su></stbcbcf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterSu from "./stbcbcf_counter_su.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfSu',  //api请求
					count:1  //积分消耗
				},
				title:'江苏'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterSu,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
