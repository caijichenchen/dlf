<template>
	<base-layout :detailId="1916">
		<template v-slot:jsq>
			<wrdjzf-counter-guo></wrdjzf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<wrdjzf-result></wrdjzf-result>
		</template>
	</base-layout>
</template>

<script>
	import wrdjzfCounterGuo from "./wrdjzf-counter_guo.vue"
	import wrdjzfResult from "./wrdjzf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/wrdjzfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			wrdjzfCounterGuo,
			wrdjzfResult
		}
	}
</script>

<style>
</style>
