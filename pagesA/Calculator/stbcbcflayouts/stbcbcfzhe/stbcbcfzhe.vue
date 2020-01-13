<template>
	<base-layout :detailId="1655">
		<template v-slot:jsq>
			<stbcbcf-counter-zhe></stbcbcf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterZhe from "./stbcbcf_counter_zhe.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfZhe',  //api请求
					count:1  //积分消耗
				},
				title:'浙江省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterZhe,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
