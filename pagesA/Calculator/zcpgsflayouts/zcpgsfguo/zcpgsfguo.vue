<template>
	<base-layout :detailId="262">
		<template v-slot:jsq>
			<zcpgsf-counter-guo></zcpgsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterGuo from "./zcpgsf_counter_guo.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfGuo',  //api请求
					count:2  //积分消耗
				},
				title:'全国'
			}
		},
		components:{
			zcpgsfCounterGuo,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
