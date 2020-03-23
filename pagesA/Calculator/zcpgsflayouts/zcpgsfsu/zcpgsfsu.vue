<template>
	<base-layout>
		<template v-slot:jsq>
			<zcpgsf-counter-su></zcpgsf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterSu from "./zcpgsf_counter_su.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfSu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterSu
		}
	}
</script>

<style>

</style>
