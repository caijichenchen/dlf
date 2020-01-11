<template>
	<base-layout :detailId="1922">
		<template v-slot:jsq>
			<tlkcsjsf-counter-guo></tlkcsjsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<tlkcsjsf-result></tlkcsjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import tlkcsjsfCounterGuo from "./tlkcsjsf-counter_guo.vue"
	import tlkcsjsfResult from "./tlkcsjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+ '/api/tlkcsjsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			tlkcsjsfCounterGuo,
			tlkcsjsfResult
		}
	}
</script>

<style>
</style>
