<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<gcdebzbzglfgf-counter-guo></gcdebzbzglfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcdebzbzglfgf-result></gcdebzbzglfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcdebzbzglfgfCounterGuo from "./gcdebzbzglfgf_counter_guo.vue"
	import gcdebzbzglfgfResult from "./gcdebzbzglfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcdebzbzglfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcdebzbzglfgfCounterGuo,
			gcdebzbzglfgfResult
		}
	}
</script>

<style>

</style>
