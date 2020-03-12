<template>
	<base-layout :detailId="1619">
		<template v-slot:jsq>
			<jsjyfwf-counter-ji></jsjyfwf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterJi from "./jsjyfwf_counter_ji.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfJi',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterJi
		}
	}
</script>

<style>

</style>
