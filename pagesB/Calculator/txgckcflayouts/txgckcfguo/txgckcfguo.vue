<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<txgckcf-counter-guo></txgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程勘察收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import txgckcfCounterGuo from "./txgckcf-counter_guo.vue"
	import {txgckcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl +'/api/txgckcfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(txgckcfData)),
			}
		},
		components:{
			txgckcfCounterGuo
		}
	}
</script>

<style>
</style>
