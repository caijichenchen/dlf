<template>
	<base-layout :detailId="1632">
		<template v-slot:jsq>
			<ytgckcsf-counter-liao></ytgckcsf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省岩土工程勘察收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ytgckcsfCounterLiao from "./ytgckcsf-counter_liao.vue"
	import {ytgckcsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgckcsfLiao',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ytgckcsfData)),
			}
		},
		components:{
			ytgckcsfCounterLiao
		}
	}
</script>

<style>
</style>
