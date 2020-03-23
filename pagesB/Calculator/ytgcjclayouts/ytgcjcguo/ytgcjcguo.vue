<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcjc-counter-guo></ytgcjc-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国岩土工程检测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcjcCounterGuo from "./ytgcjc-counter_guo.vue"
	import {ytgcjcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcjcGuo',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ytgcjcData)),
			}
		},
		components:{
			ytgcjcCounterGuo
		}
	}
</script>

<style>
</style>
