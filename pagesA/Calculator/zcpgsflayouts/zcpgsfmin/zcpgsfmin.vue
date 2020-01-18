<template>
	<base-layout :detailId="1557">
		<template v-slot:jsq>
			<zcpgsf-counter-min></zcpgsf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterMin from "./zcpgsf_counter_min.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfMin',  //api请求
					count:2  //积分消耗
				},
				title:'福建'
			}
		},
		components:{
			zcpgsfCounterMin,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
