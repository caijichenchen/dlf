<template>
	<base-layout :detailId="1690">
		<template v-slot:jsq>
			<zcpgsf-counter-xiang></zcpgsf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterXiang from "./zcpgsf_counter_xiang.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfXiang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterXiang
		}
	}
</script>

<style>

</style>
