<template>
	<base-layout :detailId="1557">
		<template v-slot:jsq>
			<zcpgsf-counter-min></zcpgsf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<result title="福建省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterMin from "./zcpgsf_counter_min.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfMin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterMin
		}
	}
</script>

<style>

</style>
