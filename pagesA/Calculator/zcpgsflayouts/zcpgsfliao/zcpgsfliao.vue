<template>
	<base-layout :detailId="282">
		<template v-slot:jsq>
			<zcpgsf-counter-liao></zcpgsf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterLiao from "./zcpgsf_counter_liao.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfLiao',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterLiao
		}
	}
</script>

<style>

</style>
