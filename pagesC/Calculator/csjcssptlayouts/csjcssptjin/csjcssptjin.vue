<template>
	<base-layout :detailId="1622">
		<template v-slot:jsq>
			<csjcsspt-counter-jin></csjcsspt-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省城市基础设施配套费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterJin from "./csjcsspt_counter_jin.vue"
	import {csjcssptData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptJin',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csjcssptData)),
			}
		},
		components:{
			csjcssptCounterJin
		}
	}
</script>

<style>

</style>
