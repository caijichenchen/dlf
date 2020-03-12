<template>
	<base-layout :detailId="1671">
		<template v-slot:jsq>
			<jsjyfwf-counter-su></jsjyfwf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterSu from "./jsjyfwf_counter_su.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfSu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterSu
		}
	}
</script>

<style>

</style>
