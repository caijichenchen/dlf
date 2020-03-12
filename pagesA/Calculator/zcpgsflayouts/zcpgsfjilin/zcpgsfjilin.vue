<template>
	<base-layout :detailId="1638">
		<template v-slot:jsq>
			<zcpgsf-counter-jilin></zcpgsf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<result title="吉林省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterJilin from "./zcpgsf_counter_jilin.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJilin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterJilin
		}
	}
</script>

<style>

</style>
