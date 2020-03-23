<template>
	<base-layout :detailId="271">
		<template v-slot:jsq>
			<dzaqpjf-counter-qiong></dzaqpjf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省地震安全评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterQiong from "./dzaqpjf-counter_qiong.vue"
	import {dzaqpjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfQiong',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dzaqpjfData)),
			}
		},
		components:{
			dzaqpjfCounterQiong
		}
	}
</script>

<style>
</style>
