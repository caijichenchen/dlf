<template>
	<view>
		<base-layout>
			<template v-slot:jsq>
				<chf-counter-guo></chf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<chf-result></chf-result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import chfCounterGuo from "./chf-counter_guo.vue"
	import chfResult from "./chf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/chfGuo',  //api请求
					count:2  //积分消耗
				},
			}
		},
		methods: {
			
		},
		components:{
			chfCounterGuo,
			chfResult,
		}
	}
</script>

<style>
</style>
