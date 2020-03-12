<template>
	<base-layout :detailId="1588">
		<template v-slot:jsq>
			<jsjyfwf-counter-jing></jsjyfwf-counter-jing>
			<computing v-bind:countData = "countData"></computing>
			<result title="北京市建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterJing from "./jsjyfwf_counter_jing.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfJing',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterJing
		}
	}
</script>

<style>

</style>
