<template>
	<base-layout :detailId="1645">
		<template v-slot:jsq>
			<zcpgsf-counter-hei></zcpgsf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterHei from "./zcpgsf_counter_hei.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfHei',  //api请求
					count:2  //积分消耗
				},
				title:'黑龙江'
			}
		},
		components:{
			zcpgsfCounterHei,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
