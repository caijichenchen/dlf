<template>
	<base-layout :detailId="1690">
		<template v-slot:jsq>
			<zcpgsf-counter-xiang></zcpgsf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterXiang from "./zcpgsf_counter_xiang.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfXiang',  //api请求
					count:2  //积分消耗
				},
				title: '湖南'
			}
		},
		components:{
			zcpgsfCounterXiang,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
