<template>
	<base-layout :detailId="262">
		<template v-slot:jsq>
			<zcpgsf-counter-guo></zcpgsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterGuo from "./zcpgsf_counter_guo.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterGuo
		}
	}
</script>

<style>

</style>
