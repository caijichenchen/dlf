<template>
	<base-layout :detailId="1692">
		<template v-slot:jsq>
			<jsjyfwf-counter-e></jsjyfwf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖北省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterE from "./jsjyfwf_counter_e.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfE',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterE
		}
	}
</script>

<style>

</style>
