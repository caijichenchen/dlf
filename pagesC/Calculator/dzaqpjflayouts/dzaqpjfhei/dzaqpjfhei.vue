<template>
	<base-layout :detailId="1643">
		<template v-slot:jsq>
			<dzaqpjf-counter-hei></dzaqpjf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterHei from "./dzaqpjf-counter_hei.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfHei',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterHei
		}
	}
</script>

<style>
</style>
