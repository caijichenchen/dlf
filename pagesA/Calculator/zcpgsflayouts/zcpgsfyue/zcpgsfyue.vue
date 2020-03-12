<template>
	<base-layout :detailId="264">
		<template v-slot:jsq>
			<zcpgsf-counter-yue></zcpgsf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="广东省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterYue from "./zcpgsf_counter_yue.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfYue',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterYue
		}
	}
</script>

<style>

</style>
