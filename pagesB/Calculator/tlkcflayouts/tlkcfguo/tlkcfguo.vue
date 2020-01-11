<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<tlkcf-counter-guo></tlkcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<tlkcf-result></tlkcf-result>
		</template>
	</base-layout>
</template>

<script>
	import tlkcfCounterGuo from "./tlkcf-counter_guo.vue"
	import tlkcfResult from "./tlkcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/tlkcfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			tlkcfCounterGuo,
			tlkcfResult
		}
	}
</script>

<style>
</style>
