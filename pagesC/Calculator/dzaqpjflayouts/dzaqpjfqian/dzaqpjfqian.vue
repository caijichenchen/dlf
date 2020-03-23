<template>
	<base-layout :detailId="1700">
		<template v-slot:jsq>
			<dzaqpjf-counter-qian></dzaqpjf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州省地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterQian from "./dzaqpjf-counter_qian.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfQian',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterQian
		}
	}
</script>

<style>
</style>
