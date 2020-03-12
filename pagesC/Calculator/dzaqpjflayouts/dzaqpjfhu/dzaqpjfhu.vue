<template>
	<base-layout :detailId="1653">
		<template v-slot:jsq>
			<dzaqpjf-counter-hu></dzaqpjf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterHu from "./dzaqpjf-counter_hu.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfHu',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterHu
		}
	}
</script>

<style>
</style>
