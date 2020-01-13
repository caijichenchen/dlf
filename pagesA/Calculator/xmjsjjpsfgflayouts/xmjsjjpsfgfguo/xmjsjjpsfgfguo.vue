<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<xmjsjjpsfgf-counter-guo></xmjsjjpsfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<xmjsjjpsfgf-result></xmjsjjpsfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import xmjsjjpsfgfCounterGuo from "./xmjsjjpsfgf_counter_guo.vue"
	import xmjsjjpsfgfResult from "./xmjsjjpsfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmjsjjpsfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmjsjjpsfgfCounterGuo,
			xmjsjjpsfgfResult
		}
	}
</script>

<style>

</style>
