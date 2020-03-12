<template>
	<base-layout :detailId="1581">
		<template v-slot:jsq>
			<zcpgsf-counter-zang></zcpgsf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<result title="西藏资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterZang from "./zcpgsf_counter_zang.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfZang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterZang
		}
	}
</script>

<style>

</style>
