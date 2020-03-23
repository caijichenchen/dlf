<template>
	<base-layout :detailId="1820">
		<template v-slot:jsq>
			<jsjyfwf-counter-ba></jsjyfwf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<result title="重庆市建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterBa from "./jsjyfwf_counter_ba.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfBa',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterBa
		}
	}
</script>

<style>

</style>
