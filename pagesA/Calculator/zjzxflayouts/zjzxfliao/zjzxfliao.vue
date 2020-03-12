<template>
	<base-layout :detailId="1487">
		<template v-slot:jsq>
			<zjzxf-counter-liao :title="title"></zjzxf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterLiao from "./zjzxf-counter_liao.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfLiao',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterLiao
		}
	}
</script>

<style>
</style>
