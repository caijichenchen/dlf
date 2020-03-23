<template>
	<base-layout :detailId="1617">
		<template v-slot:jsq>
			<zcpgsf-counter-ji></zcpgsf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJi from "./zcpgsf_counter_ji.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJi',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterJi
		}
	}
</script>

<style>

</style>
