<template>
	<base-layout :detailId="1597">
		<template v-slot:jsq>
			<zcpgsf-counter-gui></zcpgsf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西省资产评估收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterGui from "./zcpgsf_counter_gui.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfGui',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData))
			}
		},
		components:{
			zcpgsfCounterGui
		}
	}
</script>

<style>

</style>
