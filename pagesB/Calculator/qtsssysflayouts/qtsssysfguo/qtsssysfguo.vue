<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<qtsssysf-counter-guo></qtsssysf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<qtsssysf-result></qtsssysf-result>
		</template>
	</base-layout>
</template>

<script>
	import qtsssysfCounterGuo from "./qtsssysf-counter-guo.vue"
	import qtsssysfResult from "./qtsssysf-result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/qtsssysfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			qtsssysfCounterGuo,
			qtsssysfResult
		}
	}
</script>

<style>

</style>
