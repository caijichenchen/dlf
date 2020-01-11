<template>
	<base-layout :detailId="1894">
		<template v-slot:jsq>
			<zsxzsjfsz-counter-guo></zsxzsjfsz-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<zsxzsjfsz-result></zsxzsjfsz-result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfszCounterGuo from "./zsxzsjfsz_counter_guo.vue"
	import zsxzsjfszResult from "./zsxzsjfsz_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zsxzsjfszGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			zsxzsjfszCounterGuo,
			zsxzsjfszResult
		}
	}
</script>

<style>

</style>
