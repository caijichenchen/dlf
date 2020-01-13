<template>
	<base-layout :detailId="1615">
		<template v-slot:jsq>
			<stbcbcf-counter-ji></stbcbcf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterJi from "./stbcbcf_counter_ji.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfJi',  //api请求
					count:1  //积分消耗
				},
				title:'河北省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterJi,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
