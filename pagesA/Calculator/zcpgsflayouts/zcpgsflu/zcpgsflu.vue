<template>
	<base-layout :detailId="283">
		<template v-slot:jsq>
			<zcpgsf-counter-lu></zcpgsf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<result title="山东省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterLu from "./zcpgsf_counter_lu.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfLu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterLu
		}
	}
</script>

<style>

</style>
