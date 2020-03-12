<template>
	<base-layout :detailId="1599">
		<template v-slot:jsq>
			<dzaqpjf-counter-ji></dzaqpjf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterJi from "./dzaqpjf-counter_ji.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfJi',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterJi
		}
	}
</script>

<style>
</style>
