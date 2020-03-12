<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dsclsf-counter-guo></dsclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="洞室测量收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dsclsfCounterGuo from "./dsclsf-counter_guo.vue"
	import {dsclsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dsclsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dsclsfData)),
			}
		},
		components:{
			dsclsfCounterGuo
		}
	}
</script>

<style>
</style>
