<template>
	<base-layout :detailId="1581">
		<template v-slot:jsq>
			<zcpgsf-counter-zang></zcpgsf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterZang from "./zcpgsf_counter_zang.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfZang',  //api请求
					count:2  //积分消耗
				},
				title:'西藏'
			}
		},
		components:{
			zcpgsfCounterZang,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
