<template>
	<base-layout :detailId="1590">
		<template v-slot:jsq>
			<dzaqpjf-counter-jing></dzaqpjf-counter-jing>
			<computing v-bind:countData = "countData"></computing>
			<result title="北京市地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterJing from "./dzaqpjf-counter_jing.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfJing',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterJing
		}
	}
</script>

<style>
</style>
