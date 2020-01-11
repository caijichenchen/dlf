<template>
	<base-layout :detailId="136">
		<template v-slot:jsq>
			<zsxzsjf-counter-guo></zsxzsjf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<zsxz-result></zsxz-result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfCounterGuo from "./zsxzsjf_counter_guo.vue"
	import zsxzResult from "./zsxz_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/sjfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			zsxzsjfCounterGuo,
			zsxzResult
		}
	}
</script>

<style>

</style>
