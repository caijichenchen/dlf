<template>
	<base-layout :detailId="928">
		<template v-slot:jsq>
			<jlfjin-counter-jin></jlfjin-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfjinCounterJin from "./jlfjin_counter_jin.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfLu',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Jin')),
			}
		},
		components:{
			jlfjinCounterJin
		}
	}
</script>

<style>

</style>
