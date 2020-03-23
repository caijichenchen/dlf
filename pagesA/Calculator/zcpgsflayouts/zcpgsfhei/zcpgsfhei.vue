<template>
	<base-layout :detailId="1645">
		<template v-slot:jsq>
			<zcpgsf-counter-hei></zcpgsf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterHei from "./zcpgsf_counter_hei.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfHei',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterHei
		}
	}
</script>

<style>

</style>
