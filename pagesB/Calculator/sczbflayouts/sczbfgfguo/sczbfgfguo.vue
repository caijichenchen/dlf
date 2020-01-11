<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<sczbfgf-counter-guo></sczbfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<sczbfgf-result></sczbfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import sczbfgfCounterGuo from "./sczbfgf_counter_guo.vue"
	import sczbfgfResult from "./sczbfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sczbfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sczbfgfCounterGuo,
			sczbfgfResult
		}
	}
</script>

<style>

</style>
