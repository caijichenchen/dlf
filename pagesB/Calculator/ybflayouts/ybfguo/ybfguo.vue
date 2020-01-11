<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<ybf-counter-guo></ybf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<ybf-result></ybf-result>
		</template>
	</base-layout>
</template>

<script>
	import ybfCounterGuo from "./ybf-counter_guo.vue"
	import ybfResult from "./ybf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ybfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ybfCounterGuo,
			ybfResult
		}
	}
</script>

<style>
</style>
