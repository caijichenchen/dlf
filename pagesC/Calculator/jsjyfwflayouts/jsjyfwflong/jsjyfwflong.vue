<template>
	<base-layout :detailId="1727">
		<template v-slot:jsq>
			<jsjyfwf-counter-long></jsjyfwf-counter-long>
			<computing v-bind:countData = "countData"></computing>
			<result title="甘肃省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterLong from "./jsjyfwf_counter_long.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfLong',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterLong
		}
	}
</script>

<style>

</style>
