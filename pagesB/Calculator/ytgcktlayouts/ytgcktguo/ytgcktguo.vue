<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgckcsf-counter-liao></ytgckcsf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="岩土工程勘探费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ytgckcsfCounterLiao from "./ytgckcsf-counter_liao.vue"
	import {ytgcktData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcktGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ytgcktData)),
			}
		},
		components:{
			ytgckcsfCounterLiao
		}
	}
</script>

<style>
</style>
