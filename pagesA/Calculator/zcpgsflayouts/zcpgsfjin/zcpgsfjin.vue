<template>
	<base-layout :detailId="1505">
		<template v-slot:jsq>
			<zcpgsf-counter-jin></zcpgsf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJin from "./zcpgsf_counter_jin.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterJin
		}
	}
</script>

<style>

</style>
