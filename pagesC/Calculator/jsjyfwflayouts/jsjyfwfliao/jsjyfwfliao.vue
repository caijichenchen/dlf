<template>
	<base-layout :detailId="1630">
		<template v-slot:jsq>
			<jsjyfwf-counter-liao></jsjyfwf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterLiao from "./jsjyfwf_counter_liao.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfLiao',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterLiao
		}
	}
</script>

<style>

</style>
