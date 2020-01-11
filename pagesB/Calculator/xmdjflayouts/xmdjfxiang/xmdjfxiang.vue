<template>
	<base-layout :detailId="997">
		<template v-slot:jsq>
			<xmdjf-counter-xiang></xmdjf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<xmdjf-result></xmdjf-result>
		</template>
	</base-layout>
</template>

<script>
	import xmdjfCounterXiang from "./xmdjf_counter_xiang.vue"
	import xmdjfResult from "./xmdjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmdjfXiang',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmdjfCounterXiang,
			xmdjfResult
		}
	}
</script>

<style>

</style>
