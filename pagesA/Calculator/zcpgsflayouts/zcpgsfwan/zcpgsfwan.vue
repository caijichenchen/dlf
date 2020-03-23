<template>
	<base-layout :detailId="313">
		<template v-slot:jsq>
			<zcpgsf-counter-wan></zcpgsf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterWan from "./zcpgsf_counter_wan.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfWan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterWan
		}
	}
</script>

<style>

</style>
