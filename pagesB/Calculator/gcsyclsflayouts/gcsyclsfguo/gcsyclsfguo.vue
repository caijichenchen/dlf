<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcsyclsf-counter-guo></gcsyclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcsyclsf-result></gcsyclsf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcsyclsfCounterGuo from "./gcsyclsf-counter_guo.vue"
	import gcsyclsfResult from "./gcsyclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcsyclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcsyclsfCounterGuo,
			gcsyclsfResult
		}
	}
</script>

<style>
</style>
