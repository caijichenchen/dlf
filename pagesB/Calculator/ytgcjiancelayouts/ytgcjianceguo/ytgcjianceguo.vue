<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcjiance-counter-guo></ytgcjiance-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国岩土工程监测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcjianceCounterGuo from "./ytgcjiance-counter_guo.vue"
	import {ytgcjianceData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcjianceGuo',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ytgcjianceData)),
			}
		},
		components:{
			ytgcjianceCounterGuo
		}
	}
</script>

<style>
</style>
